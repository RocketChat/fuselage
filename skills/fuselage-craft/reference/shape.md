# shape (Build)

Plan a feature as a Fuselage component composition tree before writing code. No product code written. Confirms with the user before craft builds.

## Inherit first

- Load the SKILL.md law layer. Confirm the installed @rocket.chat/fuselage version. Understand the feature intent, user flow, and context.

## Flow

1. **Decompose the UI.** Sketch the component tree. What is the top-level container (Page, Modal, Sidebar)? What are the child sections? What goes inside each (inputs, buttons, cards, lists)?

2. **Choose Fuselage components.** For each role in the tree, pick the right Fuselage component or Box with semantic props. Button for actions, Field/FieldLabel/FieldRow for inputs, Callout for messages, Tabs for navigation, Modal for overlays, Table for data, Avatar for identity, Tile for cards.

3. **Token and prop plan.** For each component, decide the token names: color scheme (which semantic colors: `font-default`, `surface-tint`, `stroke-light`?). Spacing rhythm (padding/margin on x* scale). Type hierarchy (fontScale names). Elevation (depth via `elevation=`). BorderRadius (small/medium/large).

4. **State coverage.** List all states the feature must support: loading (via `Throbber` or Button `loading`), empty (custom empty state with `Callout` or icon), error (via `Callout` or `FieldError`), disabled (via component prop), success (via `Callout type='success'` or check icon). Do not leave any state blank.

5. **Accessibility approach.** Inputs inside `Field` + `FieldLabel` (never hand-wired labels). Keyboard navigation (Tab, Enter, Escape). Focus order is logical. Reduced motion honored (no auto-play, no flash). Semantic HTML preserved (no `<div role='button'>`).

6. **Responsive strategy.** Which sections change layout on mobile vs desktop? (Sidebar becomes hamburger menu? List becomes card grid?) Which props respond to breakpoints (padding, font size, grid columns)? Use `useBreakpoints` / `useMediaQuery`.

7. **Open questions.** Anything missing from Fuselage that the design needs? (New component, new token, new prop?) Surface it as a blocker to be resolved in the Fuselage repo before coding.

## Output

A clear composition plan in text or diagrams. Example:

```
<Modal>
  <Box p='x16' bg='surface-light'>
    <Box fontScale='h2' mb='x16'>Create User</Box>
    <Field>
      <FieldLabel>Name</FieldLabel>
      <FieldRow>
        <Input placeholder='John Doe' />
      </FieldRow>
      <FieldHint>Full name or alias</FieldHint>
    </Field>
    <Field>
      <FieldLabel>Email</FieldLabel>
      <FieldRow>
        <Input type='email' />
      </FieldRow>
      <FieldError>Invalid email (if error state)</FieldError>
    </Field>
    <Box display='flex' mi='x0' gap='x8' mt='x24'>
      <Button primary>Save</Button>
      <Button secondary>Cancel</Button>
    </Box>
  </Box>
</Modal>
```

Include state variations (loading, error, empty) and responsive notes.

## No code, no gate. Hand off to craft.

This command produces a design plan, not product code. When the user confirms the shape, move to craft to build it under the laws.

## Fuselage specifics

Resolve the current vocabulary live: `node skills/fuselage-craft/resolve.mjs all`. Type gate is authoritative for spacing, elevation, radius. This plan uses Box for layout, Button for actions, Field family for inputs, Callout for messages, Modal/Tabs/Table for structure, Avatar/Tile for cards, Throbber for loading, hooks like useBreakpoints, and semantic tokens for color, spacing, type, depth, and corners.
