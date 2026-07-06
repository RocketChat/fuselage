# AGENTS.md

## Purpose

This file defines how coding agents should work on Rocket.Chat frontend code in this repository.
It consolidates guidance from the Frontend area documentation and linked standards pages.

## Scope

- Applies to all frontend work in this monorepo.
- Prefer repository conventions first when they differ by package.
- Keep changes aligned with Fuselage design system and frontend community standards.

## Core Principles

- Deliver modern, consistent, accessible, and performant UI.
- Prefer reusable componentization over one-off implementation.
- Keep communication clear, respectful, and transparent in code reviews and issue discussions.

## Componentization Rules

Use this matrix to decide where a component belongs:

- Simple + Visual: Fuselage level only.
- Complex + Visual: Fuselage or application level.
- Simple + Logical: avoid.
- Complex + Logical: application level.

### Simple Components

- Prefer semantic variations over style-value props (for example `variation='primary'`, not color literals).
- Avoid hardcoded sizes, magic numbers, and random CSS values.
- Prefer customization through CSS variables and existing tokens.
- Do not default to wildcard `Box` composition for simple components.
- Document all variations in Storybook.
- Add unit tests covering expected behaviors.

### Complex Visual Components

- Keep them visual; do not embed product/business logic.
- Compose from explicit child components and keep APIs clear.
- Encapsulate HTML/Box details behind component APIs.
- Start development in Storybook first.
- Keep child subcomponents used within intended parent scope.
- Provide helper hooks when stateful composition is needed.

### Logical Components

- Compose logical flows using existing visual/complex components.
- Model UI by explicit states and render per state.
- Prefer variation props over direct style overrides.
- Avoid direct inline styles for behavior-driven components.
- Do not write ad-hoc CSS in JS files; keep styles in style files/tokenized systems.

## React Rules

- Prefer functional components.
- One component per file.
- Always name components (or set `displayName` when needed).
- Export component props as explicit types (for example `ComponentProps`).
- Prefer default export at end of component file where this repo pattern expects it.
- Do not pass `children` via prop syntax; use real JSX children.
- Extract helper functions outside components when possible.
- Prefer generics over `unknown` plus assertions when modeling reusable APIs.
- Avoid identifier names that encode type/kind suffixes.

## TypeScript Rules

- Use ES modules; do not mix CommonJS (`require`, `module.exports`) with ESM.
- Prefer `import type` for type-only imports.
- Use `type` by default outside class-implementation contracts; use `interface` when it clearly models class contracts.
- Avoid classes as namespaces unless singleton stateful encapsulation is required.
- Avoid `any`; use `unknown` and narrow types. Use `any` only as a deliberate generic constraint when needed.

## JavaScript to TypeScript Migration

- Treat TypeScript as incremental; keep working code while increasing type safety.
- Use JSDoc types in `.js` files during migration when inference is insufficient.
- For large modules, create a `.d.ts` declaration first to define the module interface before full conversion.

## Design System and Styling

- Use Fuselage components and tokens first.
- Use Palette tokens for color usage; avoid hardcoded color values.
- In React, use token-backed props (`bg`, `color`) and semantic token names.
- In Fuselage SCSS, use token helpers from colors utilities (surface/font/stroke) instead of raw values.

## Accessibility Requirements

- Ensure keyboard accessibility for all focusable controls.
- Always connect labels to form inputs (`htmlFor`/`id`).
- Use `aria-describedby` for hints and supporting descriptions.
- Mark and communicate required and validation states accessibly.
- Prefer `react-hook-form` for form handling in frontend forms.
- Add accessibility checks in tests when possible.

## Third-Party Libraries

Prefer approved libraries for these domains:

- React for UI.
- React Hook Form for forms.
- TanStack Query for async server-state workflows.
- Testing Library for component testing.
- React Virtuoso for large list virtualization.
- react-error-boundary for error boundaries.

If a new library is needed, justify why approved options do not fit.

## Testing and Documentation Expectations

- Add or update Storybook stories when creating or changing components/variations.
- Add unit tests for component behaviors and state transitions.
- Keep tests focused on user-visible behavior and accessibility semantics.

## Agent Workflow Checklist

For each frontend change, agents should verify:

- Correct component level (Fuselage vs application).
- No hardcoded visual values that should be tokens/variables.
- React and TypeScript conventions above are followed.
- Accessibility semantics are present for forms and interactions.
- Storybook coverage is updated for new variations.
- Unit tests cover changed behavior.
- Third-party dependency usage aligns with approved list.

## Source References

- Frontend hub: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/944668690/Frontend
- Guidelines: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/753532947
- TypeScript general conventions: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/753270795
- Migrating from JavaScript: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/753041429
- React: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/753074277
- Building components: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/752943116
- Fuselage: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/753336325
- Third Party Libraries: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/753991710
- Color Palette: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/754286609
- Web Accessibility: https://rocketchat.atlassian.net/wiki/spaces/RnD/pages/754122765
