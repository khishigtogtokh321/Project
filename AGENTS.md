# AGENTS.md — React + Vite App

This file guides any coding agent working in this repository.

## Scope
- Applies to the entire repository.
- Editing is allowed only under `src/**` and `docs/**` unless explicitly requested by the user.

## Environment
- Package manager: `npm`.
- Dev server: Vite.
- Required dev port: `5174`.
- **Do not auto-start** the dev server. Start it only if the user explicitly asks.

## Commands (use exactly these)
- Install deps: `npm ci` (preferred). Use `npm install` only if lockfile changes are intentional.
- Lint: `npm run lint`
- Test: _No test runner configured_. If tests are requested, propose adding **Vitest** and a `test` script first.
- Dev (5174): `npm run dev -- --host --port 5174 --strictPort`
- Build: `npm run build`
- Preview: `npm run preview` (do not open a browser unless asked)

**Notes**
- Current Vite config sets `server.port = 5173` with `strictPort: true`. The CLI flag `--port 5174` takes precedence at runtime; prefer the flag unless the user requests a permanent config change.
- Environment variables must use Vite prefix: `import.meta.env.VITE_*`. Do **not** read `process.env` in client code.

## Allowed Edits
- ✅ `src/**` — application code, components, pages, styles, and **new assets** (keep existing binary assets untouched unless asked).
- ✅ `docs/**` — documentation and guides.
- 🚫 Everything else (e.g., `vite.config.*`, `package.json`, CI, Docker) — require explicit user approval.

## Approvals
**Auto-approve (safe)**
- Running: `npm ci`, `npm run lint`
- Running tests (once a test runner exists)
- Editing files under `src/**` and `docs/**`

**Require explicit approval**
- Starting the dev server or opening a browser
- Installing/removing packages; changing `package.json` / `package-lock.json`
- Editing files outside `src/**` and `docs/**`
- Destructive changes (deletes, large refactors, sweeping formatting)
- Network-heavy or long-running processes (e.g., Docker, downloads)
- Adding a test framework or new npm scripts

## Working Style
- Keep changes minimal and focused on the task.
- Match existing code style; do not disable ESLint rules globally.
- Prefer surgical fixes over broad refactors.
- If something is ambiguous, leave a brief note in `docs/notes.md` and ask for confirmation.

## Definition of Done
- `npm run build` succeeds without errors.
- `npm run lint` passes (document any intentional exceptions).
- Dev server starts on `5174` **when asked**: `npm run dev -- --host --port 5174 --strictPort`.
- No edits outside `src/**` and `docs/**` without approval.
- Non-trivial behavior changes are documented in `docs/`.
- No unused files or dead code are introduced.

## Troubleshooting
- **Port in use:** with `strictPort`, the server will fail if `5174` is occupied.
  - Windows: `netstat -ano | findstr :5174` → `taskkill /PID <PID> /F`
  - WSL/Linux: `ss -ltnp | grep 5174` → `sudo fuser -k 5174/tcp`
- **No tests:** acknowledge absence; offer Vitest setup only on request.
