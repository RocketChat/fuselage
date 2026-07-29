---
'@rocket.chat/fuselage': minor
---

`SidebarV2Banner`: make the divider explicit, elevate the default surface, and make the layout more flexible.

- Remove the built-in `border-bottom`. The separator is no longer forced by the component; place a `SidebarV2Divider` explicitly when a divider is needed. This lets the banner sit flush (e.g. as a bottom-pinned player) or with a divider on either side.
- Change the default variant background from `surface(sidebar)` to `surface(tint)`, so the banner is visually distinct from the sidebar instead of blending into it (matching the legacy `Sidebar` banner, which used an elevated surface).
- The content column now grows to fill the available width, so children (e.g. media controls) can span the full banner width.
- Render the addon/close column only when an `addon` or `onClose` is provided, so the content is full-width when there is no close button.
- Add `closePlacement?: 'center' | 'top'` (default `'center'`) to align the close button with the banner header instead of centering it vertically — useful when the banner has taller content below the title.
