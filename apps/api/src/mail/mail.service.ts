import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import type { Transporter } from 'nodemailer';

interface PasswordResetPayload {
  email: string;
  token: string;
}

@Injectable()
export class MailService {
  private transporter: Transporter | null = null;
  private readonly logger = new Logger(MailService.name);
  private readonly frontendUrl: string;
  private readonly fromAddress: string;

  constructor(private readonly configService: ConfigService) {
    this.frontendUrl =
      this.configService.get<string>('frontendUrl') ?? 'http://localhost:3000';
    this.fromAddress =
      this.configService.get<string>('mail.from') ?? 'no-reply@chatapp.local';

    const host = this.configService.get<string>('mail.host');
    const port = this.configService.get<number>('mail.port');
    const user = this.configService.get<string>('mail.user');
    const pass = this.configService.get<string>('mail.password');

    if (host && port && user && pass) {
      const options: SMTPTransport.Options = {
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      };
      this.transporter = nodemailer.createTransport(options);
    } else {
      this.logger.warn(
        'Mail transport not fully configured. Falling back to console logging.',
      );
    }
  }

  async sendPasswordResetEmail({ email, token }: PasswordResetPayload) {
    const resetUrl = `${this.frontendUrl.replace(/\/$/, '')}/reset-password?token=${token}`;
    const subject = 'Reset your chatApp password';
    const body = `You requested a password reset.\n\nReset your password: ${resetUrl}\n\nIf you did not request this, ignore.`;

    if (!this.transporter) {
      this.logger.log(`Password reset link for ${email}: ${resetUrl}`);
      return;
    }

    await this.transporter.sendMail({
      from: this.fromAddress,
      to: email,
      subject,
      text: body,
    });
  }
}
