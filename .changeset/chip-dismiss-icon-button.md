---
'@rocket.chat/fuselage': minor
---

feat(fuselage): Add `onDismiss` and `size` props to `Chip` rendering a dedicated dismiss `IconButton`

When `onDismiss` is provided, the chip renders a non-interactive root and a dedicated, accessible dismiss `IconButton` (with `dismissLabel` as its accessible name and tooltip) instead of using the whole chip as the dismiss trigger. A `size` prop selects the chip's dimensions: `medium` (default, 28px chip and dismiss button, 20px avatar) or `small` (20px chip and dismiss button, 16px avatar). An `icon` prop customizes the trailing `IconButton` icon (default `'cross'`) so the chip can express other actions (e.g. `'chevron-down'` for a chip that opens a menu). Whole-chip dismiss via `onClick`/`onMouseDown` (and `renderDismissSymbol`) is now deprecated. The chip label now uses the `font-on-secondary` color token (fixing a WCAG AA contrast failure) and the `p2m` font scale. Internal consumers (`AutoComplete`, `MultiSelect`, `PaginatedMultiSelect`) were migrated to `onDismiss`.
