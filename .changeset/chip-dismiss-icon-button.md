---
'@rocket.chat/fuselage': minor
---

Chip: add `onDismiss` prop rendering a dedicated dismiss `IconButton` instead of using the whole chip as the dismiss trigger. Whole-chip dismiss via `onClick`/`onMouseDown` (and `renderDismissSymbol`) is now deprecated in favor of `onDismiss`.
