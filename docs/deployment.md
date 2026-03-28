# Deployment Guide

## Architecture

- Frontend: Vercel-hosted Next.js app at `https://chat.example.com`
- Backend: Azure App Service-hosted Nest API at `https://chat-api.example.com`
- Database: Azure Database for PostgreSQL Flexible Server

## Frontend on Vercel

1. Import the repo into Vercel.
2. Set the project root to `apps/web`.
3. Keep the default install command or use `pnpm install --frozen-lockfile`.
4. Use `pnpm build` as the build command and `pnpm start` as the start command.
5. Add production environment variables:
   - `NEXT_PUBLIC_APP_URL=https://chat.example.com`
   - `NEXT_PUBLIC_API_URL=https://chat-api.example.com/api`
   - `NEXT_PUBLIC_WS_URL=https://chat-api.example.com`
6. Redeploy after any environment change.

## Backend on Azure App Service

1. Create a Linux Web App for Node.js 20+.
2. Deploy `apps/api` with `pnpm install --frozen-lockfile`.
3. Use `pnpm build` during build and `pnpm start:prod` at runtime.
4. Enable WebSockets in App Service configuration.
5. Add production environment variables from `apps/api/.env.production.example`.
6. Set `FRONTEND_URL` and `FRONTEND_URLS` to the exact frontend origins you want to allow.

## PostgreSQL on Azure Database for PostgreSQL

1. Create a Flexible Server instance.
2. Allow the Azure App Service outbound IPs in the database firewall.
3. Create a `chatapp` database.
4. Use a Prisma connection string with SSL enabled:
   - `postgresql://USER:PASSWORD@HOST:5432/chatapp?schema=public&sslmode=require`

## Migrations and Seed

Run these after the database and API environment variables are configured:

```bash
pnpm --filter api prisma:generate
pnpm --filter api exec prisma migrate deploy --schema prisma/schema.prisma
pnpm --filter api prisma:seed
```

If you only need to promote the initial public admin on an existing environment, update the `User.role` value for the target email instead of reseeding the entire database.

## Super Admin Setup

- Default seeded super admin: `jsingh@fivestar.com`
- Password after seeding: `Password123!`
- Change the password immediately after first sign-in.

## Websocket Notes

- The frontend websocket base URL must point to the backend origin without `/api`.
- Azure App Service must have WebSockets enabled.
- CORS on both REST and Socket.IO uses `FRONTEND_URL` and `FRONTEND_URLS`.

## Go-Live Validation

1. Run `pnpm build` at repo root.
2. Confirm `https://chat.example.com/manifest.webmanifest` loads.
3. Confirm the browser offers “Install app”.
4. Confirm login, invite acceptance, messaging, password reset, and workspace creation work against production URLs.
