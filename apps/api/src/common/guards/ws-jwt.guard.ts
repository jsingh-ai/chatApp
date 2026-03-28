import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Socket } from 'socket.io';

import { JwtPayload } from '../types/jwt-payload.type';

interface AuthenticatedSocket extends Socket {
  handshake: Socket['handshake'] & {
    auth?: {
      token?: string;
    };
  };
  data: {
    user?: {
      userId: string;
      email: string;
      role?: JwtPayload['role'];
    };
  };
}

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client = context.switchToWs().getClient<AuthenticatedSocket>();
    const token =
      client.handshake.auth?.token ??
      (typeof client.handshake.query?.token === 'string'
        ? client.handshake.query.token
        : undefined) ??
      this.extractFromHeader(client);

    if (!token) {
      throw new UnauthorizedException('Missing authentication token');
    }

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token, {
        secret: this.configService.get<string>('auth.jwtSecret'),
      });

      client.data.user = {
        userId: payload.sub,
        email: payload.email,
        role: payload.role,
      };

      return true;
    } catch {
      throw new UnauthorizedException('Invalid authentication token');
    }
  }

  private extractFromHeader(client: AuthenticatedSocket): string | undefined {
    const authHeader = client.handshake.headers.authorization;
    if (!authHeader) {
      return undefined;
    }
    const [type, token] = authHeader.split(' ');
    if (type?.toLowerCase() !== 'bearer') {
      return undefined;
    }
    return token;
  }
}
