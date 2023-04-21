# Project Structure

The following is an overview of the main directories and files in the project:

- `src/app/`: contains the Next.js files for the application
- `src/app/components/`: contains the reusable React components used throughout the application
- `public/`: contains the public assets (e.g. images, fonts) used in the application
- `src/app/global.css`: contains the global CSS styles and utilities used in the application
- `README.md`: contains the project overview and setup instructions
- `package.json`: contains the project dependencies and configuration

## App

The `src/app/` directory contains the files that make up the Next.js application. Each page.tsx file should correspond to a specific URL path in the application. For example:

- `src/app/page.tsx`: the home page of the application
- `src/app/about/page.tsx`: the about page of the application

## Components

The `src/app/components/` directory contains the reusable React components used throughout the application. Each component should be self-contained and have a specific purpose. For example:

- `src/app/components/Navbar.tsx`: a reusable navigation bar component
- `src/app/components/Cards/DashboardCard.tsx`: a reusable dashboard card component

## Public Assets

The `public/` directory contains any public assets (e.g. images, fonts) used in the application. These assets can be accessed directly by the browser. For example:

- `public/logo.png`: the logo image used in the application
- `public/fonts/OpenSans-Regular.ttf`: the Open Sans font used in the application

## Styles

The `src/app/global.css` file contains the global CSS styles and utilities used in the application. These styles are defined using the Tailwind CSS framework. For example:

- `src/app/global.css`: the global styles used in the application
- `tailwind.config.js`: the Tailwind configuration file used in the application
