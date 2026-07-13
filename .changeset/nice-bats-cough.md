---
'@rocket.chat/fuselage': patch
---

fix: `NavBarSection` dropping its children under React 19 (use React's `isValidElement` instead of `react-is`'s `isElement`)
