import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = { userId: string }>(err: unknown, user: TUser | null) {
    if (err instanceof Error) {
      throw err;
    }

    if (!user) {
      throw new UnauthorizedException('Authentication required');
    }

    return user;
  }
}
