export type AppUserRole = 'SUPER_ADMIN' | 'USER';

export interface JwtPayload {
  sub: string;
  email: string;
  role: AppUserRole;
}
