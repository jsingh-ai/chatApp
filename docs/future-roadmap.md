# Future Roadmap

## AI Summaries & Reports

- Implement scheduled jobs to aggregate channel activity into the `AiSummary` table, scoped by organization/channel and time window.
- Build leader-facing `AiReport` generation pipelines (weekly/monthly) with prompt templates and guardrails.
- Surface summaries inside the UI (channel summary sidebar, org insights dashboard).

## Messaging enhancements

- WebSocket gateway using NestJS `@nestjs/websockets` to fan out messages in real time.
- Typing indicators, optimistic updates, file attachments, reactions, and message editing.
- Advanced channel controls (private invites, role-based moderation).

## Auth & security

- Organization invite flows with role assignments.
- Single sign-on providers (OIDC/SAML) and multi-factor auth.
- Session management UI (logout of other devices, revoke refresh tokens).

## Observability & operations

- Structured logging (e.g., Pino) with request tracing IDs across API and frontend.
- Metrics + dashboards (Prometheus/Grafana) and alerting for health endpoint degradation.
- Background queues (BullMQ) for heavy tasks such as AI generation.

## Frontend roadmap

- Offline-ready caching, optimistic message streaming, and skeleton loaders for slow connections.
- Global search (messages, channels, people) backed by Postgres full-text/Elastic.
- Mobile-first responsive tweaks and theming.

## Packages & extensibility

- Publish `@chatapp/ui` and `@chatapp/types` for reuse across future admin tools or mobile apps.
- Add CLI tooling under `packages/` for scaffolding seeds, migrations, or data importers.
