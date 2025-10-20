# Appointment Booking — React + Vite

A React app bootstrapped with Vite. Uses React Router, Bootstrap, Tailwind, and other UI libraries.

## Quick Start

```bash
# Install dependencies (preferred for CI/repeatable installs)
npm ci

# Start the dev server (default port 5173)
npm run dev
```

Open http://localhost:5173.

## Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview

# Lint source files
npm run lint
```

## Environment Variables (VITE_*)

Vite only exposes variables prefixed with `VITE_` to your client code. Create a `.env.local` for local overrides:

```bash
# .env.local
VITE_API_BASE_URL=https://api.example.com
VITE_GOOGLE_CLIENT_ID=your-client-id
```

Use in code as `import.meta.env.VITE_API_BASE_URL`.

Common files Vite reads automatically (in this order): `.env`, `.env.local`, `.env.development`, `.env.production`.

## Project Structure

```
appointment-booking/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ assets/
│  ├─ main.jsx
│  └─ App.jsx
├─ index.html
├─ vite.config.js
├─ package.json
└─ README.md
```

## Troubleshooting (Port 5173)

- Error: address already in use or server fails to start — Vite uses `strictPort: true` and defaults to port `5173`.
  - Option 1: Free the port (stop the other process using 5173).
  - Option 2: Run on a different port:

```bash
npm run dev -- --port 5174
```

## Contribution

```bash
# 1) Install dependencies
npm ci

# 2) Run locally and iterate
npm run dev

# 3) Lint before pushing
npm run lint
```

- Keep PRs small and focused; include a short summary of changes.
- Avoid committing generated artifacts (e.g., `dist/`) or `node_modules`.
- Follow existing code style and patterns. If changing APIs or behavior, update docs accordingly.
