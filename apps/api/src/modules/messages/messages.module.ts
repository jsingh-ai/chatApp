import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { ChannelsModule } from '../channels/channels.module';
import { AuditModule } from '../audit/audit.module';
import { MessagesGateway } from './messages.gateway';
import { WsJwtGuard } from '../../common/guards/ws-jwt.guard';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { OrganizationsModule } from '../organizations/organizations.module';

@Module({
  imports: [
    ChannelsModule,
    AuditModule,
    UsersModule,
    AuthModule,
    OrganizationsModule,
  ],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesGateway, WsJwtGuard],
})
export class MessagesModule {}
