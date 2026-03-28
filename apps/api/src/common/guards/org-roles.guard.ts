import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { OrganizationRole } from '@prisma/client';
import { Request } from 'express';

import { ORG_ROLES_KEY } from '../decorators/org-roles.decorator';
import { OrganizationsService } from '../../modules/organizations/organizations.service';
import type { AppUserRole } from '../types/jwt-payload.type';

interface RequestWithUser extends Request {
  user?: {
    userId: string;
    role?: AppUserRole;
  };
}

@Injectable()
export class OrgRolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly organizationsService: OrganizationsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<OrganizationRole[]>(
      ORG_ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;
    if (!user) {
      throw new UnauthorizedException('Authentication required');
    }

    if (user.role === 'SUPER_ADMIN') {
      return true;
    }

    const orgIdParam = request.params?.orgId ?? request.params?.id;
    const orgId = Array.isArray(orgIdParam) ? orgIdParam[0] : orgIdParam;
    if (!orgId) {
      throw new BadRequestException('Organization id is required');
    }

    const membership = await this.organizationsService.ensureMembership(
      orgId,
      user.userId,
    );
    if (!requiredRoles.includes(membership.role)) {
      throw new ForbiddenException('Insufficient role');
    }
    return true;
  }
}
