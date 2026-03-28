# API Overview

Base URL: `http://localhost:4000/api`

## Auth

| Method | Endpoint                | Description                           | Auth |
| ------ | ----------------------- | ------------------------------------- | ---- |
| POST   | `/auth/register`        | Create a new user (returns tokens)    | ❌   |
| POST   | `/auth/login`           | Login with email/password             | ❌   |
| POST   | `/auth/refresh`         | Exchange refresh token for new tokens | ❌   |
| POST   | `/auth/forgot-password` | Generate a password reset email       | ❌   |
| POST   | `/auth/reset-password`  | Update password with a valid token    | ❌   |
| GET    | `/auth/me`              | Current user profile                  | ✅   |

Payloads follow DTO validation (email format, password length, etc.). Tokens response:

```json
{
  "user": { "id": "...", "email": "demo@chatapp.com", "displayName": "Demo User" },
  "tokens": { "accessToken": "...", "refreshToken": "sessionId.token" }
}
```

## Organizations

| Method | Endpoint                        | Description                                               |
| ------ | ------------------------------- | --------------------------------------------------------- |
| GET    | `/organizations`                | List organizations for the authenticated user             |
| POST   | `/organizations`                | Create a new org (SUPER_ADMIN only, caller becomes OWNER) |
| GET    | `/organizations/:id`            | Fetch org details + channels/members                      |
| GET    | `/organizations/:orgId/members` | List org members with roles and profile info              |
| GET    | `/organizations/:orgId/invites` | List pending/completed invites (OWNER/ADMIN only)         |
| POST   | `/organizations/:orgId/invites` | Create an invite for an email (OWNER/ADMIN only)          |

## Invites

| Method | Endpoint                 | Description                                       |
| ------ | ------------------------ | ------------------------------------------------- |
| POST   | `/invites/:token/accept` | Accept an invite (must be logged in as recipient) |

## Channels

| Method | Endpoint                         | Description                                                      |
| ------ | -------------------------------- | ---------------------------------------------------------------- |
| GET    | `/organizations/:orgId/channels` | List channels (private channels filtered)                        |
| POST   | `/organizations/:orgId/channels` | Create a new channel inside the org (OWNER/ADMIN or SUPER_ADMIN) |
| GET    | `/channels/:id`                  | Fetch single channel metadata                                    |
| POST   | `/channels/:id/read`             | Mark the channel as read for unread counts                       |

## Messages

| Method | Endpoint                                       | Description                            |
| ------ | ---------------------------------------------- | -------------------------------------- |
| GET    | `/channels/:channelId/messages?cursor=&limit=` | Cursor-based pagination (newest first) |
| POST   | `/channels/:channelId/messages`                | Persist a message                      |

Response shape:

```json
{
  "items": [
    {
      "id": "uuid",
      "content": "Hello",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "author": { "id": "...", "displayName": "Demo User", "email": "demo@chatapp.com" }
    }
  ],
  "nextCursor": "uuid-or-null"
}
```

## Health & AI

- `GET /health` – readiness probe.
- `GET /ai/status` – placeholder describing upcoming summary/report features.

## Swagger

Swagger UI is served at `http://localhost:4000/api/docs` with bearer token support for testing secured endpoints.

## Realtime

Socket.IO lives under the `/chat` namespace. Clients authenticate with the same JWT access token used for REST, then use `joinChannel`, `leaveChannel`, `typing:start`, and `typing:stop` events. See `docs/realtime.md` for payloads and room semantics.

## Error handling

`ValidationPipe` enforces DTO constraints. Auth routes return `401` when credentials/refresh tokens are invalid and `409` on duplicate registration. Organization and channel routes enforce membership with `403`.
