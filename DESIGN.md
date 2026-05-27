---
name: Fuselage
description: Rocket.Chat design system usage contract. Values are NOT stored here. They resolve from @rocket.chat/fuselage-tokens. This file references token names only.
# ───────────────────────────────────────────────────────────────────────────
# SOURCE OF TRUTH. Do not copy values into this file or into product code.
#   tokens:     @rocket.chat/fuselage-tokens   (colors, typography, breakpoints)
#   components: @rocket.chat/fuselage           (Box styling props, components)
#   forms:      @rocket.chat/fuselage-forms     (a11y field wrappers)
#   hooks:      @rocket.chat/fuselage-hooks     (responsive / interaction)
# Consumers reference SEMANTIC names (color='font-default', p='x16', <Button primary>).
# The value lives in the package and resolves at runtime via --rcx-* custom properties.
# NAMES ARE NOT AUTHORITATIVE HERE EITHER. The entries below map a ROLE to the token a
# consumer should reach for; the current, authoritative name set is resolved live with
#   node skills/fuselage-craft/resolve.mjs <category>
# Treat any name in this file as illustrative of its role, not a catalog. If a name here
# disagrees with the resolver, the resolver (and the type gate) win.
# ───────────────────────────────────────────────────────────────────────────
sourceOfTruth:
  tokens: "@rocket.chat/fuselage-tokens"
  components: "@rocket.chat/fuselage"
  forms: "@rocket.chat/fuselage-forms"
  hooks: "@rocket.chat/fuselage-hooks"
  resolver: "node skills/fuselage-craft/resolve.mjs <category>  # live, authoritative name set"
colors:
  # Box `color=` / `bg=` semantic values. Role only. Resolve value from the package.
  font-default: "Default body and foreground text"
  font-titles-labels: "Headings, labels, highest-emphasis text"
  font-hint: "Placeholders, helper text, secondary info"
  font-annotation: "De-emphasized metadata"
  font-disabled: "Disabled foreground"
  font-danger: "Error text"
  font-info: "Informational and link text"
  surface-room: "Default content surface"
  surface-light: "Raised content surface"
  surface-tint: "Recessed app background behind content"
  surface-hover: "Row and control hover"
  surface-selected: "Selected rows"
  surface-dark: "Inverted surface"
  surface-featured: "Promoted / featured surfaces (rare)"
  surface-overlay: "Modal and scrim backdrop"
  stroke-extra-light: "Default 1px separator / border"
  stroke-light: "Input borders"
  stroke-medium: "Stronger separators"
  stroke-highlight: "Focused / active border (primary)"
  stroke-error: "Error border"
  status-background-info: "Info callout background"
  status-background-success: "Success callout background"
  status-background-danger: "Danger callout background"
  status-background-warning: "Warning callout background"
typography:
  # Box `fontScale=` values. Resolve size / weight / line-height from fuselage-tokens.
  hero: "Marketing-scale hero only"
  h1: "Page titles"
  h2: "Major section headings"
  h3: "Card / panel titles"
  h4: "Sub-section headings"
  h5: "Dense headings"
  p1: "Default body"
  p1m: "Body, medium emphasis"
  p1b: "Body, bold"
  p2: "Dense body / table cells"
  c1: "Caption / helper / metadata"
  c2: "Caption, bold"
  micro: "Badges, smallest annotations"
spacing:
  # Box spacing props (p, m, pi, pb, mi, mb...). Named scale. Never literal px.
  x4: "tightest"
  x8: "compact"
  x12: "snug"
  x16: "default block padding"
  x24: "section gap"
  x32: "large section gap"
rounded:
  # `borderRadius`. Resolve px from the fuselage-tokens border-radius scale.
  small: "subtle (chips, small controls)"
  medium: "default (buttons, inputs)"
  large: "containers / cards"
  extra-large: "prominent containers"
  full: "pills / circular"
elevation:
  # Box `elevation=` values. Resolve shadow from the fuselage-tokens shadow scale.
  "0": "flat at rest (default)"
  "1": "low float (hover)"
  "2": "overlay (menu / tooltip / dialog)"
components:
  # Reference Fuselage components + prop patterns. No values.
  button-primary: "<Button primary>"
  button-secondary: "<Button secondary>"
  button-danger: "<Button danger> or <Button secondary danger>"
  button-success: "<Button success>"
  input: "<TextInput> inside <Field><FieldRow>"
  field: "<Field><FieldLabel/><FieldRow/><FieldError/></Field>"
  card: "<Tile> or <Box bg='surface-room' elevation='0' borderRadius='large'>"
  callout: "<Callout type='info|success|warning|danger'>"
---

# Design System: Fuselage

> **Source of truth.** Every value resolves from `@rocket.chat/fuselage-tokens` and the `@rocket.chat/fuselage` Box styling layer; this document never restates a hex, px, weight, or shadow. It also does not own the *names*: the current, authoritative token / component / hook / fontScale names are resolved live with `node skills/fuselage-craft/resolve.mjs <category>`, validated by the type gate. The names used below are illustrative of their role, not a catalog. To know a value, read the package; to know a name, run the resolver. Product code does the same: reference the name, let Fuselage resolve it. A literal value copied here or in product code, or a name that disagrees with the resolver, is a bug.

## 1. Overview

**Creative North Star: "The Control Surface"**

Fuselage is the instrument panel the rest of Rocket.Chat flies on. Every control is exact, legible, and quiet: a pilot reads an altimeter, they do not admire it. The system makes state unambiguous and action reliable, then disappears. Personality is borrowed from the surface it serves, never asserted by the surface itself.

Density is moderate and information-first, on a strict 4px grid expressed through the `x*` spacing scale. Surfaces are near-flat, separated by `stroke-extra-light` borders and tonal surface shifts (`surface-room` over `surface-tint`) rather than drop shadows. Color is overwhelmingly neutral, with a single decisive primary action (`<Button primary>`) per view. Semantic color carries meaning before decoration: `font-danger`/`status-background-danger` mean danger, `status-background-success` means success, `status-background-warning` means caution.

This system rejects the **generic Bootstrap / AdminLTE** look: stock cards, default cornflower blue, undifferentiated chrome. It equally rejects **ad hoc, one-off styling**: a component that only works in one place is a defect. Coherence across every consuming surface outranks any single screen looking impressive.

**Key Characteristics:**
- Neutral-dominant; one primary action per view; semantic color discipline
- 4px grid via the `x*` spacing scale, moderate density, information-first
- Flat by default (`elevation='0'`); borders and tonal layering over shadows
- Tight radii (`small` to `large`); `extra-large` and `full` for specific affordances
- Three first-class themes: light, high-contrast, dark, all resolved from tokens
- Inter for all UI text, Menlo for code (defined in fuselage-tokens)

## 2. Colors

A neutral foundation carrying a small set of semantic accents, each with a fixed meaning. Consumers select by **`color=` / `bg=` prop name**, never by value.

### Primary
- **Primary action**: expressed as `<Button primary>`. Its background, hover, and press states resolve inside Fuselage. Highlight and focus borders use `stroke-highlight`. Subtle highlight surfaces use the button/highlight tokens. Never hand-color a primary button.

### Secondary
- **`surface-featured`**: promoted or featured surfaces (e.g. emphasized rooms). Rare by design; not a general accent.

### Tertiary (semantic, fixed meaning)
- **`font-danger` / `status-background-danger`**: danger and destructive actions, plus error text and backgrounds.
- **`status-background-success`**: success and positive status.
- **`status-background-warning`**: warning and caution status.

### Neutral
- **`font-titles-labels`**: headings, labels, highest-emphasis text.
- **`font-default`**: body copy, default foreground.
- **`font-hint`**: secondary info, placeholders, helper text.
- **`font-annotation`**: de-emphasized metadata.
- **`font-disabled`**: disabled foreground.
- **`surface-room`**: default content surface. **`surface-tint`**: recessed app background. **`surface-hover`** / **`surface-selected`**: interaction states.
- **`stroke-extra-light` / `stroke-light` / `stroke-medium`**: structural separation, ascending weight.
- **`surface-overlay`**: modal and scrim backdrop.

### Named Rules
**The One Action Rule.** One `<Button primary>` per view. If two buttons are primary, one is wrong. Everything else is `secondary` until proven it must shout.

**The Semantic Color Rule.** Danger / success / warning tokens are never decorative. A `font-danger` element means danger; a `status-background-success` element means success. Using a semantic token for visual flavor is forbidden.

**The No-Literal-Color Rule.** Product code never contains a hex value. It references a `color=` / `bg=` token name, or it is wrong. The value lives in fuselage-tokens.

## 3. Typography

**Fonts** are defined in fuselage-tokens (Inter family for UI, Menlo family for code). Consumers never declare a font-family; they use `fontScale=` and let the token resolve everything.

**Character:** one neutral, highly legible sans carries the entire interface. Hierarchy comes from `fontScale`, never from swapping typefaces or hand-setting size.

### Hierarchy (select by `fontScale=` name)
- **`hero`**: marketing-scale hero text only. Rare in product surfaces.
- **`h1`** to **`h5`**: page title down to dense heading. Pick the step that fits the density.
- **`p1`** (with `p1m` / `p1b` variants): default reading text and emphasis. Cap measured text at 65 to 75ch.
- **`p2`**: dense UI text, table cells, secondary copy.
- **`c1`** / **`c2`**: helper text, metadata, labels.
- **`micro`**: badges and the smallest annotations only.

### Named Rules
**The fontScale Rule.** Text size and weight come from `fontScale=`. Product code never sets `font-size`, `font-weight`, or `line-height` literally. There is no third font family.

## 4. Elevation

**Flat by default, border-first.** Depth is a `stroke-extra-light` border plus a tonal surface shift (`surface-room` over `surface-tint`), not a shadow. Shadows resolve through `elevation=` and are reserved for genuine overlays.

### Elevation scale (select by `elevation=` name)
- **`elevation='0'`**: flat at rest. The default for cards, rows, sections. Separation is a border.
- **`elevation='1'`**: low float, e.g. hover lift.
- **`elevation='2'`**: floating overlays only (menus, tooltips, popovers, dialogs).

### Named Rules
**The Flat-At-Rest Rule.** If an element is part of the page (card, row, section), it gets a border, not a shadow. Shadow is the signal that something has detached from the page and overlays it. Express it with `elevation=`, never a literal `box-shadow`.

## 5. Components

Reach for the Fuselage component first, then `Box` with semantic props, then never raw DOM for styled output.

### Buttons
- **Primary:** `<Button primary>`. The one emphasized action per view.
- **Secondary:** `<Button secondary>`. Default for everything that is not the primary action.
- **Danger:** `<Button danger>` for destructive confirmation; `<Button secondary danger>` for lower-stakes destructive actions.
- **Success / Warning:** `<Button success>` / `<Button warning>` where semantically correct.
- **Sizes / states:** boolean props (`small`, `large`, `loading`, `disabled`, `icon`). Hover / focus / press states resolve inside the component. Never restyle a button's states by hand.

### Inputs / Fields
- **Always wrap in `Field`:** `<Field>` with `<FieldLabel>`, `<FieldRow>` (containing `<TextInput>` / `<Select>` / etc.), `<FieldError>`, `<FieldHint>`. This carries the a11y contract (label association, error wiring). Hand-rolling a label + input breaks it.
- **Focus / error / disabled:** handled by the controls and `FieldError`; do not hand-color.

### Cards / Containers
- **`<Tile>`**, or `<Box bg='surface-room' elevation='0' borderRadius='large' p='x16'>`. Separation is a border at `elevation='0'`, never a shadow at rest.

### Callouts / Status
- **`<Callout type='info|success|warning|danger'>`** for inline status. Carries the matching `status-background-*` token automatically.

### Navigation
- Use the Fuselage `Sidebar` / `NavBar` primitives. Default state quiet; hover takes `surface-hover`; active pairs the highlight token with weight or an indicator. Active is never conveyed by color alone.

### Theming (signature)
Every token resolves across **light**, **high-contrast**, and **dark** automatically. Components consume semantic token names, so a theme switch propagates everywhere with no consumer change. A component that hard-codes a value cannot theme, and is therefore wrong.

## 6. Do's and Don'ts

### Do:
- **Do** use one `<Button primary>` per view; everything else `secondary`. (The One Action Rule.)
- **Do** reference token names (`color='font-default'`, `bg='surface-tint'`); let Fuselage resolve the value. (The No-Literal-Color Rule.)
- **Do** size text with `fontScale=` and space with the `x*` scale on the 4px grid.
- **Do** separate surfaces with a `stroke-extra-light` border at `elevation='0'` before any shadow. (The Flat-At-Rest Rule.)
- **Do** reserve `elevation='2'` shadows for floating overlays: menus, tooltips, dialogs.
- **Do** use danger / success / warning tokens strictly semantically. (The Semantic Color Rule.)
- **Do** wrap inputs in `Field` for built-in a11y; target WCAG 2.2 AA.
- **Do** drive responsive behavior with fuselage-hooks (`useBreakpoints`, `usePrefersReducedMotion`), not literal media queries.

### Don't:
- **Don't** put a literal hex, px, weight, or `box-shadow` in product code. Ever. The value lives in fuselage-tokens.
- **Don't** produce the generic Bootstrap / AdminLTE look: stock cards, default cornflower blue, undifferentiated chrome.
- **Don't** introduce one-off, ad hoc component styling; if it only works in one place, it does not belong.
- **Don't** hand-roll a Button, Modal, input label, or error message that Fuselage already ships.
- **Don't** put more than one primary button in a single action group.
- **Don't** use a side-stripe `border-left` / `border-right` over 1px as a colored accent.
- **Don't** apply gradient text, `background-clip: text`, or decorative glassmorphism.
- **Don't** use danger / success / warning tokens decoratively; never for flavor.
- **Don't** add drop shadows to inline cards or rows; flat-at-rest.
- **Don't** convey state by color alone; pair it with weight, icon, or text.
