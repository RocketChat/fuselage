---
'@rocket.chat/fuselage': minor
---

`SidebarV2Banner`: make the divider explicit and give the default variant an elevated surface.

- Remove the built-in `border-bottom`. The separator is no longer forced by the component; place a `SidebarV2Divider` explicitly when a divider is needed. This lets the banner sit flush (e.g. as a bottom-pinned player) or with a divider on either side.
- Change the default variant background from `surface(sidebar)` to `surface(tint)`, so the banner is visually distinct from the sidebar instead of blending into it (matching the legacy `Sidebar` banner, which used an elevated surface).
