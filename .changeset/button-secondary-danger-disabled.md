---
'@rocket.chat/fuselage': patch
---

Fix the disabled `secondary-danger` Button rendering the filled danger
background. `getPalette` mapped
`button-background-secondary-danger-disabled` to
`button.backgroundDangerDisabled` (`#FFC1C9`) instead of
`button.backgroundSecondaryDangerDisabled` (`#EBECEF`), so a disabled secondary
danger button appeared as a pink filled button rather than a greyed-out neutral
one.
