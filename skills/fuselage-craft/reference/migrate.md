# Migrate (Fix)

Convert legacy or non-Fuselage UI into Fuselage components and token references. Map by role and intent, never by matching literal values to tokens.

## Inherit first

- Load the SKILL.md law layer. Confirm the installed @rocket.chat/fuselage version. Resolve every component, prop, and token from the installed package, never memory.

## Flow

1. **Setup.** Confirm the installed package version. Scope the target: file, directory, or component. Read the SKILL.md law layer in full before touching any code.

2. **Inventory the legacy surface.** Catalogue every violation in scope:
   - styled-components or emotion blocks
   - `style={{}}` inline style objects
   - CSS modules and SCSS files
   - Raw `<button>`, `<input>`, `<select>`, `<label>` elements
   - Hand-rolled label+input field layouts
   - Literal media queries (`@media (max-width: ...)`)
   - Literal hex colors, px dimensions, box-shadow values

3. **Map each finding to Fuselage by role.** Build a mapping table before writing any code:

   | Legacy construct | Fuselage replacement | Mapped by |
   |---|---|---|
   | Raw element | Fuselage component or Box | Role/function |
   | Primary action | `<Button primary>` | It IS the primary action |
   | Destructive action | `<Button danger>` | It IS destructive |
   | Field layout | Field + FieldLabel + FieldRow + FieldError | Form field role |
   | Spacing | `p=` / `m=` on x* scale | Layout intent |
   | Text style | `fontScale=` | Typographic role |
   | Color | `color=` bare font name (e.g. `default`, `danger`) / `bg=` surface name (e.g. `surface-tint` or bare `tint`) / `borderColor=` bare stroke name (e.g. `error`, `light`); resolve live via `resolve.mjs semantic` | Color role, not hex match |
   | Shadow | `elevation=` | Depth role |
   | Media query | `useBreakpoints` or `useMediaQuery` | Responsive intent |

   THE CARDINAL RULE: a legacy `#156FF5` primary button becomes `<Button primary>` because it IS the primary action, not because some token resolves to that hex. Never reverse-engineer a token from a color value. If the role is ambiguous, STOP and ask the user.

4. **Rewrite incrementally.** One component or block at a time. Preserve all behavior, event handlers, and prop interfaces. Prefer the named Fuselage component; fall back to Box with semantic props; never use raw styled DOM elements.

5. **No Fuselage equivalent.** If a construct has no counterpart in the installed package, STOP. Surface it as a blocker. Propose the Fuselage extension path (authoring lane) rather than hand-rolling a one-off implementation.

6. **Gate.** Run the gate and iterate until both lint and type checks pass.

## Output

Migrated source files plus a migration summary table listing every legacy construct mapped to its Fuselage component or token, annotated with the role that drove the decision.

## Close with the gate

Run `node skills/fuselage-craft/gate/run-gate.mjs [globs]` against all modified files. Fix every lint error (no-raw-color, no-literal-dimension, no-literal-shadow, require-field-wrapper, prefer-box) and every TypeScript error from `tsc --noEmit`. Warnings do not fail the gate; errors do. Do not mark migration complete until the gate exits zero.

## Fuselage specifics

Resolve the current vocabulary live: `node skills/fuselage-craft/resolve.mjs semantic components forms hooks fontscale`. The type gate validates anything type-only. This lane relies on Box for styling, Button for actions (illustrative variants: primary, secondary, danger), Field family for form structure, Callout for messages, and hooks like useBreakpoints for responsive composition.
