---
'@rocket.chat/fuselage': patch
---

fix(fuselage): Ghost segments keep the button variant colors

`SplitButton` takes `warning`, `success` and `primary` props alongside `danger`, so its ghost menu trigger keeps the action's variant identity, and the split button translucency goes from 60% to 70%.
