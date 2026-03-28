import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { parseDurationToSeconds } from '../../common/utils/time.util';
import { MailService } from '../../mail/mail.service';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const secret = config.get<string>('auth.jwtSecret');
        if (!secret) {
          throw new Error('JWT secret not configured');
        }
        const expiresIn = parseDurationToSeconds(
          config.get<string | number>('auth.jwtExpiresIn'),
          15 * 60,
        );
        return {
          secret,
          signOptions: {
            expiresIn,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, MailService],
  exports: [AuthService, JwtModule, MailService],
})
export class AuthModule {}
