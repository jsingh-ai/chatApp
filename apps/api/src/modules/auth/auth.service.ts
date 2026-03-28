import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'node:crypto';
import { Session, User } from '@prisma/client';

import { UsersService } from '../users/users.service';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { compareValue, hashValue } from '../../common/utils/password.util';
import { JwtPayload } from '../../common/types/jwt-payload.type';
import {
  parseDurationToMs,
  parseDurationToSeconds,
} from '../../common/utils/time.util';
import { MailService } from '../../mail/mail.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly mailService: MailService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.usersService.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const password = await hashValue(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase(),
        displayName: dto.displayName,
        password,
      },
    });

    const safeUser = this.usersService.toSafeUser(user);
    return this.issueTokens(safeUser);
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email.toLowerCase());
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await compareValue(dto.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const safeUser = this.usersService.toSafeUser(user);
    return this.issueTokens(safeUser);
  }

  async refresh(dto: RefreshTokenDto) {
    const session = await this.validateRefreshToken(dto.refreshToken);
    const user = await this.prisma.user.findUnique({
      where: { id: session.userId },
    });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    await this.prisma.session.delete({ where: { id: session.id } });

    const safeUser = this.usersService.toSafeUser(user);
    return this.issueTokens(safeUser);
  }

  async me(userId: string) {
    return this.usersService.findById(userId);
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const email = dto.email.toLowerCase();
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return { status: 'ok' };
    }

    await this.prisma.passwordResetToken.updateMany({
      where: {
        userId: user.id,
        usedAt: null,
      },
      data: {
        usedAt: new Date(),
      },
    });

    const token = randomBytes(48).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await this.prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    await this.mailService.sendPasswordResetEmail({
      email: user.email,
      token,
    });

    return { status: 'ok' };
  }

  async resetPassword(dto: ResetPasswordDto) {
    const record = await this.prisma.passwordResetToken.findUnique({
      where: { token: dto.token },
    });

    if (!record) {
      throw new BadRequestException('Invalid reset token');
    }

    if (record.usedAt) {
      throw new BadRequestException('Reset token already used');
    }

    if (record.expiresAt.getTime() < Date.now()) {
      throw new BadRequestException('Reset token expired');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: record.userId },
    });
    if (!user) {
      throw new BadRequestException('Invalid reset token');
    }

    const hashedPassword = await hashValue(dto.password);

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      }),
      this.prisma.passwordResetToken.update({
        where: { id: record.id },
        data: { usedAt: new Date() },
      }),
      this.prisma.session.deleteMany({
        where: { userId: user.id },
      }),
    ]);

    return { status: 'ok' };
  }

  private async issueTokens(user: Omit<User, 'password'>) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
    const jwtSecret = this.configService.get<string>('auth.jwtSecret');
    if (!jwtSecret) {
      throw new Error('JWT secret is not configured');
    }
    const expiresIn = parseDurationToSeconds(
      this.configService.get<string | number>('auth.jwtExpiresIn'),
      15 * 60,
    );
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: jwtSecret,
      expiresIn,
    });

    const refreshToken = await this.createSession(user.id);

    return {
      user,
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  private async createSession(userId: string) {
    const rawToken = randomBytes(48).toString('hex');
    const expiresIn = this.configService.get<string | number>(
      'auth.refreshExpiresIn',
    );
    const ttlResult = parseDurationToMs(expiresIn, 7 * 24 * 60 * 60 * 1000);
    const expiresAt = new Date(Date.now() + ttlResult);
    const session = await this.prisma.session.create({
      data: {
        userId,
        tokenHash: await hashValue(rawToken),
        expiresAt,
      },
    });

    return `${session.id}.${rawToken}`;
  }

  private async validateRefreshToken(refreshToken: string): Promise<Session> {
    if (!refreshToken.includes('.')) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const [sessionId, token] = refreshToken.split('.', 2);
    if (!sessionId || !token) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const session = await this.prisma.session.findUnique({
      where: { id: sessionId },
    });
    if (!session) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (session.expiresAt.getTime() < Date.now()) {
      await this.prisma.session.delete({ where: { id: session.id } });
      throw new UnauthorizedException('Refresh token expired');
    }

    const isValid = await compareValue(token, session.tokenHash);
    if (!isValid) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    return session;
  }
}
