# Copilot Instructions for Appointment Booking Project

## Overview
This project is a React-based appointment booking website built using Vite. It includes components for user interaction, pages for navigation, and assets for styling and branding. The project is structured to facilitate modular development and maintainability.

## Key Components
- **Components** (`src/components/`):
  - `HeroCard.jsx`: Displays cards with variant styles (e.g., Primary, Light, Warning).
  - `MyNavbar.jsx`: Navigation bar for the website.
  - `Footer.jsx`: Footer section for the website.
  - Other reusable UI components like `DoctorCard`, `SearchBar`, etc.
- **Pages** (`src/pages/`):
  - `Home.jsx`: The landing page of the website.
  - `AppointmentPage.jsx`: Page for booking appointments.
  - `Login.jsx` and `RegisterPage.jsx`: Authentication-related pages.
  - `PaymentUI.jsx`: Handles payment-related UI.
- **Assets** (`src/assets/`): Contains images and other static resources.

## Developer Workflows
### Build and Run
- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- Build for production: `npm run build`
- Preview the production build: `npm run preview`

### Linting
- ESLint is configured for this project. Run `npm run lint` to check for linting issues.

## Project-Specific Conventions
- **Styling**: CSS files are colocated with components or pages where applicable (e.g., `MyBookingCalendar.css` in `src/pages/`).
- **Card Variants**: The `HeroCard` component uses Bootstrap's card variants (`Primary`, `Light`, `Warning`) for styling.
- **React-Bootstrap**: The project leverages `react-bootstrap` for UI components.

## External Dependencies
- **React**: Core library for building the UI.
- **Vite**: Development server and build tool.
- **React-Bootstrap**: For pre-styled UI components.
- **React-Icons**: For including icons in the UI.

## Integration Points
- **Routing**: Likely handled via `react-router-dom` (not explicitly mentioned but inferred from the presence of multiple pages).
- **State Management**: Not explicitly mentioned; consider adding details if Redux, Context API, or other state management tools are used.

## Examples
### Adding a New Card to `HeroCard`
To add a new card variant:
1. Update the `cards` array in `HeroCard.jsx`:
   ```javascript
   {
     variant: 'Success',
     header: 'Success Header',
     title: 'Success Card Title',
     text: 'This is a success card. It indicates a positive action.',
   }
   ```
2. The new card will automatically render with the specified styles.

### Running Lint Checks
Run the following command to check for linting issues:
```bash
npm run lint
```

## Notes
- Follow the modular structure for adding new components or pages.
- Ensure assets are optimized before adding them to the `src/assets/` directory.

For further details, refer to the `README.md` file or project-specific documentation.