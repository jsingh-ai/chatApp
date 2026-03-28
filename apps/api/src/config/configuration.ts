export default () => ({
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parseInt(process.env.PORT ?? '4000', 10),
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:3000',
  frontendUrls: process.env.FRONTEND_URLS ?? process.env.FRONTEND_URL ?? '',
  auth: {
    jwtSecret: process.env.JWT_SECRET ?? 'super-secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '15m',
    refreshSecret: process.env.JWT_REFRESH_SECRET ?? 'refresh-secret',
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
  },
  database: {
    url: process.env.DATABASE_URL ?? '',
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT
      ? parseInt(process.env.MAIL_PORT, 10)
      : undefined,
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
    from: process.env.MAIL_FROM ?? 'no-reply@chatapp.local',
  },
});
