---
'@rocket.chat/fuselage': minor
---

feat(fuselage): add `pill` prop to `Tag`

Adds a `pill` boolean prop that renders a fully rounded Tag (`rcx-tag--pill`), matching the `Radius=Pill` variant in the design system. Use it for interactive tags such as filters. The modifier sets `--rcx-tag-border-radius` to the `full` border radius token, so padding, sizes and colors are unchanged. Tags without `pill` render as before.
