# Audit (Evaluate)

Flagship conformance command. Runs the mechanical gate, then a judgment pass. Reports drift; makes no edits unless explicitly asked.

## Inherit first

- Load the SKILL.md law layer before doing anything else.
- Read the consumer's `package.json` and lockfile; confirm the installed `@rocket.chat/fuselage*` version. State it.
- Resolve every component, prop, and token reference from the installed package (`node_modules/@rocket.chat/fuselage*` types, token JSON, exports). Never use memory.

## Flow

1. **Setup.** Confirm installed Fuselage version. Resolve the target globs or paths to audit.

2. **Mechanical pass.** Run the gate:
   ```
   node skills/fuselage-craft/gate/run-gate.mjs <target>
   ```
   Capture all output. Two categories:

   - **Lint drift** (rules: `no-raw-color`, `no-literal-dimension`, `no-literal-shadow`, `require-field-wrapper` [error], `prefer-box` [warn]):
     - Literal color values in product code (hex, rgb, hsl, named CSS colors)
     - Literal dimension values (px, rem, em used directly for spacing, font-size, border-radius, box-shadow)
     - Inputs not wrapped in a `Field` / `FieldLabel` / `FieldRow` structure
     - Raw styled DOM where a Fuselage component ships (`<button>`, `<div>` standing in for `<Button>`, `<Modal>`, etc.)
     - Inline `style=` props carrying design values

   - **Type drift** (tsc `--noEmit` against installed Fuselage types):
     - `fontScale=` value not in the installed union (typo, stale name, invented value)
     - Nonexistent component imported from `@rocket.chat/fuselage*`
     - `color=` or `bg=` token name not in the installed type
     - `Button` used with a `variant=` string prop instead of boolean flags (`primary`, `secondary`, `danger`, `success`, `warning`)
     - Any other JSX prop that fails the installed type contract

3. **Judgment pass.** What the gate cannot see -- requires reading the code and context:

   - **Wrong component choice.** Hand-rolled component where Fuselage ships one (e.g. a custom alert where `Callout` exists). Resolve the full component set with `resolve.mjs components` rather than recalling it.
   - **Weak hierarchy.** `fontScale` used in a way that inverts or collapses visual hierarchy (e.g., body text set to `h1`, labels set to `hero`).
   - **Color-only state.** State (error, selected, disabled, active) communicated by color alone with no icon, weight, or text reinforcement.
   - **Missing states.** Loading path lacks `Throbber`; error path lacks `Callout` or `FieldError`; empty path has no empty-state treatment.
   - **A11y gaps beyond Field.** Interactive elements missing accessible labels, focus management absent from modals or overlays, non-descriptive link/button text.
   - **Repeated composition.** The same multi-component pattern appears 3+ times and should be extracted into one shared component.
   - **Multiple primary actions.** More than one `<Button primary>` in the same view or modal, creating competing calls to action.

4. **Report.** Structured output in three sections:

   - **Section A -- Drift (mechanical).** Every gate finding, grouped by rule. Each entry: `file:line`, rule name, offending code snippet. Errors and warnings separated.
   - **Section B -- Judgment findings.** Each finding: severity (`high` / `med` / `low`), description, file reference, and the correct Fuselage pattern to replace it.
   - **Section C -- Prioritized fix list.** Ordered by severity. For each item, include the appropriate command to hand off to: `migrate` for raw-CSS / literal-value blocks, `polish` for missing states and empty-state gaps, `harden` for a11y and edge cases, `adapt` for literal breakpoints or media queries.

5. **Conformance summary line.** End the report with a single line, e.g.:
   ```
   Fuselage @X.Y.Z | literal values: N | type errors: N | missing Field: N | judgment findings: N (H high, M med, L low)
   ```

## Output

A structured conformance report (Sections A, B, C) plus the conformance summary line. No code changes. After the report, offer to:
- Fix all mechanical (Section A) drift -- hand off to `migrate`
- Fix state completeness gaps -- hand off to `polish`
- Hand the full report to the user for triage

## Close with the gate

Audit IS the mechanical gate pass. Step 2 runs `run-gate.mjs` as its primary instrument. There is no separate "close with gate" step: the gate output becomes Section A of the report, and the exit code (nonzero on lint errors or tsc failure) is the conformance verdict. Audit makes no edits; it does not need to re-run the gate at the end.

## Fuselage specifics

Resolve the current vocabulary live, do not recall it: `node skills/fuselage-craft/resolve.mjs all`. The type gate validates anything type-only (elevation, radius, spacing). Examples below are illustrative, not a catalog. This command reasons about Box (color, bg, fontScale, spacing, elevation props), Button (variants, sizes, states), Field family for form structure, Callout, Throbber, and hooks like useBreakpoints for responsive detection.
