---
'@rocket.chat/fuselage-toastbar': patch
---

Enable compatibility with React 18

React 18's Strict Mode fires effects twice, which breaks Fuselage's toast bar portal.
