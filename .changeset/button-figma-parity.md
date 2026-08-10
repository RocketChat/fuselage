---
'@rocket.chat/fuselage': minor
---

Align `Button` with the design system spec: the inline/block insets are now
measured as totals (border included) rather than assuming a 2px border, medium
buttons use a 14px inline inset, a leading icon tightens the inset on the icon
side, the 40px and 48px sizes pair with a 20px icon, and `external` links get a
`new-window` leading icon when no icon is supplied.
