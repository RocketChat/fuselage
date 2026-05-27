# adapt (Fix)

Responsive behavior via Fuselage hooks, not literal media queries. Replace hardcoded breakpoint px with `useBreakpoints` / `useMediaQuery`. Logical spacing. Mobile vs desktop composition.

## Inherit first

- Load the SKILL.md law layer. Confirm the installed @rocket.chat/fuselage version. Examine the installed `@rocket.chat/fuselage-hooks` export and breakpoint schema.

## Flow

1. **Replace media query px.** Any `@media (min-width: 768px)` or hardcoded breakpoint becomes `useBreakpoints()` or `useMediaQuery()`. Read the hook signature from the installed package. Never hardcode breakpoint values.

2. **useBreakpoints hook.** Returns an object with boolean flags for each breakpoint (xs, sm, md, lg, xl). Use it to conditionally render or apply Box props. Example: `const { lg } = useBreakpoints(); return <Box p={lg ? 'x24' : 'x16'}>...</Box>`.

3. **useMediaQuery hook.** For custom media queries that don't fit standard breakpoints (e.g., aspect ratio, pointer-hover). Pass a media query string; get a boolean.

4. **Responsive Box props.** Box accepts responsive arrays on certain props (p, m, gap, etc.). Use them instead of nested ternaries. Confirm syntax from the installed types.

5. **usePrefersReducedMotion.** If the design has motion (e.g., slide-in, fade, spin), honor `usePrefersReducedMotion()` and skip or soften the animation. Respect user preferences.

6. **Logical spacing.** Use `pi`, `pb`, `mi`, `mb` (inline and block) instead of `paddingLeft`, `marginRight`. This makes layouts RTL-safe automatically.

7. **Mobile vs desktop composition.** Sidebar menu becomes a hamburger menu on mobile (use `useBreakpoints()` to show/hide). List becomes a card grid on desktop. Confirm the layout shift with the design.

## Output

Responsive behavior driven entirely by hooks and token names. No literal media query syntax. No hardcoded breakpoint px. Layouts adapt smoothly.

## Close with the gate

Run `node skills/fuselage-craft/gate/run-gate.mjs <target>`. Type gate and lint gate must pass. Warnings OK. Confirm no literal media queries remain. Done when green.

## Fuselage specifics

Resolve the current vocabulary live: `node skills/fuselage-craft/resolve.mjs hooks breakpoints`. This pass drives responsive behavior through hooks (illustrative: useBreakpoints for breakpoint flags, useMediaQuery for custom queries, usePrefersReducedMotion for motion preferences), Box responsive props, logical spacing, and semantic color tokens.
