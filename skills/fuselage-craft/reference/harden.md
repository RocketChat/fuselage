# harden (Refine)

Production-readiness. Cover edge cases, i18n, RTL, error paths, all through Fuselage. No hand-rolled fallbacks or shortcuts.

## Inherit first

- Load the SKILL.md law layer. Confirm the installed @rocket.chat/fuselage version. Resolve every component/prop/token from the installed package, never memory.

## Flow

1. **Edge cases.** Long text (truncate with `Box` or Typography component wrapping, not hard `max-width`). Zero items (show empty state with `Callout` or well-formed empty placeholder). Many items (pagination or virtualization). Overflow (clip or scroll via logical Box props, never hardcoded values).

2. **Internationalization.** No concatenated strings. Use proper i18n keys. Numbers, dates, currency: use `Intl` or the app's i18n library. No hardcoded locale assumptions. Test with RTL locale (Arabic, Hebrew) to catch right-to-left regressions.

3. **Logical spacing (RTL-safe).** Use `pi` (padding-inline-start), `pb` (padding-block-start), `mi` (margin-inline-start), `mb` (margin-block-start). Never `paddingLeft`, `marginRight`, or literal left/right. The layout flips automatically in RTL.

4. **Error and disabled paths.** Every input, button, field has an error state (via `FieldError`), a disabled state, and a loading state. Test them. Error messages are specific and actionable.

5. **Failure and empty states.** Network errors, permission denied, no results: show `Callout` or custom empty state. Never silently hide content or show a blank screen.

6. **Accessibility.** Keyboard navigation (Tab, Enter, arrow keys, Escape) works. Focus order is logical. All labels use `FieldLabel` paired with inputs in `Field`. Honor `usePrefersReducedMotion` (no auto-play, no flashing, no parallax). Test with a screen reader (even a quick scan).

## Output

Hardening passes make the feature robust. It survives edge cases, works globally, is accessible, and degrades gracefully when things break.

## Close with the gate

Run `node skills/fuselage-craft/gate/run-gate.mjs <target>`. Type gate and lint gate must pass. Warnings OK. Done when green.

## Fuselage specifics

Resolve the current vocabulary live: `node skills/fuselage-craft/resolve.mjs components forms hooks semantic`. The type gate is authoritative. This pass hardens through Field family for a11y, Callout for edge-case messages, hooks like useBreakpoints and usePrefersReducedMotion for responsive and preference-aware behavior, logical spacing, and semantic color tokens.
