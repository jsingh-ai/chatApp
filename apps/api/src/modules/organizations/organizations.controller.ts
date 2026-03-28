import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationInvitesService } from './organization-invites.service';
import { OrgRoles } from '../../common/decorators/org-roles.decorator';
import { OrganizationRole } from '@prisma/client';
import { OrgRolesGuard } from '../../common/guards/org-roles.guard';
import { CreateInviteDto } from './dto/create-invite.dto';
import { GlobalRoleGuard } from '../../common/guards/global-role.guard';
import { GlobalRoles } from '../../common/decorators/global-role.decorator';
import type { AppUserRole } from '../../common/types/jwt-payload.type';

@UseGuards(JwtAuthGuard)
@Controller('organizations')
export class OrganizationsController {
  constructor(
    private readonly organizationsService: OrganizationsService,
    private readonly organizationInvitesService: OrganizationInvitesService,
  ) {}

  @Get()
  list(@CurrentUser() user: { userId: string }) {
    return this.organizationsService.listForUser(user.userId);
  }

  @UseGuards(GlobalRoleGuard)
  @GlobalRoles('SUPER_ADMIN')
  @Post()
  create(
    @CurrentUser() user: { userId: string },
    @Body() dto: CreateOrganizationDto,
  ) {
    return this.organizationsService.create(user.userId, dto);
  }

  @Get(':id')
  getById(
    @CurrentUser() user: { userId: string; role?: AppUserRole },
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    return this.organizationsService.getById(id, user.userId, user.role);
  }

  @Get(':orgId/members')
  listMembers(
    @CurrentUser() user: { userId: string; role?: AppUserRole },
    @Param('orgId', new ParseUUIDPipe()) orgId: string,
  ) {
    return this.organizationInvitesService.listMembers(
      orgId,
      user.userId,
      user.role,
    );
  }

  @UseGuards(OrgRolesGuard)
  @OrgRoles(OrganizationRole.ADMIN, OrganizationRole.OWNER)
  @Get(':orgId/invites')
  listInvites(
    @CurrentUser() user: { userId: string; role?: AppUserRole },
    @Param('orgId', new ParseUUIDPipe()) orgId: string,
  ) {
    return this.organizationInvitesService.listInvites(
      orgId,
      user.userId,
      user.role,
    );
  }

  @UseGuards(OrgRolesGuard)
  @OrgRoles(OrganizationRole.ADMIN, OrganizationRole.OWNER)
  @Post(':orgId/invites')
  createInvite(
    @CurrentUser() user: { userId: string; role?: AppUserRole },
    @Param('orgId', new ParseUUIDPipe()) orgId: string,
    @Body() dto: CreateInviteDto,
  ) {
    return this.organizationInvitesService.createInvite(
      orgId,
      user.userId,
      dto,
      user.role,
    );
  }
}
