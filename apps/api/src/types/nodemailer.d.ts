declare module 'nodemailer' {
  export interface SendMailOptions {
    from?: string;
    to?: string;
    subject?: string;
    text?: string;
  }

  export interface Transporter {
    sendMail(options: SendMailOptions): Promise<unknown>;
  }

  export function createTransport(options: unknown): Transporter;
}

declare module 'nodemailer/lib/smtp-transport' {
  namespace SMTPTransport {
    interface Options {
      host: string;
      port: number;
      secure?: boolean;
      auth?: {
        user: string;
        pass: string;
      };
    }
  }

  export = SMTPTransport;
}
