# Docker services

- `postgres`: Primary database for chatApp (exposed on `5432`).
- `pgadmin`: Optional database client to inspect schemas (available on `http://localhost:5050` with `admin@chatapp.test` / `admin123`).

Start the stack from the repository root:

```bash
pnpm docker:up
```

Stop services when done:

```bash
pnpm docker:down
```
