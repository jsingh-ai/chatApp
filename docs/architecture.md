# Architecture

## High-level

chatApp is a pnpm monorepo with two first-class applications:

- **apps/api** – NestJS REST API with modular architecture, Prisma ORM, JWT auth, Swagger docs, and hooks for AI/audit modules.
- **apps/web** – Next.js App Router frontend with TanStack Query, Zustand for auth state, Tailwind UI, and a realtime-ready chat shell.

Shared libraries (packages/ui, packages/config, packages/types) live under `packages/` and can be published or imported via the tsconfig path aliases.

## Backend structure

```
src/
  config/          # runtime configuration + validation
  common/          # guards, decorators, interceptors, DTOs, utils
  prisma/          # PrismaService + module
  modules/
    auth/          # register/login/refresh/me endpoints, JWT strategy
    users/
    organizations/ # org CRUD, membership enforcement, invites
    channels/
    messages/      # pagination + audit logging
    audit/         # simple audit logger service
    ai/            # scaffolding for summaries/reports
    health/
```

Key qualities:

- **DTO validation & pipes** – Global `ValidationPipe` enforces DTOs and strips unknown input.
- **Prisma** – UUID primary keys, relational integrity, cursor-based message pagination, invitation tracking, seed data, and manual migrations checked into `prisma/migrations`.
- **Generated client** – Prisma Client is generated into `apps/api/src/generated/prisma` so the app compiles against the checked-in schema rather than a stale workspace artifact.
- **Auth** – Access tokens (JWT) and hashed refresh tokens stored in the `Session` table with reusable refresh flow.
- **Password reset** – `PasswordResetToken` records power the forgot/reset endpoints; emails use the `MailService` abstraction (SMTP when configured, console fallback otherwise).
- **Modules** – Each feature exposes a controller and service with dependency injection and guard coverage. Organization routes now include invite + member endpoints guarded by role decorators (`@OrgRoles` + `OrgRolesGuard`), global SUPER_ADMIN-only actions use `@GlobalRoles`, and the messages module ships with a Socket.IO gateway for realtime delivery.
- **Swagger** – Auto-generated docs at `/api/docs`.

## Frontend structure

```
src/
  app/             # App Router routes (login, register, app shell, dynamic channels)
  components/      # Providers, layout shell, protected route
  features/        # Feature-specific UI (auth forms, messaging widgets)
  services/        # Axios client + React Query hooks
  store/           # Zustand auth persistence
  types/           # Frontend-specific interfaces
```

Highlights:

- **App shell** – `/app` layout protects routes, renders organization + channel sidebars, and hosts chat content panes.
- **State management** – Zustand persists auth tokens (with refresh) while TanStack Query handles server state with React Query Devtools.
- **API client** – Axios instance attaches JWTs, handles token refresh seamlessly, and exposes typed API helper functions.
- **UI** – Tailwind CSS v4 zero-config styling with reusable components for channel headers, message list/composer, etc.
- **Testing** – Vitest + Testing Library example (`ChannelHeader`) ensures rendering works and provides a base for additional tests.

## Infrastructure

- **Docker Compose** – Postgres 16 + pgAdmin for local development.
- **Scripts** – `pnpm dev`, `pnpm build`, `pnpm test`, `pnpm db:migrate`, `pnpm db:seed`, and `pnpm docker:up`.
- **Husky / lint-staged** – Pre-commit formatting and linting guardrails.
- **Docs** – Reference guides for architecture, APIs, and roadmap live in `/docs`.
- **Realtime** – A Socket.IO gateway (`MessagesGateway`) authenticates via the same JWT tokens and only allows clients to join rooms they’re authorized to access. REST APIs remain the source of truth and trigger websocket broadcasts after persistence.
