# Project Overview

This is a personal branding website for Tan Tran, a Technology Leader and Engineering Manager. The website is built with Next.js, TypeScript, and Tailwind CSS. It's designed to showcase his expertise and create opportunities for his career and consulting projects.

The website features a modern, professional design with a clear structure. The main pages include:

*   **Home:** A comprehensive overview of Tan Tran's profile, including his philosophy, key roles (I Build, I Lead), Career Highlights, and latest blog posts.
*   **About:** A detailed look into his career journey, leadership philosophy, and personal interests. It also features an AI-powered Q&A section called "MyDigitalTwin".
*   **Blog:** Links to his external blog on Hashnode.
*   **Reach Me:** A redesigned contact page offering two clear paths for users: a streamlined form to send a message, or an integrated Cal.com widget to directly schedule a meeting.
*   **Playbooks:** A section offering practical guides and strategies for building, leading, and scaling technology-driven businesses.

The project is hosted on Vercel and uses Brevo for email services, Cal.com for scheduling, and Google Analytics for tracking.

# Building and Running

The project uses `npm` as the package manager. The following scripts are available in `package.json`:

*   **`npm run dev`**: Starts the development server with Turbopack at `http://localhost:3000`.
*   **`npm run build`**: Creates a production-ready build of the application.
*   **`npm run start`**: Starts the production server.
*   **`npm run lint`**: Lints the codebase using Next.js's built-in ESLint configuration.

# Development Conventions

*   **Framework:** The project uses Next.js with the App Router.
*   **Language:** The codebase is written in TypeScript.
*   **Styling:** Tailwind CSS is used for styling.
*   **Components:** The UI is built with React components, which are organized in the `src/app/components` directory. Reusable UI components are located in `src/app/components/ui`.
*   **Pages:** The pages are located in the `src/app` directory, with each page in its own subdirectory.
*   **API Routes:** API routes are located in the `src/app/api` directory.
*   **Project Documentation:** Project plans and feature documentation are stored in the `/docs` directory. See `docs/ROADMAP.md` for the development plan.
*   **Linting:** The project uses the default Next.js ESLint configuration. Run `npm run lint` to check for linting errors.
*   **Formatting:** The codebase is formatted with Prettier.
*   **Git:** The project is managed with Git. Please follow the conventional commit message format.
