---
'@rocket.chat/fuselage': patch
---

fix(fuselage): Stop a hidden `ItemActions` with `reveal='hover'` from leaving a gap at the end of `Item`, `ItemRow` and `ItemGroupHeader`, so trailing content lines up with rows without actions and no longer shifts when the actions appear
