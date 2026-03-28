import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import type { AppUserRole } from '../../common/types/jwt-payload.type';

@UseGuards(JwtAuthGuard)
@Controller('channels/:channelId/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  list(
    @Param('channelId', new ParseUUIDPipe()) channelId: string,
    @CurrentUser() user: { userId: string; role?: AppUserRole },
    @Query() query: PaginationQueryDto,
  ) {
    return this.messagesService.list(channelId, user.userId, query, user.role);
  }

  @Post()
  create(
    @Param('channelId', new ParseUUIDPipe()) channelId: string,
    @CurrentUser() user: { userId: string; role?: AppUserRole },
    @Body() dto: CreateMessageDto,
  ) {
    return this.messagesService.create(channelId, user.userId, dto, user.role);
  }
}
