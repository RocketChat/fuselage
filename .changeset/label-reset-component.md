---
'@rocket.chat/fuselage': minor
---

feat(fuselage): Add `LabelReset` and `FieldLabelReset` components

Introduces `LabelReset`, a label affordance that renders a fixed 20px, neutral `IconButton` with the `undo` icon to reset a field to its default value, plus `FieldLabelReset`, the `Field`-aware wrapper.

Unlike `LabelInfo`, the reset is composed as a sibling of the label (not nested inside it), so hovering or clicking it is never forwarded to the field's control. It's placed in the field row next to the control (or alone at the right for stacked inputs), and the `ref` is forwarded to the underlying button so consumers can move focus to it or anchor a tooltip.

This is intended to standardize the reset affordance across the design system and to eventually replace Rocket.Chat core's custom `ResetSettingButton`. That current button is a 28px `danger` (red) `IconButton`; adopting `FieldLabelReset` is a deliberate design change — the reset becomes **20px and neutral**. The size is fixed (not overridable) to enforce the standard; the variant defaults to neutral but remains overridable.
