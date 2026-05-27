# fuselage-craft

A Claude Code skill for building and refining UI in products that **consume**
`@rocket.chat/fuselage`. It keeps consumer code faithful to the design system: it treats
the installed Fuselage packages as the single source of truth and never copies a Fuselage
value or name into product code.

This README is the human-facing overview. The authoritative pieces live elsewhere and this
file links to them rather than restating them:

- [`SKILL.md`](./SKILL.md) — the agent contract: the laws, the source-of-truth rules, the router.
- [`reference/`](./reference) — the per-command flows the agent follows.
- [`gate/README.md`](./gate/README.md) — the enforcement layer (lint + type gate).
- [`../README.md`](../README.md) — how to install this skill into Claude Code (symlink).

Not for authoring Fuselage itself. That work happens in the Fuselage repo with its own
tokens and components.

## Mental model

Three live mechanisms, all reading the installed package, none holding a copy:

1. **Resolve, don't recall.** Token / component / hook names come from
   `node skills/fuselage-craft/resolve.mjs <category>`, read live from the installed
   packages. The skill bakes in no vocabulary.
2. **The type gate enforces.** Emitted JSX must typecheck against the installed Fuselage
   types, so a wrong prop or token is a compile error, not a guess.
3. **The lint gate kills literals.** Raw hex, px, shadows, hand-rolled inputs are banned by
   value-free ESLint rules.

So product code references token names (`color='font-default'`, `p='x16'`, `<Button primary>`),
the value resolves inside Fuselage at runtime, and a token change propagates everywhere with
no consumer edit. See [`SKILL.md`](./SKILL.md) for the full laws.

## Commands

Invoke as `/fuselage-craft <command> <target>`. If the first word is not a command, the
whole input is treated as a general request under the laws.

| Command | Category | What it does | Edits code | Runs gate | You get |
|---|---|---|:---:|:---:|---|
| `audit` | Evaluate | Conformance scan: gate drift + a judgment pass | no | yes | A report, no edits |
| `critique` | Evaluate | UX heuristic review (hierarchy, load, IA) | no | no | Scored findings |
| `shape` | Build | Plan the feature as a Fuselage component tree | no | no | A composition plan |
| `craft` | Build | Shape, then build the feature end to end | yes | yes | Implemented feature |
| `migrate` | Fix | Convert legacy / raw-CSS UI to Fuselage | yes | yes | Rewritten code + mapping |
| `clarify` | Fix | Fix UX copy, labels, error messages | yes | yes | Reworded code |
| `adapt` | Fix | Make it responsive via fuselage-hooks | yes | yes | Responsive code |
| `polish` | Refine | Complete states: loading, empty, error, focus | yes | yes | Polished code |
| `harden` | Refine | Edge cases, i18n, RTL, a11y, error paths | yes | yes | Hardened code |

### Evaluate

- **`audit`** — the flagship. Runs the lint + type gate against the installed package, then
  a judgment pass for things the gate cannot see (wrong component choice, weak hierarchy,
  color-only state, missing states). Reports drift with file:line and a prioritized fix
  list; makes no edits unless you ask. Use it first on an unfamiliar or legacy surface.
  Example: `/fuselage-craft audit src/**`
- **`critique`** — a UX design review (visual hierarchy, cognitive load, information
  architecture, a11y posture). Writes nothing, runs no gate. Use it when the question is
  "is this good UX," not "is this conformant." Example: `/fuselage-craft critique src/views/Admin`

### Build

- **`shape`** — plans a feature as a Fuselage component composition tree (which components,
  which token roles, which states, the a11y and responsive approach) before any code.
  Produces a plan to confirm, no code, no gate. Use it before building anything non-trivial.
  Example: `/fuselage-craft shape "workspace settings page with a form"`
- **`craft`** — shapes first, confirms, then builds the feature end to end under the laws
  (component first, then `Box`, never raw styled DOM; `Field` for inputs; hooks for
  responsive), closing with the gate. Use it to go from intent to working UI.
  Example: `/fuselage-craft craft "invite-members dialog"`

### Fix

- **`migrate`** — converts legacy or non-Fuselage UI (styled-components, inline styles, raw
  `<button>`/`<input>`, literal hex/px) into Fuselage components and token references. Maps
  by role, never by matching an old value to a token. Produces rewritten code plus a
  migration table. Highest-value command for adopting Fuselage in an existing codebase.
  Example: `/fuselage-craft migrate src/components/LegacyToolbar.tsx`
- **`clarify`** — improves UX copy: labels, button text, error and helper messages, empty
  states. Changes only strings, never Fuselage values. Example: `/fuselage-craft clarify src/forms`
- **`adapt`** — fixes responsive behavior by replacing literal media queries and breakpoint
  px with `fuselage-hooks` (`useBreakpoints`, `useMediaQuery`) and responsive props.
  Example: `/fuselage-craft adapt src/views/Dashboard.tsx`

### Refine

- **`polish`** — the final pass before shipping: complete the states (loading via `Throbber`
  or `Button loading`, errors via `Callout` / `FieldError`, empty states, hover, focus),
  tighten spacing rhythm and hierarchy. Introduces no new literals.
  Example: `/fuselage-craft polish src/views/Channel`
- **`harden`** — production-readiness: edge cases (long text, overflow, zero/many items),
  i18n, RTL via logical spacing props, error / disabled / loading paths, keyboard and focus
  a11y, reduced motion. Example: `/fuselage-craft harden src/components/MemberList.tsx`

## The gate

Every command that writes code closes by running
`node skills/fuselage-craft/gate/run-gate.mjs <target>`:

- **Lint gate** bans literal design values (value-free rules, zero Fuselage knowledge baked in).
- **Type gate** validates the emitted JSX against the consumer's installed Fuselage types.

A change is not done until both pass. Details and rule options: [`gate/README.md`](./gate/README.md).

## Keeping in sync with Fuselage

The skill is designed to track Fuselage **automatically**. It holds no copy of the design
system, so most Fuselage releases need no action here.

**Auto-tracked (do nothing):**

- New / renamed / removed tokens, components, hooks: `resolve.mjs` reads them live from the
  installed packages on the next run.
- New / changed / removed props or token types: the type gate (`tsc`) validates emitted code
  against the installed types automatically.
- Literal-value rules: value-free, so Fuselage changes never affect them.

Illustrative token / component names in this README, `SKILL.md`, the `reference/` files, and
`DESIGN.md` may become cosmetically stale if Fuselage renames something. They are marked
illustrative and the resolver is authoritative, so this is never functional drift. Tidy them
opportunistically; do not hand-sync vocabulary.

**The one manual surface:** `resolve.mjs` hardcodes *structural access paths*, the package
specifiers, the `colors.mjs` / `typography.mjs` subpaths, and the `Theme.ts` `Palette`
sub-object keys (`surface`, `text`, `stroke`, `status`, ...). Only a Fuselage **packaging
restructure** (renaming those exports or files) touches them. The failure mode is safe: a
broken path makes that resolver category report `unavailable`, and the type gate still
enforces correctness. The skill degrades, it never silently produces wrong output.

**Verify after a Fuselage major bump:**

```sh
node skills/fuselage-craft/resolve.mjs all          # every category resolves (no "unavailable")
node skills/fuselage-craft/gate/tests/run-tests.mjs  # lint rules still green
```

If a category reports `unavailable`, update its access path in `resolve.mjs` to match the new
package structure. That is the only maintenance this skill needs.

## Install

This skill is installed into Claude Code via symlink so the repo stays the source of truth.
See [`../README.md`](../README.md#install-into-claude-code-symlink).
