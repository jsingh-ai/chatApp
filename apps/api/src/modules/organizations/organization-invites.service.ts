import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationInviteStatus, OrganizationRole } from '@prisma/client';
import { randomBytes } from 'node:crypto';

import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { CreateInviteDto } from './dto/create-invite.dto';
import { OrganizationsService } from './organizations.service';
import type { AppUserRole } from '../../common/types/jwt-payload.type';

const INVITE_DEFAULT_EXPIRY_DAYS = 7;

@Injectable()
export class OrganizationInvitesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly organizationsService: OrganizationsService,
  ) {}

  async listMembers(orgId: string, userId: string, userRole?: AppUserRole) {
    const members = await this.organizationsService.listMembers(
      orgId,
      userId,
      userRole,
    );

    return members.map((member) => ({
      ...member,
      user: this.usersService.toSafeUser(member.user),
    }));
  }

  async listInvites(orgId: string, userId: string, userRole?: AppUserRole) {
    await this.ensureInviteAccess(orgId, userId, userRole);
    return this.prisma.organizationInvite.findMany({
      where: { organizationId: orgId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createInvite(
    orgId: string,
    userId: string,
    dto: CreateInviteDto,
    userRole?: AppUserRole,
  ) {
    await this.ensureInviteAccess(orgId, userId, userRole);

    const normalizedEmail = dto.email.toLowerCase();

    const existingMember = await this.prisma.organizationMember.findFirst({
      where: {
        organizationId: orgId,
        user: {
          email: normalizedEmail,
        },
      },
    });
    if (existingMember) {
      throw new BadRequestException(
        'User already belongs to this organization',
      );
    }

    const existingPendingInvite =
      await this.prisma.organizationInvite.findFirst({
        where: {
          organizationId: orgId,
          email: normalizedEmail,
          status: OrganizationInviteStatus.PENDING,
        },
      });
    if (existingPendingInvite) {
      throw new BadRequestException('An invite for this email already exists.');
    }

    const expiresInDays = dto.expiresInDays ?? INVITE_DEFAULT_EXPIRY_DAYS;
    const expiresAt = new Date(
      Date.now() + expiresInDays * 24 * 60 * 60 * 1000,
    );

    return this.prisma.organizationInvite.create({
      data: {
        email: normalizedEmail,
        token: randomBytes(32).toString('hex'),
        organizationId: orgId,
        invitedById: userId,
        role: dto.role ?? OrganizationRole.MEMBER,
        expiresAt,
      },
    });
  }

  private async ensureInviteAccess(
    orgId: string,
    userId: string,
    userRole?: AppUserRole,
  ) {
    if (userRole === 'SUPER_ADMIN') {
      const organization = await this.prisma.organization.findUnique({
        where: { id: orgId },
        select: { id: true },
      });
      if (!organization) {
        throw new NotFoundException('Organization not found');
      }
      return;
    }

    const membership = await this.organizationsService.ensureMembership(
      orgId,
      userId,
    );
    this.ensureAdminOrOwner(membership.role);
  }

  async acceptInvite(token: string, userId: string) {
    const invite = await this.prisma.organizationInvite.findUnique({
      where: { token },
    });
    if (!invite) {
      throw new NotFoundException('Invite not found');
    }
    if (invite.status !== OrganizationInviteStatus.PENDING) {
      throw new BadRequestException('Invite already processed');
    }
    if (invite.expiresAt.getTime() < Date.now()) {
      await this.prisma.organizationInvite.update({
        where: { id: invite.id },
        data: { status: OrganizationInviteStatus.EXPIRED },
      });
      throw new BadRequestException('Invite expired');
    }

    const user = await this.usersService.findById(userId);
    if (user.email.toLowerCase() !== invite.email.toLowerCase()) {
      throw new ForbiddenException('Invite email does not match your account');
    }

    const existingMember = await this.prisma.organizationMember.findFirst({
      where: {
        organizationId: invite.organizationId,
        userId,
      },
    });
    if (!existingMember) {
      await this.prisma.organizationMember.create({
        data: {
          organizationId: invite.organizationId,
          userId,
          role: invite.role,
        },
      });
    }

    await this.prisma.organizationInvite.update({
      where: { id: invite.id },
      data: { status: OrganizationInviteStatus.ACCEPTED },
    });

    return { organizationId: invite.organizationId };
  }

  private ensureAdminOrOwner(role: OrganizationRole) {
    const permitted: OrganizationRole[] = [
      OrganizationRole.ADMIN,
      OrganizationRole.OWNER,
    ];
    if (!permitted.includes(role)) {
      throw new ForbiddenException('Admin or owner role required');
    }
  }
}
