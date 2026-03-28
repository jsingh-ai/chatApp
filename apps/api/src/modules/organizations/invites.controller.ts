import { Controller, Param, Post, UseGuards } from '@nestjs/common';

import { OrganizationInvitesService } from './organization-invites.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('invites')
export class InvitesController {
  constructor(
    private readonly organizationInvitesService: OrganizationInvitesService,
  ) {}

  @Post(':token/accept')
  accept(
    @CurrentUser() user: { userId: string },
    @Param('token') token: string,
  ) {
    return this.organizationInvitesService.acceptInvite(token, user.userId);
  }
}
