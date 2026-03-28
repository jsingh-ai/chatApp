import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { UseGuards, Injectable } from '@nestjs/common';
import { Server, Socket, DefaultEventsMap } from 'socket.io';

import { WsJwtGuard } from '../../common/guards/ws-jwt.guard';
import { ChannelsService } from '../channels/channels.service';
import { Message } from '@prisma/client';
import { OrganizationsService } from '../organizations/organizations.service';
import type { AppUserRole } from '../../common/types/jwt-payload.type';
import { getAllowedFrontendOrigins } from '../../config/frontend-origins';

interface GatewayUser {
  userId: string;
  email: string;
  role?: AppUserRole;
}

const roomForChannel = (channelId: string) => `channel:${channelId}`;
const roomForOrganization = (orgId: string) => `org:${orgId}`;

type AuthedSocket = Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  { user?: GatewayUser; organizations?: string[] }
>;

@Injectable()
@WebSocketGateway({
  namespace: 'chat',
  cors: {
    origin: getAllowedFrontendOrigins(),
    credentials: false,
  },
})
@UseGuards(WsJwtGuard)
export class MessagesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  private server!: Server;

  private typingUsers = new Map<string, Map<string, NodeJS.Timeout | null>>();
  private presenceByOrg = new Map<string, Set<string>>();

  constructor(
    private readonly channelsService: ChannelsService,
    private readonly organizationsService: OrganizationsService,
  ) {}

  async handleConnection(client: AuthedSocket) {
    const user = client.data?.user;
    if (!user) {
      client.disconnect();
      return;
    }
    const orgIds = await this.organizationsService.listOrganizationIdsForUser(
      user.userId,
    );
    client.data.organizations = orgIds;
    for (const orgId of orgIds) {
      await client.join(roomForOrganization(orgId));
      this.addPresence(orgId, user.userId);
    }
    client.emit('connected');
  }

  handleDisconnect(client: Socket) {
    client.removeAllListeners();
    const authed = client as AuthedSocket;
    const user = authed.data?.user;
    const orgs = authed.data?.organizations ?? [];
    if (user) {
      orgs.forEach((orgId) => this.removePresence(orgId, user.userId));
      this.clearTypingForUser(user.userId);
    }
  }

  @SubscribeMessage('joinChannel')
  async handleJoinChannel(
    @ConnectedSocket() client: AuthedSocket,
    @MessageBody('channelId') channelId?: string,
  ) {
    if (!channelId) {
      return { status: 'error', message: 'channelId is required' };
    }
    const userId = client.data?.user?.userId;
    if (!userId) {
      client.disconnect();
      return { status: 'error', message: 'Unauthorized' };
    }

    await this.channelsService.getById(
      channelId,
      userId,
      client.data.user?.role,
    );
    await client.join(roomForChannel(channelId));
    return { status: 'ok' };
  }

  @SubscribeMessage('leaveChannel')
  async handleLeaveChannel(
    @ConnectedSocket() client: AuthedSocket,
    @MessageBody('channelId') channelId?: string,
  ) {
    if (channelId) {
      await client.leave(roomForChannel(channelId));
    }
    return { status: 'ok' };
  }

  broadcastMessage(
    message: Message & {
      author: any;
      clientMessageId?: string | null;
    },
  ) {
    this.server
      .to(roomForChannel(message.channelId))
      .emit('message.created', message);
  }

  @SubscribeMessage('typing:start')
  async handleTypingStart(
    @ConnectedSocket() client: AuthedSocket,
    @MessageBody('channelId') channelId?: string,
  ) {
    if (!channelId) {
      return;
    }
    const userId = client.data?.user?.userId;
    if (!userId) {
      return;
    }
    try {
      await this.channelsService.getById(
        channelId,
        userId,
        client.data.user?.role,
      );
      this.setTypingState(channelId, userId, true);
    } catch {
      client.disconnect();
    }
  }

  @SubscribeMessage('typing:stop')
  handleTypingStop(
    @ConnectedSocket() client: AuthedSocket,
    @MessageBody('channelId') channelId?: string,
  ) {
    if (!channelId) {
      return;
    }
    const userId = client.data?.user?.userId;
    if (!userId) {
      return;
    }
    this.setTypingState(channelId, userId, false);
  }

  private setTypingState(channelId: string, userId: string, isTyping: boolean) {
    const userMap =
      this.typingUsers.get(channelId) ??
      new Map<string, NodeJS.Timeout | null>();
    if (isTyping) {
      const existing = userMap.get(userId);
      if (existing) {
        clearTimeout(existing);
      }
      const timeout = setTimeout(() => {
        this.setTypingState(channelId, userId, false);
      }, 5000);
      userMap.set(userId, timeout);
    } else {
      const existing = userMap.get(userId);
      if (existing) {
        clearTimeout(existing);
      }
      userMap.delete(userId);
    }
    this.typingUsers.set(channelId, userMap);
    this.emitTypingUpdate(channelId);
  }

  private emitTypingUpdate(channelId: string) {
    const userMap = this.typingUsers.get(channelId);
    const userIds = userMap ? Array.from(userMap.keys()) : [];
    this.server
      .to(roomForChannel(channelId))
      .emit('typing.update', { channelId, userIds });
  }

  private clearTypingForUser(userId: string) {
    for (const [channelId, map] of this.typingUsers.entries()) {
      if (map.has(userId)) {
        const timeout = map.get(userId);
        if (timeout) {
          clearTimeout(timeout);
        }
        map.delete(userId);
        this.emitTypingUpdate(channelId);
      }
    }
  }

  private addPresence(orgId: string, userId: string) {
    const set = this.presenceByOrg.get(orgId) ?? new Set<string>();
    set.add(userId);
    this.presenceByOrg.set(orgId, set);
    this.emitPresence(orgId);
  }

  private removePresence(orgId: string, userId: string) {
    const set = this.presenceByOrg.get(orgId);
    if (!set) {
      return;
    }
    set.delete(userId);
    if (set.size === 0) {
      this.presenceByOrg.delete(orgId);
    }
    this.emitPresence(orgId);
  }

  private emitPresence(orgId: string) {
    const set = this.presenceByOrg.get(orgId) ?? new Set<string>();
    this.server.to(roomForOrganization(orgId)).emit('presence.update', {
      organizationId: orgId,
      onlineUserIds: Array.from(set),
    });
  }
}
