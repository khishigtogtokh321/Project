# Copilot instructions — appointment-booking

These notes are targeted at AI coding agents (and humans) who will make focused edits in this Vite + React codebase. Keep the guidance compact and actionable so an agent can start making correct, repository-consistent changes immediately.

1) Big picture
- Framework: React app bootstrapped with Vite. Entrypoint: `src/main.jsx` -> mounts `src/App.jsx`.
- Routing: client-side routing via `react-router-dom` defined in `src/App.jsx`. Key pages live in `src/pages/` and are registered as <Route> elements there.
- UI toolkit: the project primarily uses React Bootstrap (`react-bootstrap` + `bootstrap` CSS). You'll also see MUI packages and Tailwind in deps — but most UI code uses Bootstrap components (see `src/components/*`).

2) Important directories & files
- `src/components/` — reusable UI components (e.g. `MyNavbar.jsx`, `Footer.jsx`, `DoctorCard.jsx`).
- `src/pages/` — full pages (e.g. `Home.jsx`, `AppointmentPage.jsx`, `Booking.jsx`, `Login.jsx`, `RegisterPage.jsx`).
- `src/assets/` — images and logos; some files are referenced via literal paths (e.g., `src/assets/doctorImage.png`) inside JSX.
- `src/main.jsx` — app bootstrap (imports global CSS and renders `<App/>`).
- `src/App.jsx` — Router + site layout (Navbar + Routes + Footer).
- `vite.config.js` — dev server binds to any host and enforces port 5173 (see `server.host`, `port: 5173`, `strictPort: true`).
- `package.json` — useful scripts: `dev`, `build`, `preview`, `lint`.

3) Developer workflows (commands)
- Install: `npm install`
- Dev server (HMR): `npm run dev` (Vite server, default port 5173; `strictPort: true` — it will error if 5173 is taken).
- Build for production: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (runs `eslint .` per `package.json`).

4) Project-specific patterns & gotchas
- Routing paths use Mongolian-friendly slugs (for example `/emch-songoh`, `/tsag-awaltiin-medeelel`). When adding routes, mirror that style and update `MyNavbar.jsx` if the page should be reachable from the header.
- Asset references: some components use string paths like `src/assets/foo.png` in <Image src=.../> instead of importing the asset. Prefer the pattern already used in the file you're editing (keep consistency). If you switch to static import (import doctor from '...'), update JSX to use the imported variable.
- No global state library is present (no Redux). Props are the common communication pattern between components. Search for usage of Context or custom hooks before introducing a new global store.
- Payments & external resources: `src/pages/AppointmentPage.jsx` contains placeholder payment UIs (QR images fetched from a public QR generator, card form mock). These are UI-only and do not call a payment backend in this repo.

5) Integration points & dependencies to check before edits
- `react-router-dom` — routes and Links in `src/App.jsx` and `src/components/MyNavbar.jsx`.
- `react-bootstrap` / `bootstrap` — preferred UI primitives. Look at imports at the top of files (example: `import { Navbar, Nav, Container } from 'react-bootstrap'`).
- `react-big-calendar` is used and its CSS imported in `src/App.jsx` and `src/main.jsx`.
- Authentication hints: `jwt-decode` is in `package.json` — search `Login.jsx`/`RegisterPage.jsx` to see how tokens are handled if you touch auth code.

6) How to add a new page or route (concrete example)
- Create `src/pages/MyNewPage.jsx` (export default React component).
- Add a Route in `src/App.jsx`: <Route path="/my-new-page" element={<MyNewPage/>} />.
- Add a Nav link in `src/components/MyNavbar.jsx` using `Nav.Link as={Link} to="/my-new-page"` if you want it in the header.

7) Minimal contract for automated edits
- Inputs: changed JSX/JS file(s) or new component(s).
- Outputs: app builds (`npm run build`), dev server runs (`npm run dev`), no new ESLint errors.
- Error modes: broken imports (path issues), Vite port collision (port 5173 enforced), unresolved images when replacing string paths with imports.

8) Files to inspect for every significant change (quick checklist)
- `src/App.jsx` — route registration and global layout.
- `src/main.jsx` — global CSS and bootstrap imports.
- `vite.config.js` — dev server settings (important if tests or CI run dev server).
- `package.json` — scripts and dependencies.
- Any file you edit for import path consistency (search the repo for the same import style to match it).

If anything here is unclear or you want deeper rules (for example, preferred asset import style, or whether to prefer Bootstrap vs MUI in new pages), tell me which area to expand and I will iterate.