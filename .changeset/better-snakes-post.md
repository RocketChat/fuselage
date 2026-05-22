---
'@rocket.chat/fuselage': patch
---

Fixed `Select` inflating ancestor scrollHeight inside non-positioned containers (collapsed `Accordion`, `Modal`, `Field`, etc.). Regression from 0.77.0 (#1939).
