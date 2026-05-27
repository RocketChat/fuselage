# polish (Refine)

Final quality pass before shipping. Complete all states, tighten spacing rhythm, verify hierarchy, ensure consistent elevation. Introduce no new literal values.

## Inherit first

- Load the SKILL.md law layer. Confirm the installed @rocket.chat/fuselage version. Resolve every component/prop/token from the installed package, never memory.

## Flow

1. **States.** For every interactive element, add: loading state (`Button loading` or `Throbber`); empty state with contextual copy; error state (`Callout` or `FieldError` for inputs); disabled state; hover and focus-visible. Nothing should disappear or become broken when in a non-happy-path state.

2. **Spacing rhythm.** Walk the layout and verify all padding, margin, gap use the `x*` scale (x4, x8, x12, x16, x24, x32). Tighten any jagged gaps. Use logical props: `pi`, `pb`, `mi`, `mb` (never left/right/top/bottom). No literal px anywhere.

3. **Type hierarchy.** Check `fontScale=` names match weight and context: h1/h2/h3 for headers, p1/p2 for body, micro for footnotes. Use the Fuselage stories to confirm the idiom.

4. **Elevation.** Hover and focus states often use `elevation='1'` or `elevation='2'`. Modal, popover, dropdown: confirm they use the right elevation depth. No literal box-shadow.

5. **Icon and color pairing.** If color conveys state (danger red), pair it with an icon or text. Never state-by-color-alone.

6. **Dark mode and themes.** Render in light, dark, and high-contrast. All colors must be semantic token names (`font-default`, `surface-tint`, `stroke-error`); the design system resolves them correctly.

## Output

Polish passes are zero-breaking refines. The feature is already functional; now it is complete and shipworthy.

## Close with the gate

Run `node skills/fuselage-craft/gate/run-gate.mjs <target>`. Type gate (tsc) and lint gate must both pass. Warnings are OK; errors are not. Done when green.

## Fuselage specifics

Resolve the current vocabulary live: `node skills/fuselage-craft/resolve.mjs components semantic fontscale spacing elevation radius`. Type gate is authoritative for spacing, elevation, radius. This pass polishes Button states (illustrative: loading, primary, disabled), Throbber, Callout, FieldError, and applies semantic color tokens and spacing rhythm.
