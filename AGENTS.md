# AGENTS.md — React + Vite (Default port 5173)

This guide defines how any coding agent (e.g., Codex) should work in this repository.

## 1) Scope
- Applies to the whole repo.
- Allowed edits: `src/**`, `docs/**`, `public/**` (for new static assets).
- Config files (`vite.config.*`, `package.json`, CI/Docker) require explicit user approval.

## 2) Environment
- Package manager: npm
- Dev server: Vite
- Dev port: 5173 (Vite default)
- Do **not** auto-start the dev server. Start it only when the user explicitly asks.

## 3) Commands (use exactly these)
- Install: `npm ci`  *(use `npm install` only if lockfile updates are intentional)*
- Lint: `npm run lint`
- Test: _No runner configured_. If tests are requested, propose adding **Vitest** and a `test` script first.
- Dev (5173): `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`  *(do not open a browser unless asked)*

**Notes**
- If `vite.config.*` sets `server.port = 5173` with `strictPort: true`, keep it; do not override the port via CLI unless asked for a temporary test.
- Client-side env variables must use the Vite prefix: `import.meta.env.VITE_*`. Do **not** read `process.env` in client code.

## 4) Allowed Edits
- ✅ `src/**` — components, pages, styles, and **new assets** (avoid modifying existing binary assets unless requested)
- ✅ `docs/**` — documentation and guides
- 🟡 `public/**` — add new static files OK
- 🚫 Everything else requires approval (e.g., `vite.config.*`, `package.json`, CI, Docker)

## 5) Approvals
**Auto-approve (safe)**
- Running `npm ci`, `npm run lint`
- Running tests once a test runner exists
- Editing under `src/**` and `docs/**`

**Ask first**
- Starting the dev server or opening a browser
- Installing/removing packages; changing `package.json` / `package-lock.json`
- Editing config files (`vite.config.*`, CI/Docker)
- Destructive changes (deletes, large refactors, sweeping reformat)
- Network-heavy or long-running tasks (downloads, docker build/pull)
- Adding a test framework or new npm scripts

## 6) UI & Responsive Policy (Bootstrap-only)
- CSS framework: **Bootstrap only** (custom CSS minimal, only when necessary).
- Breakpoints: Bootstrap `xs/sm/md/lg/xl/xxl`. On smaller screens keep UI **clean and concise**.
- Phones/Tablets (md↓):
  - Hide or avoid rendering heavy visuals (large hero images, decorative blocks).
  - Use utilities: `d-none d-md-block` (hidden on phones/tablets, visible md+), `d-block d-md-none` (visible on phones/tablets).
- Desktops (lg↑): large hero/extra cards/sections are allowed.

### Images / Assets
- Use `<picture>` with `media` or `srcset/sizes` so small screens download **smaller** images.
- Heavy components/large images should **render only on lg+** (e.g., via `matchMedia('(min-width: 992px)')`).
- Always set `loading="lazy"`, `decoding="async"`, `img-fluid`, and width/height to reduce CLS.

### Component patterns
- Hero/Banner: show large image **only on lg+** (`d-none d-lg-block`); on mobile keep brief copy + one primary action.
- Features/Stats: on mobile show **two items max**, hide extras via `d-none d-lg-block` or conditional render.
- Navbar: `navbar-expand-lg`; collapsed menu on mobile; primary CTA as a separate mobile button (`d-lg-none`).

## 7) Working Style
- Keep changes minimal and task-focused. Match existing style; do not disable ESLint rules globally.
- If something is ambiguous, leave a short note in `docs/notes.md` and ask for confirmation.

## 8) Definition of Done
- `npm run build` succeeds; `npm run lint` passes (document intentional exceptions).
- Dev server can start on **5173** when asked: `npm run dev`.
- No edits outside allowed paths without approval.
- Non-trivial behavior changes documented in `docs/`.
- No dead code or unused files introduced.
- **Responsive checks:** Bootstrap-only; heavy visuals not rendered/downloaded on md↓; desktop (lg↑) layout intact; images lazy-load with proper sizing (no CLS).

## 9) Troubleshooting
- **Port in use (5173):**
  - Windows:
    ```
    netstat -ano | findstr :5173
    taskkill /PID <PID> /F
    ```
  - WSL/Linux:
    ```
    ss -ltnp | grep 5173 || echo "free"
    sudo fuser -k 5173/tcp
    ```
- **No tests:** acknowledge absence; offer Vitest setup only if requested.
