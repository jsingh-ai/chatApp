import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateChannelDto } from './dto/create-channel.dto';
import { OrganizationsService } from '../organizations/organizations.service';
import { DetailedChannel } from './types/channel-with-meta';
import { Prisma } from '@prisma/client';
import type { AppUserRole } from '../../common/types/jwt-payload.type';

type ChannelWithPreview = Prisma.ChannelGetPayload<{
  include: {
    messages: {
      orderBy: { createdAt: 'desc' };
      take: 1;
      include: {
        author: {
          select: {
            id: true;
            displayName: true;
          };
        };
      };
    };
  };
}>;

@Injectable()
export class ChannelsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly organizationsService: OrganizationsService,
  ) {}

  async listForOrganization(
    organizationId: string,
    userId: string,
    userRole?: AppUserRole,
  ): Promise<DetailedChannel[]> {
    const isSuperAdmin = userRole === 'SUPER_ADMIN';
    if (!isSuperAdmin) {
      await this.organizationsService.ensureMembership(organizationId, userId);
    }

    const channels = (await this.prisma.channel.findMany({
      where: {
        organizationId,
        OR: [{ isPrivate: false }, { members: { some: { userId } } }],
      },
      orderBy: { createdAt: 'asc' },
      include: {
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          include: {
            author: {
              select: {
                id: true,
                displayName: true,
              },
            },
          },
        },
      },
    })) as ChannelWithPreview[];

    const readStates = (await this.prisma.channelReadState.findMany({
      where: {
        userId,
        channel: {
          organizationId,
        },
      },
      select: {
        channelId: true,
        lastReadAt: true,
      },
    })) as Array<{ channelId: string; lastReadAt: Date }>;

    const readMap = new Map(
      readStates.map((state) => [state.channelId, state.lastReadAt]),
    );

    const unreadCounts = await Promise.all(
      channels.map((channel) => {
        const lastReadAt = readMap.get(channel.id);
        return this.prisma.message.count({
          where: {
            channelId: channel.id,
            ...(lastReadAt && { createdAt: { gt: lastReadAt } }),
          },
        });
      }),
    );

    return channels.map((channel, index) => ({
      id: channel.id,
      name: channel.name,
      description: channel.description,
      organizationId: channel.organizationId,
      isPrivate: channel.isPrivate,
      createdAt: channel.createdAt,
      updatedAt: channel.updatedAt,
      lastMessage: channel.messages[0] ?? null,
      unreadCount: unreadCounts[index],
    }));
  }

  async markAsRead(channelId: string, userId: string, userRole?: AppUserRole) {
    await this.getById(channelId, userId, userRole);
    const now = new Date();
    await this.prisma.channelReadState.upsert({
      where: {
        channelId_userId: {
          channelId,
          userId,
        },
      },
      update: {
        lastReadAt: now,
      },
      create: {
        channelId,
        userId,
        lastReadAt: now,
      },
    });

    return { status: 'ok' };
  }

  async listForOrganizationSimple(organizationId: string, userId: string) {
    await this.organizationsService.ensureMembership(organizationId, userId);

    return this.prisma.channel.findMany({
      where: {
        organizationId,
        OR: [{ isPrivate: false }, { members: { some: { userId } } }],
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async create(
    organizationId: string,
    userId: string,
    dto: CreateChannelDto,
    userRole?: AppUserRole,
  ) {
    const isSuperAdmin = userRole === 'SUPER_ADMIN';
    if (!isSuperAdmin) {
      await this.organizationsService.ensureMembership(organizationId, userId);
    }
    const channel = await this.prisma.channel.create({
      data: {
        organizationId,
        name: dto.name,
        description: dto.description,
        isPrivate: dto.isPrivate ?? false,
        members: dto.isPrivate
          ? {
              create: [
                {
                  userId,
                },
              ],
            }
          : undefined,
      },
    });

    return channel;
  }

  async getById(id: string, userId: string, userRole?: AppUserRole) {
    const channel = await this.prisma.channel.findUnique({
      where: { id },
      include: {
        organization: true,
      },
    });

    if (!channel) {
      throw new NotFoundException('Channel not found');
    }

    const isSuperAdmin = userRole === 'SUPER_ADMIN';
    if (!isSuperAdmin) {
      await this.organizationsService.ensureMembership(
        channel.organizationId,
        userId,
      );
    }

    if (channel.isPrivate) {
      const membership = await this.prisma.channelMember.findFirst({
        where: { channelId: id, userId },
      });
      if (!membership) {
        throw new ForbiddenException('Channel restricted');
      }
    }

    return channel;
  }
}
