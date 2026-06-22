# Calendar Dashboard (Impekable)

A React calendar app with event management. Events are stored in `localStorage`.

**Live:** https://olyazarichna.github.io/react-test/

## Stack

React, TypeScript, Vite, MUI, FullCalendar, React Hook Form, Zod

## Getting started

1. Install Node.js **20+** (22 recommended)
2. Clone the repo and open the project folder
3. Run:

```bash
nvm use
npm install
npm run dev
```

4. Open the URL from the terminal (usually http://localhost:5173)
5. Go to Calendar: `/#/calendar`

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy (GitHub Pages)

1. In GitHub: **Settings → Pages → Deploy from branch → `gh-pages` → / (root)**
2. Run:

```bash
npm run deploy
```

The live site updates in 1–3 minutes. Run `npm run deploy` again after code changes.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build and publish to GitHub Pages |
