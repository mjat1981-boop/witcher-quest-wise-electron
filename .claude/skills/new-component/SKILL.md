---
name: new-component
description: Scaffold a new React component following the project's shadcn/ui + Radix + Tailwind pattern
disable-model-invocation: true
---

Create a new component in src/components/<ComponentName>.tsx.

Rules:
- Use `interface <ComponentName>Props` for prop types
- Import cn from @/lib/utils for conditional class merging
- Export as a named export (not default)
- Follow existing component structure (see src/components/Bestiary.tsx as reference)
- Create a companion test in src/test/<ComponentName>.test.tsx using Vitest + Testing Library
- Do not add comments explaining what the code does — name things clearly instead

Args: $ARGUMENTS (component name, e.g. `/new-component QuestLog`)
