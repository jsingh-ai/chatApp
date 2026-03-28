import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ChannelsService } from './channels.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CreateChannelDto } from './dto/create-channel.dto';
import { OrgRolesGuard } from '../../common/guards/org-roles.guard';
import { OrgRoles } from '../../common/decorators/org-roles.decorator';
import { OrganizationRole } from '@prisma/client';
import type { AppUserRole } from '../../common/types/jwt-payload.type';

@UseGuards(JwtAuthGuard)
@Controller()
export class ChannelsController {
  constructor(private readonly channelsService: ChannelsService) {}

  @Get('organizations/:orgId/channels')
  list(
    @Param('orgId', new ParseUUIDPipe()) orgId: string,
    @CurrentUser() user: { userId: string; role?: AppUserRole },
  ) {
    return this.channelsService.listForOrganization(
      orgId,
      user.userId,
      user.role,
    );
  }

  @UseGuards(OrgRolesGuard)
  @OrgRoles(OrganizationRole.ADMIN, OrganizationRole.OWNER)
  @Post('organizations/:orgId/channels')
  create(
    @Param('orgId', new ParseUUIDPipe()) orgId: string,
    @CurrentUser() user: { userId: string; role?: AppUserRole },
    @Body() dto: CreateChannelDto,
  ) {
    return this.channelsService.create(orgId, user.userId, dto, user.role);
  }

  @Get('channels/:id')
  getById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @CurrentUser() user: { userId: string; role?: AppUserRole },
  ) {
    return this.channelsService.getById(id, user.userId, user.role);
  }

  @Post('channels/:id/read')
  markAsRead(
    @Param('id', new ParseUUIDPipe()) id: string,
    @CurrentUser() user: { userId: string; role?: AppUserRole },
  ) {
    return this.channelsService.markAsRead(id, user.userId, user.role);
  }
}
