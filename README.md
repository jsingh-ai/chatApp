# chatApp

chatApp is a realtime team communication app built as a pnpm monorepo with a NestJS API, a Next.js App Router frontend, PostgreSQL via Prisma, and installable mobile web support.

## Tech stack

- **Frontend:** Next.js 16 (App Router), TypeScript, Tailwind CSS, Zustand, TanStack Query, Axios.
- **Backend:** NestJS 11, Prisma ORM, PostgreSQL, REST + Swagger, DTO validation, JWT auth with refresh tokens.
- **Tooling:** pnpm workspaces, Turbo tasks, ESLint/Prettier, Husky + lint-staged, Vitest & Jest for testing.

## Monorepo layout

```
chatApp/
  apps/
    api/   # NestJS backend
    web/   # Next.js frontend
  packages/
    config/ ui/ types/   # shared placeholders ready for reuse
  infra/
    docker/              # infra docs
  docs/                  # architecture & roadmap
```

## Prerequisites

- Node.js 20+
- pnpm (Corepack enabled)
- Docker Desktop (for Postgres)

## Environment variables

Copy and adjust the examples before running the stack.

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

Local examples:

- API: [`apps/api/.env.example`](apps/api/.env.example)
- API production: [`apps/api/.env.production.example`](apps/api/.env.production.example)
- Web: [`apps/web/.env.example`](apps/web/.env.example)
- Web production: [`apps/web/.env.production.example`](apps/web/.env.production.example)

Critical production vars:

- API: `DATABASE_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `FRONTEND_URL`, `FRONTEND_URLS`
- Web: `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_WS_URL`

What they control:

- `FRONTEND_URL`: API CORS allowlist primary origin and the base URL used in forgot-password/reset-password email links
- `FRONTEND_URLS`: additional comma-separated frontend origins allowed by REST and websocket CORS
- `NEXT_PUBLIC_APP_URL`: frontend canonical/PWA base URL used for metadata and manifest generation
- `NEXT_PUBLIC_API_URL`: frontend REST API base URL
- `NEXT_PUBLIC_WS_URL`: frontend websocket base URL without `/api`

The frontend uses bearer tokens over HTTPS and does not depend on cross-site cookies. In production, those public URL vars must be set explicitly. The web app now fails fast in production if they are missing instead of silently falling back to localhost.

## Local development

```bash
# Start Postgres + pgAdmin
pnpm docker:up

# Run Prisma migrations & seed demo data
pnpm --filter api prisma:generate
pnpm --filter api prisma:migrate:dev
pnpm --filter api prisma:seed

# Start both apps in watch mode
pnpm dev
```

Individual app commands:

```bash
# API
pnpm --filter api dev
pnpm --filter api build && pnpm --filter api start:prod

# Web
pnpm --filter web dev
pnpm --filter web build && pnpm --filter web start
```

## Railway + Vercel deployment

Recommended hosted setup:

- Backend + PostgreSQL: Railway
- Frontend: Vercel

### 1. Deploy the Railway backend

Create a Railway service from this repo. The repo includes [`railway.json`](railway.json), so Railway can build and start the API from the monorepo root without extra command fixes.

- Build command: `pnpm railway:build`
- Start command: `pnpm railway:start`
- Migration command: `pnpm railway:migrate`

Required Railway env vars:

- `NODE_ENV=production`
- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `JWT_EXPIRES_IN`
- `JWT_REFRESH_EXPIRES_IN`
- `FRONTEND_URL`
- `FRONTEND_URLS`
- `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASSWORD`, `MAIL_FROM` if using SMTP

Notes:

- The API already uses `process.env.PORT`.
- Prisma reads `DATABASE_URL` directly from [`schema.prisma`](apps/api/prisma/schema.prisma).
- `pnpm --filter api build` generates the Prisma client before compiling.
- `pnpm --filter api start:prod` runs the compiled Nest app from `dist/src/main.js`.
- CORS for REST and websockets is controlled by `FRONTEND_URL` and `FRONTEND_URLS`.
- Forgot-password email links are generated from `FRONTEND_URL`, so this must be the public Vercel origin.

### 2. Deploy PostgreSQL on Railway

1. Add a PostgreSQL service in Railway.
2. Copy the connection string into `DATABASE_URL` on the backend service.
3. Run production migrations:

```bash
pnpm railway:migrate
```

If you want bootstrap data:

```bash
pnpm --filter api prisma:seed
```

### 3. Deploy the frontend on Vercel

Create a Vercel project from the same GitHub repo with:

- Root Directory: `apps/web`
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Framework Preset: `Next.js`

Required Vercel env vars:

- `NEXT_PUBLIC_APP_URL=https://your-frontend-domain`
- `NEXT_PUBLIC_API_URL=https://your-railway-backend-domain/api`
- `NEXT_PUBLIC_WS_URL=https://your-railway-backend-domain`

Notes:

- The frontend uses `NEXT_PUBLIC_API_URL` for REST and `NEXT_PUBLIC_WS_URL` for Socket.IO.
- `NEXT_PUBLIC_APP_URL` drives manifest metadata, installability, and canonical app origin.
- There is no production localhost dependency when those env vars are set.
- The web app build is verified with `pnpm --filter web build`.

Detailed platform notes live in [docs/deployment.md](docs/deployment.md).

## Testing & linting

```bash
pnpm lint            # Runs lint for all apps
pnpm test            # Jest (API) + Vitest (web)
pnpm --filter api test:e2e
pnpm --filter web test:watch
```

## Roles, invites & onboarding

- **Global roles:** users now have a global role (`SUPER_ADMIN` or `USER`). The seed user `jsingh@fivestar.com / Password123!` is a SUPER_ADMIN.
- **Creating teams:** only SUPER_ADMINs can spin up organizations from `/app` or the sidebar. Members join via invites.
- **Managing members:** visit `/app/<orgId>/settings` to see current members, pending invites, send invites, and manage presence (OWNER/ADMIN/SUPER_ADMIN).
- **Accepting invites:** invite links point to `/invite/<token>`. Recipients must log in with the invited email before accepting.
- **Channel permissions:** channel creation is limited to SUPER_ADMINs and workspace OWNER/ADMIN roles. Members still read and post in existing channels.

## Realtime messaging

- REST endpoints remain the source of truth for history/pagination.
- When connected, clients join channel-scoped Socket.IO rooms and receive `message.created` events in realtime once a message is stored. Typing indicators and presence updates ride on the same connection.
- Websocket connections reuse JWT auth; if the token expires, the connection is dropped automatically.
- Production websocket clients should use `NEXT_PUBLIC_WS_URL` set to the backend origin without `/api`.

## Password reset

- `/forgot-password` lets users request a reset email (dev fallback logs the reset link).
- `/reset-password?token=...` verifies the single-use token, hashes the new password, and invalidates existing sessions.
- Backend emails are sent via SMTP when configured (`MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASSWORD`, `MAIL_FROM`). Without SMTP, reset links are logged via `MailService`.
- Prisma uses the default `@prisma/client` output; `pnpm --filter api prisma:generate` is safe to rerun any time the schema changes.

## PWA and installability

The web app now ships with:

- a web manifest at `/manifest.webmanifest`
- install metadata and theme color
- app icons for install surfaces
- a lightweight service worker at `/sw.js`
- an offline fallback route at `/offline`

This allows the app to be opened by URL and installed to phone home screens as a standalone web app.

## Production checklist

Before go-live, confirm all of the following:

1. Railway backend is building with `pnpm railway:build` and starting with `pnpm railway:start`.
2. `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_API_URL`, and `NEXT_PUBLIC_WS_URL` are set in Vercel.
3. `DATABASE_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `FRONTEND_URL`, and `FRONTEND_URLS` are set in Railway.
4. `pnpm railway:migrate` has run successfully against production.
5. `pnpm --filter api prisma:seed` has only been run if you want demo/bootstrap data in production.
6. `jsingh@fivestar.com` or your chosen initial admin has `SUPER_ADMIN`.
7. Forgot-password emails contain the public frontend origin from `FRONTEND_URL`, not localhost.
8. `/api/docs`, login, workspace creation, invites, messaging, and password reset all work against production URLs.
9. `https://your-domain/manifest.webmanifest` loads and the browser offers install/add-to-home-screen.

## Post-deploy smoke tests

Run these after Railway and Vercel are both live:

1. Open the Vercel frontend URL and confirm the app loads without mixed-content or CORS errors.
2. Log in as `jsingh@fivestar.com` and create a workspace.
3. Create a channel and send a message, then confirm realtime delivery in a second session.
4. Trigger forgot-password and confirm the email or logged reset link points to the Vercel frontend domain.
5. Accept an invite from a non-admin account and confirm normal users cannot create workspaces or admin-only channels.
6. Open `https://your-domain/manifest.webmanifest` and verify install prompt/add-to-home-screen behavior on mobile.

## Useful scripts

- `pnpm db:migrate` / `pnpm db:seed`: run Prisma commands against `apps/api`.
- `pnpm build:api` / `pnpm build:web`: cloud-friendly root build commands.
- `pnpm start:api`: start the compiled Nest API from the repo root.
- `pnpm railway:build` / `pnpm railway:start` / `pnpm railway:migrate`: Railway deployment commands.
- `pnpm vercel:build`: Vercel-friendly root build command.
- `pnpm docker:up` / `pnpm docker:down`: manage the docker-compose stack.

## Demo credentials

The seed script creates ready accounts:

- Email: `demo@chatapp.com`
- Password: `Password123!`
- Email: `jsingh@fivestar.com`
- Password: `Password123!`

## Documentation

- [Architecture](docs/architecture.md)
- [API Overview](docs/api-overview.md)
- [Deployment Guide](docs/deployment.md)
- [Future Roadmap](docs/future-roadmap.md)
- [Realtime Architecture](docs/realtime.md)

Enjoy building on top of chatApp! Contributions and extensions can live under `packages/` for shared UI/config or in additional `apps/` as needed.
