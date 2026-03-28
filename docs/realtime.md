# Realtime Messaging Architecture

## Transport

- **Protocol:** Socket.IO (WebSocket transport preferred, HTTP fallback disabled)
- **Namespace:** `/chat`
- **Auth:** Clients pass their JWT access token via the `auth.token` payload or `Authorization: Bearer` header during the Socket.IO handshake. The `WsJwtGuard` validates the token using the same secret as REST.

## Rooms

| Room                   | Purpose                                   | When joined                          |
| ---------------------- | ----------------------------------------- | ------------------------------------ |
| `channel:<channelId>`  | Channel-specific message + typing events  | After the client opens a channel tab |
| `org:<organizationId>` | Presence updates for organization members | Automatically on connect             |

## Events (Server → Client)

| Event             | Payload                             | Description                                     |
| ----------------- | ----------------------------------- | ----------------------------------------------- |
| `connected`       | —                                   | Connection acknowledgement                      |
| `message.created` | `{ ...message }`                    | Broadcast after a message is stored in Postgres |
| `typing.update`   | `{ channelId, userIds }`            | Current typing users per channel                |
| `presence.update` | `{ organizationId, onlineUserIds }` | Online user list per organization               |

## Events (Client → Server)

| Event          | Payload         | Description                      |
| -------------- | --------------- | -------------------------------- |
| `joinChannel`  | `{ channelId }` | Subscribe to a channel room      |
| `leaveChannel` | `{ channelId }` | Unsubscribe when navigating away |
| `typing:start` | `{ channelId }` | User began typing                |
| `typing:stop`  | `{ channelId }` | User stopped typing              |

## Message Flow

1. REST `POST /channels/:channelId/messages` persists the message (still the source of truth).
2. `MessagesService` logs the audit event and invokes `MessagesGateway.broadcastMessage`.
3. Gateway emits `message.created` to the `channel:<channelId>` room.
4. Clients update their local cache and, if the channel is focused, mark it as read via `POST /channels/:id/read`.

## Typing Indicator Flow

1. As the user types, the client emits `typing:start` once and schedules `typing:stop` after inactivity.
2. Gateway tracks typing users per channel with a timeout fallback (5 seconds).
3. Subscribers receive consolidated `typing.update` payloads, so the UI can show “Alice is typing…”.

## Presence Flow

1. On connection, the gateway looks up every organization the user belongs to and joins the respective `org:<orgId>` rooms.
2. Presence sets are updated whenever a socket connects or disconnects.
3. `presence.update` events deliver the current list of online user IDs to all members in that org.

## Unread Counts

- The database keeps a `ChannelReadState` per (channel,user) with the latest `lastReadAt`.
- When the UI is focused and near the bottom of the scroll container, it calls `POST /channels/:id/read`.
- Channel list responses include `unreadCount` so badges can render without extra roundtrips.
