# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Fuselage is Rocket.Chat's React component library, organized as a Yarn 4 (Berry) monorepo with Turbo for build orchestration and Changesets for versioning. All packages are published under the `@rocket.chat/` npm scope.

## Common Commands

### Build & CI

```bash
yarn build                  # Build all packages (Turbo-orchestrated, respects dependency graph)
yarn test                   # Run all tests
yarn lint                   # Lint all packages
yarn ci                     # Full CI: build + lint + test + build-storybook
```

### Single Package

```bash
yarn workspace @rocket.chat/fuselage build
yarn workspace @rocket.chat/fuselage test
yarn workspace @rocket.chat/fuselage-hooks test
```

### Single Test File

```bash
cd packages/fuselage && npx jest --runInBand src/components/Button/Button.spec.tsx
```

### Storybook

```bash
yarn workspace @rocket.chat/fuselage storybook    # Dev server on port 6006
yarn build-storybook                               # Build all storybooks
```

### Linting

Each package uses `lint` and `lint-and-fix` scripts powered by the `lint-all` tool (runs ESLint + Prettier + stylelint together):

```bash
yarn workspace @rocket.chat/fuselage lint-and-fix
```

### Releasing

```bash
yarn changeset              # Create a changeset for your changes
yarn release                # Publish packages with changesets
```

## Architecture

### Package Dependency Graph (simplified)

```
fuselage (main component library)
├── fuselage-tokens (design tokens: colors, typography, breakpoints)
├── styled (styled API) → css-in-js → css-supports, memo, stylis-logical-props-middleware
├── css-in-js (runtime CSS transpilation)
├── css-supports (memoized CSS.supports())
└── memo (memoization utilities)

fuselage-hooks (React hooks) → emitter, fuselage-tokens
fuselage-forms (form components) → fuselage, fuselage-hooks, icons
onboarding-ui (onboarding flows) → fuselage, fuselage-hooks, layout, logo, icons
layout (app layout components) → fuselage, fuselage-hooks, icons
```

### Build Systems by Package Type

- **Webpack**: `fuselage` (main library with CSS/SCSS assets, outputs UMD + CSS bundle)
- **Rollup**: `emitter`, `css-in-js`, `fuselage-hooks`, `styled` (small libraries, ESM + CJS)
- **TypeScript tsc**: `fuselage-forms`, `onboarding-ui`, `layout` (ESM + CJS via separate tsconfig files)
- **Style Dictionary**: `fuselage-tokens` (design tokens → CSS custom properties, JS, JSON)

### Key Patterns

- `fuselage` components use SCSS modules compiled via Webpack with PostCSS (logical properties, autoprefixer)
- CSS-in-JS runtime in `@rocket.chat/css-in-js` handles dynamic styles with stylis transpilation
- `@rocket.chat/styled` provides the styled component API on top of `css-in-js`
- Design tokens from `fuselage-tokens` are consumed as CSS custom properties
- `fuselage-hooks` and `icons` are peer dependencies of `fuselage`
- React Aria (`react-aria`, `react-stately`) is used for accessible component primitives
- Accessibility testing via `jest-axe` in component tests

## TypeScript

- Base config: `tsconfig.base.json` — strict mode, target ES2024, module NodeNext, JSX react-jsx
- Packages extend the base and typically have `tsconfig.esm.json` / `tsconfig.cjs.json` for dual output
- Tests: `src/**/*.spec.[jt]s?(x)`, Jest with ts-jest preset, jsdom environment

## Conventions

- ESLint flat config (`eslint.config.mjs`) at repo root — shared across all packages
- Prettier uses `@rocket.chat/prettier-config/fuselage` preset
- Husky pre-commit hook runs `yarn update-readme`
- PR titles are validated by CI (`pr-title-checker-config.json`)
- `workspace:~` protocol for all internal dependencies
- Node 22.20.0, Yarn 4.12.0 (pinned via Volta)
