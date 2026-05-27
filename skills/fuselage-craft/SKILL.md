---
name: fuselage-craft
description: >-
  Design and refine UI in products that CONSUME @rocket.chat/fuselage. Use when working
  on a downstream app's components, screens, forms, dashboards, settings, onboarding, or
  empty states and you want the result to stay on the Fuselage design system. Commands:
  audit, migrate, polish, harden, critique, clarify, adapt, shape, craft. Every command
  treats the installed Fuselage packages as the single source of truth and never copies a
  Fuselage value. Not for authoring Fuselage itself.
---

# Fuselage Craft

A design-and-refine skill suite for repos that build product UI on top of
`@rocket.chat/fuselage`. It keeps consumer code fluent in, and faithful to, the design
system. It is **not** for authoring Fuselage itself (that work lives in the Fuselage repo
with its own tokens and components).

## Prime directive: reference, never replicate

**Fuselage is the source of truth. This skill holds no copy of it.**

- No extracted manifest, no token snapshot, no hardcoded value in this skill or in the
  code it produces.
- Anything the skill needs about a component, prop, or token, it resolves from the
  **installed package** at use-time. The package is always more current than any copy.
- Correctness comes from pointing at the real thing, not from remembering it.

## Source-of-truth resolution

The target repo depends on Fuselage. Resolve against what is actually installed:

1. **Pin the version.** At session start, read the consumer's `package.json` + lockfile
   for `@rocket.chat/fuselage*`. All reasoning is pinned to THAT version. State it.
2. **Resolve vocabulary live.** Never recall Fuselage names from memory. Run
   `node skills/fuselage-craft/resolve.mjs <category>` to get the current token / component / hook / fontScale names. Use ONLY what it returns. The type gate is the final authority for anything the resolver marks type-only (elevation, radius, spacing).
3. **Resolve live, don't cache.** To confirm a prop, value, component, or token, read it
   from `node_modules/@rocket.chat/fuselage*` (types, token JSON, exports), or the
   workspace package if in-monorepo. Read on demand; never persist a derived copy.
4. **Prefer the type definitions.** The shipped `.d.ts` are the API contract: the Box
   `color=` / `bg=` / `fontScale=` / `elevation=` unions, the Button boolean variants,
   the form components, the hooks. Read the types, not your memory.
5. **Prefer stories for idiom.** `*.stories.tsx` show blessed composition. Match them.

## Output contract (every command obeys)

Generated or modified product code MUST:

- **Carry no literal design values.** No hex, no px spacing, no font-size/weight, no
  `box-shadow`. Use token-name references: `color='font-default'` (illustrative; resolve the live set with `resolve.mjs semantic`), `bg='surface-tint'`,
  `p='x16'`, `fontScale='h3'`, `elevation='2'`, `borderRadius='large'`. The value resolves
  inside Fuselage at runtime via `--rcx-*` custom properties.
- **Reach for the component first.** Fuselage component → then `Box` with semantic props
  → never raw styled DOM. Never hand-roll a Button, Modal, input label, or error that
  Fuselage ships (`<Button primary>`, not a styled `<button>`).
- **Use the a11y wrappers.** Inputs go inside `Field` / `FieldLabel` / `FieldRow` /
  `FieldError` (`@rocket.chat/fuselage-forms`). Never hand-wire a label to an input.
- **Drive responsiveness with hooks.** `useBreakpoints`, `useMediaQuery`,
  `usePrefersReducedMotion`, `usePosition` from `@rocket.chat/fuselage-hooks`. Not literal
  media queries, not hardcoded breakpoint px.
- **Theme through tokens.** Code must resolve across light / high-contrast / dark with no
  change, because it references semantic names. Hard-coding a value breaks theming and is
  therefore wrong.

## The gate (how "done" is proven)

Conformance against Fuselage is largely OBJECTIVE. Two gates, both run against the
installed package, not a copy:

- **Type gate (authoritative).** Emitted JSX must typecheck against the installed Fuselage
  types (`tsc` / LSP). `fontScale='h9'`, `<Button variant="primary">`, a nonexistent
  component: all become type errors. Drift is impossible if it typechecks.
- **Lint gate.** What types can't see: `no raw hex`, `no literal px spacing`,
  `prefer <Box> over styled <div>`, `require Field wrapper around inputs`,
  `no color-only state`. An ESLint rule pack (extends the repo's existing eslint +
  jsx-a11y) carries this.

A change is not done until both pass. Report the version checked, the gate results, and
any drift found.

## Laws (the bans)

| Forbidden | Use instead |
|---|---|
| Literal hex / rgb in product code | `color=` / `bg=` semantic token name |
| Literal px spacing / margin / padding | `p` / `m` / `pi` / `pb` on the `x*` scale |
| `font-size` / `font-weight` / `line-height` | `fontScale=` name |
| Literal `box-shadow` | `elevation=` name |
| Literal `border-radius` px | `borderRadius=` scale name |
| Hand-rolled `<button>` / styled `<div>` button | `<Button primary\|secondary\|danger\|...>` |
| Hand-wired `<label>` + `<input>` | `<Field>` + `<FieldLabel>` + `<FieldRow>` |
| Literal media query / breakpoint px | `useBreakpoints` / `useMediaQuery` |
| Component/prop not in the installed types | nothing - see "When the system lacks it" |
| State conveyed by color alone | color + weight / icon / text |

Cross-register bans still apply: no side-stripe borders >1px, no gradient text, no
decorative glassmorphism.

## Anti-drift test

> Would a Fuselage maintainer look at this and say "that is not how you use Fuselage"?

If yes, it failed. Rewrite using the real component/token, resolved from the package.

## When the system lacks something

If the task genuinely needs a component, prop, or token Fuselage does not ship: **do not
hand-roll it in product code.** That is how drift starts. Instead:

1. Stop and surface it as a blocker.
2. Propose the Fuselage extension (new component / token / prop) as the correct fix, to be
   made in the Fuselage repo.
3. Keep consumer code within the system until the extension lands.

This skill's job is fluent, drift-free *use* of the system, never quiet extension of it.

## Commands

When the first argument matches a command below, **load its `reference/<command>.md` and
follow it**; everything after the command name is the target. If the first argument matches
no command, treat the whole argument as a general Fuselage-craft request under the laws
above. Setup (below) runs first either way.

| Command | Category | What it does | Reference |
|---|---|---|---|
| `audit` | Evaluate | Flagship. Run the type + lint gate against the installed package; report drift (literal values, reinvented components, missing `Field`, props that don't typecheck), then a judgment pass. | [reference/audit.md](reference/audit.md) |
| `migrate` | Fix | Convert legacy raw-CSS / hex / hand-rolled UI into Fuselage components + token references. Map by role, never by copying the old value. | [reference/migrate.md](reference/migrate.md) |
| `polish` | Refine | Final pass: loading (`Throbber`), errors (`Callout` / `FieldError`), empty states, focus, state completeness. No new literals. | [reference/polish.md](reference/polish.md) |
| `harden` | Refine | Edge cases, i18n, RTL, error / disabled / loading paths, a11y, all through Fuselage. | [reference/harden.md](reference/harden.md) |
| `critique` | Evaluate | UX heuristics (hierarchy, cognitive load, IA). No code change, no gate. | [reference/critique.md](reference/critique.md) |
| `clarify` | Fix | UX copy, labels, error messages. Changes words, never Fuselage values. | [reference/clarify.md](reference/clarify.md) |
| `adapt` | Fix | Responsive behavior via `fuselage-hooks`, not media-query literals. | [reference/adapt.md](reference/adapt.md) |
| `shape` | Build | Plan a feature as a Fuselage component composition tree. No code. | [reference/shape.md](reference/shape.md) |
| `craft` | Build | Shape, then build the feature end to end under the laws. | [reference/craft.md](reference/craft.md) |

## Setup (every command, before work)

1. Confirm the repo consumes `@rocket.chat/fuselage`; read installed version(s). If not
   installed, stop - this skill does not apply.
2. Load product intent: `PRODUCT.md` if present (register, users, principles). The token
   contract is NOT a local DESIGN.md with values; it is the installed Fuselage package.
3. Run `node skills/fuselage-craft/resolve.mjs <relevant category>` for the vocabulary the task touches. Treat its output as current truth. Never guess names.
4. Resolve the specific components / props / tokens the task touches from the package.
5. Do the work under the laws above. Close with the gate.
