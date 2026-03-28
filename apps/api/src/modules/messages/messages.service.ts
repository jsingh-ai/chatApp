import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ChannelsService } from '../channels/channels.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { AuditService } from '../audit/audit.service';
import { MessagesGateway } from './messages.gateway';
import type { AppUserRole } from '../../common/types/jwt-payload.type';

@Injectable()
export class MessagesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly channelsService: ChannelsService,
    private readonly auditService: AuditService,
    private readonly messagesGateway: MessagesGateway,
  ) {}

  async list(
    channelId: string,
    userId: string,
    query: PaginationQueryDto,
    userRole?: AppUserRole,
  ) {
    await this.channelsService.getById(channelId, userId, userRole);

    const messages = await this.prisma.message.findMany({
      where: { channelId },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            displayName: true,
            createdAt: true,
          },
        },
      },
      take: query.limit,
      ...(query.cursor && { cursor: { id: query.cursor }, skip: 1 }),
      orderBy: { createdAt: 'desc' },
    });

    const hasMore = messages.length === query.limit;
    const nextCursor = hasMore ? messages[messages.length - 1].id : null;

    return {
      items: messages.reverse(),
      nextCursor,
    };
  }

  async create(
    channelId: string,
    userId: string,
    dto: CreateMessageDto,
    userRole?: AppUserRole,
  ) {
    const channel = await this.channelsService.getById(
      channelId,
      userId,
      userRole,
    );
    const message = await this.prisma.message.create({
      data: {
        content: dto.content,
        channelId,
        authorId: userId,
      },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            displayName: true,
            createdAt: true,
          },
        },
      },
    });

    const response = {
      ...message,
      clientMessageId: dto.clientMessageId ?? null,
    };

    await this.auditService.log({
      action: 'message.created',
      userId,
      organizationId: channel.organizationId,
      metadata: {
        channelId,
        messageId: message.id,
      },
    });

    this.messagesGateway.broadcastMessage(response);

    return response;
  }
}
