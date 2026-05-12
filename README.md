# Listify

Listify is a React task board for organizing todos across a simple workflow. Add a task, assign an optional creator, then drag cards between columns as work moves from planning to completion.

## Features

- Add new tasks with a title, creator, and automatic timestamp.
- Move tasks between `To Do`, `In Progress`, `Testing`, and `Complete` columns with drag and drop.
- Delete tasks directly from each card.
- View live task counts for each workflow column.
- Toggle between dark and light themes.
- Responsive board layout built with Tailwind CSS utilities.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Icons
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/       Reusable UI pieces for the sidebar, board, columns, cards, and task form
  helpers/          Small formatting and board utility functions
  hooks/            Shared React context for theme, tasks, and drag state
  App.jsx           Main application shell
  main.jsx          React entry point
```

## Deployment

This project includes a GitHub Pages deployment script:

```bash
npm run deploy
```

The `deploy` command builds the app and publishes the `dist` folder with `gh-pages`.

## Notes

Tasks are currently stored in React state, so they reset when the page is refreshed. Persistent storage can be added later with local storage, a backend API, or a hosted database.
