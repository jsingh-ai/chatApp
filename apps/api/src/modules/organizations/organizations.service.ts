import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationRole } from '@prisma/client';
import type { AppUserRole } from '../../common/types/jwt-payload.type';

@Injectable()
export class OrganizationsService {
  constructor(private readonly prisma: PrismaService) {}

  async listForUser(userId: string) {
    return this.prisma.organization.findMany({
      where: {
        members: {
          some: { userId },
        },
      },
      include: {
        members: true,
        channels: true,
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async create(userId: string, dto: CreateOrganizationDto) {
    const organization = await this.prisma.organization.create({
      data: {
        name: dto.name,
        description: dto.description,
        members: {
          create: {
            userId,
            role: OrganizationRole.OWNER,
          },
        },
        channels: {
          create: [
            {
              name: 'general',
              description: 'General discussion',
            },
          ],
        },
      },
      include: {
        members: true,
        channels: true,
      },
    });

    return organization;
  }

  async getById(id: string, userId: string, userRole?: AppUserRole) {
    if (userRole !== 'SUPER_ADMIN') {
      await this.ensureMembership(id, userId);
    }
    const organization = await this.prisma.organization.findUnique({
      where: { id },
      include: {
        channels: {
          orderBy: { createdAt: 'asc' },
        },
        members: true,
      },
    });

    if (!organization) {
      throw new NotFoundException('Organization not found');
    }

    return organization;
  }

  async listMembers(orgId: string, userId: string, userRole?: AppUserRole) {
    if (userRole !== 'SUPER_ADMIN') {
      await this.ensureMembership(orgId, userId);
    }

    const organization = await this.prisma.organization.findUnique({
      where: { id: orgId },
      include: {
        members: {
          include: {
            user: true,
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!organization) {
      throw new NotFoundException('Organization not found');
    }

    return organization.members;
  }

  async ensureMembership(organizationId: string, userId: string) {
    const membership = await this.prisma.organizationMember.findFirst({
      where: { organizationId, userId },
    });

    if (!membership) {
      throw new ForbiddenException('You are not part of this organization');
    }

    return membership;
  }

  async listOrganizationIdsForUser(userId: string) {
    const memberships = await this.prisma.organizationMember.findMany({
      where: { userId },
      select: { organizationId: true },
    });
    return memberships.map((membership) => membership.organizationId);
  }
}
