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

The frontend uses bearer tokens over HTTPS and does not depend on cross-site cookies. In production, point the web app at the public API origin and websocket origin explicitly.

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

## Production deployment

Recommended first public setup:

- Frontend: Vercel
- Backend: Azure App Service
- Database: Azure Database for PostgreSQL Flexible Server

High-level flow:

1. Deploy PostgreSQL and capture the SSL-enabled `DATABASE_URL`.
2. Deploy the API to Azure App Service with `FRONTEND_URL` and `FRONTEND_URLS` set to your frontend domains.
3. Run Prisma deploy migrations against production.
4. Seed or manually promote the first super admin account.
5. Deploy the web app to Vercel with the production API and websocket URLs.
6. Confirm installability via `manifest.webmanifest`, service worker registration, and mobile “Add to Home Screen”.

Detailed platform steps live in [docs/deployment.md](docs/deployment.md).

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

1. DNS is pointed at the Vercel frontend domain and Azure API domain.
2. `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_API_URL`, and `NEXT_PUBLIC_WS_URL` are set in Vercel.
3. `DATABASE_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `FRONTEND_URL`, and `FRONTEND_URLS` are set in Azure App Service.
4. Azure App Service WebSockets are enabled.
5. `pnpm --filter api exec prisma migrate deploy --schema prisma/schema.prisma` has run successfully against production.
6. `pnpm --filter api prisma:seed` has been run only if you want the demo/super-admin bootstrap data.
7. `jsingh@fivestar.com` or your chosen initial admin has `SUPER_ADMIN`.
8. `/api/docs`, login, workspace creation, invites, messaging, and password reset all work against production URLs.
9. `https://your-domain/manifest.webmanifest` loads and the browser offers install/add-to-home-screen.

## Useful scripts

- `pnpm db:migrate` / `pnpm db:seed`: run Prisma commands against `apps/api`.
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
