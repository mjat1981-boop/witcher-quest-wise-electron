# Testing

This project uses [Vitest](https://vitest.dev/) (unit/component tests) and
[Playwright](https://playwright.dev/) (end-to-end) with
[Testing Library](https://testing-library.com/) for React.

## Running tests

```bash
npm test            # run the Vitest suite once
npm run test:watch  # watch mode
```

Vitest is configured in `vitest.config.ts`: `jsdom` environment, global test
APIs, and `src/test/setup.ts` for `@testing-library/jest-dom` matchers plus a
`matchMedia` shim. It picks up any `*.test.ts(x)` / `*.spec.ts(x)` under `src/`.

> Installing deps may need `npm install --legacy-peer-deps` due to a Vite peer
> range on `@vitejs/plugin-react-swc`.

## What's covered today

| Area | File | What it guards |
|------|------|----------------|
| Progress hook | `src/hooks/useQuestProgress.test.ts` | localStorage hydration, corrupt-JSON fallback, `toggle` on/off, `getCount`, `resetAll` |
| Content data | `src/data/dataIntegrity.test.ts` | unique ids, valid enum values, and sane numeric ranges across gwent / quest / dialogue / bestiary / map / route data |
| Deck builder | `src/components/GwentDeckBuilder.test.tsx` | faction selection, card add/remove, strength/unit stats, save/load/delete decks, corrupt-storage fallback, and dropping stale card ids on load (so removal can't target the wrong card) |
| Card tracker | `src/components/GwentTracker.test.tsx` | collect toggle + persistence, hydration, corrupt-storage fallback, search filtering, view-mode switch |
| Route planner | `src/components/RoutePlanner.test.tsx` | progress counter, step toggle + persistence, hydration, corrupt-storage fallback, search filter + empty state |

The data-integrity suite exists because this is a data-heavy guide app: quest
completion, saved Gwent decks, and route progress are all keyed by string ids,
so a duplicated or malformed id in a hand-edited data file silently corrupts
saved state. These tests fail fast on such content edits.

## Writing new tests

- **Pure logic / hooks** → Vitest + `renderHook` from `@testing-library/react`.
  Call `localStorage.clear()` in `beforeEach` when the unit touches storage.
- **Components** → `render` + `screen` queries; assert on visible text and
  roles rather than implementation details.
- **Data files** → add invariants to `dataIntegrity.test.ts` when you add a new
  data module or a new referential relationship between modules.

## Suggested next targets

These are the highest-value units still untested (see the coverage analysis):

1. `Index.tsx` — the quest/dialogue search-filter logic and tab counts, via a
   Testing Library render.
2. `WorldMap` / `Bestiary` / `DialogueTree` — mostly presentational, but their
   filter props deserve smoke tests.
3. Playwright end-to-end smoke: launch, switch tabs, tick a quest, reload,
   assert persistence.

## End-to-end (Playwright)

Config lives in `playwright.config.ts` (`lovable-agent-playwright-config`). Add
specs and run them with the Playwright CLI once E2E scenarios are defined.
