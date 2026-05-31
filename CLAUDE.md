# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Build for production (outputs to dist/)
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Architecture

Single-page React app built with Vite. No routing library — currently one page only.

- `src/App.jsx` — main component with all the page layout (header, main, footer)
- `src/App.css` — all styles for the app, scoped manually by class/id
- `src/index.css` — global resets and CSS variables (colors, fonts)
- `src/main.jsx` — React entry point, mounts `<App />` into `#root`

React 19 with `@vitejs/plugin-react` (Babel-based fast refresh). ESLint configured with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`.
