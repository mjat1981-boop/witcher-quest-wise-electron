---
name: project-conventions
description: Witcher Quest Wise domain conventions — component patterns, data shapes, routing, and Supabase usage rules
user-invocable: false
---

## Project: Witcher Quest Wise
Electron + React 18 + Vite desktop companion app for The Witcher 3.

## Data Architecture
- Static game data (quests, bestiary entries, Gwent cards, dialogue trees, endings) lives in `src/data/` as local TS/JSON imports — no API fetch
- Supabase (`@supabase/supabase-js`) is for user-specific state only: save files, preferences, progress tracking
- All Supabase calls are wrapped with TanStack Query (`@tanstack/react-query`) — never call the supabase client directly inside components

## Component Conventions
- All components live in `src/components/` and use the shadcn/ui pattern: Radix UI primitives + Tailwind + `cn()` from `@/lib/utils`
- Props are typed with a named `interface <ComponentName>Props` (not inline or type alias)
- Named exports only — no default exports from component files
- Use `lucide-react` for icons
- Existing components to reference: `Bestiary.tsx`, `GwentDeckBuilder.tsx`, `DialogueTree.tsx`

## Routing
- Pages in `src/pages/`, routed via react-router-dom v6 (`<Routes>` + `<Route>`)
- `src/App.tsx` owns the router; do not add routes elsewhere

## Electron
- Main process: `electron/main.cjs`
- Preload bridge if IPC is needed (don't use `nodeIntegration: true`)
- Dev: `npm run electron:dev`; Production build: `npm run electron:build`

## Testing
- Unit/component tests: Vitest + `@testing-library/react` in `src/test/`
- E2e: Playwright (`playwright.config.ts`)
- Run tests: `npm test`
