---
'@rocket.chat/fuselage': minor
---

feat(fuselage): Add `SplitButton` and remove the `joined` and `ghostPosition` props from `ButtonGroup`

`ButtonGroup` is back to being a layout-only container. The split-button look (fused segments, translucent background, ghost menu segment) now lives in `SplitButton`. The `--rcx-button-group-joined-background-color` theme variable was renamed to `--rcx-split-button-background-color`.
