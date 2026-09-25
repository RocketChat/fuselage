---
'@rocket.chat/fuselage-tokens': minor
'@rocket.chat/fuselage': minor
---

feat(theme): Add the `dark-alpha` theme — a translucency-based dark palette whose only opaque color is `surface-tint` (the anchor painted by the host app); every other surface is an alpha veil composited over it, so changing the anchor re-tints the whole UI. Registered in `PaletteStyleTag` as `theme='dark-alpha'`.
