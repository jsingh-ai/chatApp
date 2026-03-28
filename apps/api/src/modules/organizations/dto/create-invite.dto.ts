import { OrganizationRole } from '@prisma/client';
import { IsEmail, IsEnum, IsOptional, IsPositive } from 'class-validator';

export class CreateInviteDto {
  @IsEmail()
  email!: string;

  @IsEnum(OrganizationRole)
  role: OrganizationRole = OrganizationRole.MEMBER;

  @IsOptional()
  @IsPositive()
  expiresInDays?: number;
}
