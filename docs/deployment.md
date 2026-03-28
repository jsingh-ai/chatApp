# Deployment Guide

## Target setup

- Frontend: Vercel
- Backend: Railway
- Database: Railway PostgreSQL

## Railway backend

### Service settings

Create a Railway service from the GitHub repo and keep the service rooted at the repository root. The repo includes [`railway.json`](/home/jsingh/projects/chatApp/railway.json), so Railway can build and start the API from the monorepo without extra command patching.

- Build command: `pnpm railway:build`
- Start command: `pnpm railway:start`
- Migration command: `pnpm railway:migrate`

### Required environment variables

Use [`apps/api/.env.production.example`](/home/jsingh/projects/chatApp/apps/api/.env.production.example) as the source of truth.

Required:

- `NODE_ENV=production`
- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `JWT_EXPIRES_IN`
- `JWT_REFRESH_EXPIRES_IN`
- `FRONTEND_URL`
- `FRONTEND_URLS`

Optional:

- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_USER`
- `MAIL_PASSWORD`
- `MAIL_FROM`

`FRONTEND_URL` must be the public Vercel frontend origin. The API uses it both for CORS and for forgot-password/reset-password links sent by email.

### Railway PostgreSQL

1. Add a PostgreSQL service in Railway.
2. Copy the generated connection string into `DATABASE_URL` on the backend service.
3. Keep SSL enabled if Railway includes it in the URL.

### Production migration command

Run this after the backend service has `DATABASE_URL` configured:

```bash
pnpm railway:migrate
```

If you want bootstrap/demo data in production:

```bash
pnpm --filter api prisma:seed
```

## Vercel frontend

### Project settings

Create a Vercel project from the same GitHub repo with:

- Root Directory: `apps/web`
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Framework Preset: `Next.js`
- Output: default Next.js output

### Required environment variables

Use [`apps/web/.env.production.example`](/home/jsingh/projects/chatApp/apps/web/.env.production.example) as the source of truth.

- `NEXT_PUBLIC_APP_URL=https://your-frontend-domain`
- `NEXT_PUBLIC_API_URL=https://your-railway-backend-domain/api`
- `NEXT_PUBLIC_WS_URL=https://your-railway-backend-domain`

These are all used in production code paths. The frontend now fails fast during production build/runtime if they are missing.

## Monorepo cloud commands

The repo includes root-level scripts for hosted environments:

- `pnpm build:api`
- `pnpm build:web`
- `pnpm start:api`
- `pnpm railway:build`
- `pnpm railway:start`
- `pnpm railway:migrate`
- `pnpm vercel:build`

These run correctly from the repository root in a pnpm workspace, which keeps GitHub-connected Railway and Vercel deployments predictable.

## Super admin bootstrap

- Default seeded super admin: `jsingh@fivestar.com`
- Default password: `Password123!`
- Change the password immediately after first sign-in

## Websocket and CORS notes

- `NEXT_PUBLIC_WS_URL` must point to the Railway backend origin without `/api`
- REST and Socket.IO CORS both use `FRONTEND_URL` and `FRONTEND_URLS`
- Add every production frontend hostname you intend to serve from

## Final verification

1. Run `pnpm build` locally before pushing.
2. Confirm Railway boots with `pnpm railway:start`.
3. Confirm forgot-password emails point at `https://your-frontend-domain/reset-password?...`.
4. Confirm `https://your-frontend-domain/manifest.webmanifest` loads.
5. Confirm login, workspace creation, invites, realtime messaging, and password reset work against the deployed domains.
