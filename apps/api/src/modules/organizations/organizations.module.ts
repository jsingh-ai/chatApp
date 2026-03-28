import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { OrganizationInvitesService } from './organization-invites.service';
import { UsersModule } from '../users/users.module';
import { OrgRolesGuard } from '../../common/guards/org-roles.guard';
import { InvitesController } from './invites.controller';
import { GlobalRoleGuard } from '../../common/guards/global-role.guard';

@Module({
  imports: [UsersModule],
  controllers: [OrganizationsController, InvitesController],
  providers: [
    OrganizationsService,
    OrganizationInvitesService,
    OrgRolesGuard,
    GlobalRoleGuard,
  ],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
