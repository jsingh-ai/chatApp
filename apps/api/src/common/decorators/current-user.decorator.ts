import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import type { AppUserRole } from '../types/jwt-payload.type';

interface RequestWithUser extends Request {
  user?: {
    userId: string;
    email: string;
    role?: AppUserRole;
  };
}

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();
    return request.user;
  },
);
