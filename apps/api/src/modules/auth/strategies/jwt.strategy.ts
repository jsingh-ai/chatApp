import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  Strategy,
  JwtFromRequestFunction,
  StrategyOptions,
} from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JwtPayload } from '../../../common/types/jwt-payload.type';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const secret = configService.get<string>('auth.jwtSecret');
    if (!secret) {
      throw new Error('JWT secret is not configured');
    }
    const jwtFromRequest: JwtFromRequestFunction = (
      request: Request | undefined,
    ) => {
      const authHeader = request?.headers?.authorization;
      if (typeof authHeader !== 'string') {
        return null;
      }
      const normalized = authHeader.trim();
      if (!normalized.toLowerCase().startsWith('bearer ')) {
        return null;
      }
      const token = normalized.slice(7).trim();
      return token || null;
    };
    const strategyOptions: StrategyOptions = {
      jwtFromRequest,
      ignoreExpiration: false,
      secretOrKey: secret,
    };
    super(strategyOptions);
  }

  async validate(payload: JwtPayload) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Authentication required');
    }

    return {
      userId: user.id,
      email: user.email,
      role: user.role,
    };
  }
}
