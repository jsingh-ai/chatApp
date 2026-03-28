import { SetMetadata } from '@nestjs/common';
import type { AppUserRole } from '../types/jwt-payload.type';

export const GLOBAL_ROLES_KEY = 'global_roles';
export const GlobalRoles = (...roles: AppUserRole[]) =>
  SetMetadata(GLOBAL_ROLES_KEY, roles);
