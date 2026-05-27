# clarify (Fix)

UX copy: labels, button text, error messages, helper text, empty-state copy, tooltips. Voice is plain, exact, i18n-friendly. Changes only strings, never Fuselage design values.

## Inherit first

- Load the SKILL.md law layer. Confirm the installed @rocket.chat/fuselage version. Identify all user-facing strings in the feature.

## Flow

1. **Labels.** Input labels (via `FieldLabel`) are noun phrases or short instructions, not marketing. "Name" not "Please enter your name here". "Phone" not "What's your phone number?". Consistent across the product.

2. **Button text.** Action buttons start with a verb ("Save", "Delete", "Invite", "Send"). Secondary buttons are smaller verbs ("Cancel", "Close") or neutral ("More"). Danger buttons are explicit ("Delete forever", not just "Delete"). Loading state shows "Saving...", "Sending...", not the original verb.

3. **Error messages.** Via `FieldError`. Specific, actionable, plain language. "Email already in use" not "Invalid input". "Password must be at least 8 characters" not "Requirement not met". Users understand what went wrong and how to fix it.

4. **Helper text.** Via `FieldHint` or `FieldDescription`. Short, clarifying, optional detail. "At least 8 characters" below a password field. "Used for login notifications" below an email field.

5. **Empty states.** User-facing message when there is nothing to show. "No conversations yet. Create one to get started." not "No data". Pair with an icon or illustration.

6. **Consistency.** Do not mix "Save" and "Submit" in the same product. Do not say "Please" in some places and not others. Build a glossary if the product is large.

7. **Internationalization.** No concatenated strings ("Hello " + name). Use proper i18n keys and interpolation. Numbers, dates: respect locale (use `Intl.NumberFormat`, `Intl.DateTimeFormat`). Do not hardcode "January", "Monday", locale-specific text.

## Output

String changes only. No CSS, no component restructure, no design value changes. All changes are purely textual and localization-friendly.

## Close with the gate

Run `node skills/fuselage-craft/gate/run-gate.mjs <target>`. Type gate (tsc) and lint gate must pass. Warnings OK. Confirm no unintended code drift occurred. Done when green.

## Fuselage specifics

Resolve the current vocabulary live: `node skills/fuselage-craft/resolve.mjs forms components`. This pass changes only text. Components involved: FieldLabel, FieldHint (illustrative examples of form text), FieldError, Callout, Button text, and semantic copy patterns for empty and error states.
