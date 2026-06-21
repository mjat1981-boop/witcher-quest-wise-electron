# Witcher Quest Wise — Electron Desktop

A desktop build of **Witcher Quest Wise**, a spoiler-aware quest guide and walkthrough
companion for *The Witcher 3*. This repo wraps the Vite + React web app in
[Electron](https://www.electronjs.org/) so it runs as a standalone native window on Windows.

## What it is

- **Web app:** Vite + React + TypeScript + Tailwind (shadcn/ui components), with quest,
  dialogue, bestiary, and tips data. Optional Supabase backend.
- **Desktop shell:** A minimal Electron main process (`electron/main.cjs`) that loads the
  built app in a 1280×800 window (`contextIsolation: true`, `nodeIntegration: false`).
- Packaged for Windows via `electron-builder`.

## Tech stack

| Layer | Tooling |
|-------|---------|
| UI | React 18, TypeScript, Tailwind CSS, shadcn/ui |
| Build | Vite |
| Desktop | Electron + electron-builder |
| Backend (optional) | Supabase |
| Tests | Vitest, Playwright |

## Getting started

```bash
# install dependencies
npm install      # or: bun install

# run the web app in the browser (dev server on http://localhost:8080)
npm run dev

# run the app inside an Electron window (live reload)
npm run electron:dev

# build the web assets only
npm run build

# build a packaged Windows desktop app (dist-electron/)
npm run electron:build
```

## Environment setup

The app can use Supabase. Create a `.env` file in the project root with your own values
(these `VITE_` vars are bundled into the client — use the **publishable/anon** key, not the
secret service key; data is protected by Row Level Security):

```
VITE_SUPABASE_URL=
VITE_SUPABASE_PROJECT_ID=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

`.env` is gitignored and must never be committed.

## Project layout

```
electron/        Electron main process (window creation, app lifecycle)
src/             React app source (components, data, pages)
public/          Static assets (icons, etc.)
supabase/        Supabase config
```

## Scripts

| Script | Purpose |
|--------|---------|
| `dev` | Vite dev server |
| `electron:dev` | Vite + Electron with live reload |
| `build` | Build web assets |
| `electron:build` | Build + package Windows desktop app |
| `lint` | ESLint |
| `test` | Vitest run |
