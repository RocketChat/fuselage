---
name: fuselage
description: Build UI with Rocket.Chat's Fuselage design system — pick the right component, use its real props and variants, follow its usage rules, and avoid deprecated APIs. Use whenever writing or reviewing React code that imports from @rocket.chat/fuselage, or when adding a component to the Fuselage library itself.
---

# Fuselage

`@rocket.chat/fuselage` is Rocket.Chat's React component library: 264 exported
components, versioned on npm, styled with SCSS/BEM and themed through CSS
variables. Never hand-roll a control that already exists here, and never style a
Fuselage component with raw CSS values.

Repository conventions (componentization matrix, React/TypeScript rules, a11y
requirements, verification commands) live in `AGENTS.md` at the repo root. This
skill covers the component API surface that `AGENTS.md` does not.

## Pick a component

1. Scan `references/catalog.md` — one row per component with its group,
   variants, sizes and one-line purpose.
2. Grep `references/components.md` for `#### \`<Name>\`` to get its full prop
   list, what it also accepts, test coverage, and the design **usage rules**
   taken from its Storybook docs (39 components carry these — they say when to
   use the component and when to use something else).
3. Check `references/migration.md` before using any prop you have seen in older
   code.

Everything in those three files is generated from source by
`tools/scripts/src/build-fuselage-registry.ts`. Regenerate after changing a
component's API:

```sh
node tools/scripts/src/build-fuselage-registry.ts
```

`packages/fuselage/registry.json` is the same data as JSON, for tooling.

## Rules that matter most

- **Import from the package root**: `import { Button, Icon } from '@rocket.chat/fuselage';`
  Deep imports into `dist/` or `src/` are not supported.
- **Semantic props, not style values.** `variant='danger'`, not `color='red'`.
  If a component has a `variant`/`size` prop, use it instead of `className`.
- **Colors and lengths come from tokens.** In React, use the token-backed Box
  props under their full CSS names (`color='hint'`,
  `backgroundColor='tint'`, `paddingInline='x16'`) — Fuselage has no `bg`/`p`
  shorthands. In Fuselage SCSS, use the token functions from
  `styles/colors.scss`. Never a hex value or a raw pixel number. See
  `references/patterns.md`.
- **Composition over configuration.** `Modal`, `Card`, `Field`, `Sidebar`,
  `Contextualbar` and `Option` are families of subcomponents, not prop bags.
- **Deprecated props are never acceptable in new code**, and older code may still
  carry them. `Button`'s boolean `primary`/`secondary`/`danger`/`warning`/
  `success`/`mini`/`tiny`/`small`/`medium`/`large` were removed — write
  `variant='primary'` and `size='small'`.
- **`AutoComplete` is deprecated** — use `SelectFiltered` or `MultiSelectFiltered`.
- **Virtualize long lists** with `react-virtuoso` (a peer dependency), not a
  hand-written windowing loop.
- **Forms use `react-hook-form`**, composed with `Field`/`FieldLabel`/`FieldRow`/
  `FieldError`.

## Changing or adding a Fuselage component

Follow `AGENTS.md`, and additionally:

- One component per file, named `<Name>.tsx`, exported `default` and re-exported
  with its props type from the group's `index.ts`.
- Export the props type as `<Name>Props`.
- Styles go in `<Name>.styles.scss` with `rcx-<component>--<variant>` classes —
  never inline styles, never CSS-in-JS in the component file.
- Add `<Name>.stories.tsx`, and put the design rules in
  `parameters.docs.description.component` — that text is what this skill hands to
  future agents.
- Add `<Name>.spec.tsx` with a `jest-axe` assertion. 208 of 264 components have
  axe coverage in their group; do not make that worse.
- Prefer `react-aria`/`react-stately` for anything with focus management,
  keyboard navigation or overlay positioning. Only `Menu`, `Popover`, `Select`
  and `Slider` are on it today; new interactive components should join them
  rather than hand-roll ARIA.
- Add a changeset (`yarn changeset`) for any published change.

## Verify

```sh
yarn lint                                          # lint + typecheck
yarn test                                          # unit tests
yarn workspace @rocket.chat/fuselage visual-regression
```

## Known gaps

Fuselage has no Calendar/DatePicker, no command palette, no DataTable (only a
bare `Table`), and no form-library integration beyond `Field`. If a task needs
one of these, say so instead of inventing a Fuselage-looking component in
application code.
