# Project Review

This document captures a full review of the current Vite + React application, focusing on correctness, maintainability, and user experience.

## Routing & Navigation
- `App.jsx` defines a `ServiceChose` route without the leading slash (`path="serviceChose"`), so navigating to `/serviceChose` will not match and the page cannot be loaded directly.【F:src/App.jsx†L25-L29】
- The navbar links route users to `/booking`, but the booking page is mounted at `/emch-songoh`; clicking the link therefore renders the home page instead of the booking flow.【F:src/components/MyNavbar.jsx†L16-L33】【F:src/App.jsx†L21-L27】
- `App.jsx` includes a React Big Calendar stylesheet import, while `CalendarPage` also pulls it in; keeping library CSS imports in a single entry point prevents duplicate CSS and simplifies maintenance.【F:src/App.jsx†L13-L32】【F:src/pages/CalendarPage.jsx†L1-L105】

## Component-Level Issues
- `Hero.jsx` leaves debug text (`222222`) in the markup and wires search state without ever using `handleSearch`, leaving the UI without an actual submit path.【F:src/components/Hero.jsx†L1-L30】
- `SearchBar.jsx` hard-codes mock data, duplicates entries, and references the logo via a string path instead of importing the asset. It also opens the dropdown on focus but never closes it if users tab away, and the "where" input lacks any state binding.【F:src/components/SearchBar.jsx†L1-L96】
- Several presentational components reference assets using string literals (e.g., `src/assets/...`) rather than bundler-friendly imports, which will break once the app is built. Examples include `About`, `PaymentStore`, `ActiveCustomers`, `AppointmentForm`, and `AppointmentPage`.【F:src/components/About.jsx†L1-L79】【F:src/components/PaymentStore.jsx†L1-L41】【F:src/components/ActiveCustomers.jsx†L1-L24】【F:src/pages/AppointmentForm.jsx†L1-L112】【F:src/pages/AppointmentPage.jsx†L1-L86】
- `AppointmentForm.jsx` logs payment data to the console, keeps unused `payment` state, and imports Bootstrap CSS even though it should be initialized once in the app shell.【F:src/pages/AppointmentForm.jsx†L1-L112】
- `ServiceChose.jsx` omits critical imports (`useState`, `Container`, `Row`, `Col`, `Card`, `Form`, `Button`, `ToggleButtonGroup`, `ToggleButton`, `CheckCircle`, etc.), making the component crash. It also imports `GoogleOAuthProvider` without using it and relies on undefined JSX (`<payment>` tags).【F:src/pages/ServiceChose.jsx†L1-L160】
- `DoctorCard.jsx` mixes `class` with `className`, uses inline HTML attributes inside JSX (e.g., `borderColor = "#0000"`), and hard-codes doctor information rather than consuming the `doctor` prop, undermining reuse.【F:src/components/DoctorCard.jsx†L1-L75】
- `EmnelegMedeelel.jsx` renders `< DoctorList />` (with a leading space), includes `bootstrap/dist/css/bootstrap.min.css` locally, and sets a `Nav.Link` `src` attribute instead of a `to`/`href`, all of which produce runtime or lint errors.【F:src/components/EmnelegMedeelel.jsx†L1-L88】

## State & Data Management
- Most data (services, pricing, doctor availability, booking details) is embedded directly in components. Centralizing this in configuration objects or fetching it from APIs would make it easier to maintain and translate.【F:src/pages/ServiceChose.jsx†L42-L140】【F:src/components/DoctorList.jsx†L1-L52】【F:src/pages/AppointmentPage.jsx†L44-L86】
- There is no validation or submission logic for key forms (login, registration, contact, booking). At a minimum, the UI should provide feedback on invalid entries and show success states on submit.【F:src/pages/Login.jsx†L1-L19】【F:src/pages/RegisterPage.jsx†L1-L80】【F:src/components/Contact.jsx†L1-L60】

## Styling & Accessibility
- `index.css` centralizes a large amount of layout logic via inline-style equivalents (e.g., positioning components by `top: 80px`). Consider moving structural layout into components using Bootstrap's grid utilities to avoid brittle positioning.【F:src/index.css†L1-L140】【F:src/components/Hero.jsx†L17-L29】
- Buttons sometimes wrap anchor tags (`RegisterPage`) or omit discernible text for icons (`MyNavbar` user dropdown), which hurts accessibility. Ensure every interactive element has clear focus states and text alternatives.【F:src/pages/RegisterPage.jsx†L61-L76】【F:src/components/MyNavbar.jsx†L1-L33】
- Multiple components import Bootstrap CSS individually, inflating bundle size and risking version drift. Import it once in `main.jsx` or the entry layout instead.【F:src/pages/AppointmentForm.jsx†L1-L112】【F:src/components/EmnelegMedeelel.jsx†L1-L40】

## Recommendations
1. **Fix blocking runtime errors**: add missing imports, remove invalid JSX (`<payment>`), and correct `class`/`className` usage before shipping.
2. **Align routing**: ensure navbar links match route definitions and normalize route slugs (Mongolian vs. English) for consistency.
3. **Extract shared data**: move doctor/service metadata into JSON or API responses so the UI can render dynamic content without editing JSX.
4. **Harden forms**: add client-side validation, success/error states, and replace `alert` with inline notifications.
5. **Refine assets & styling**: import static assets through Vite, remove stray debug text, and rely on Bootstrap utilities instead of absolute positioning.

These changes will significantly improve stability, maintainability, and the overall UX of the project.
