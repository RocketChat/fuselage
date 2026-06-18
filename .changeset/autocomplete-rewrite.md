---
'@rocket.chat/fuselage': patch
---

Refactor `AutoComplete` to derive selection from the controlled `value` instead of duplicating it in local state, fixing selection drift. Keyboard navigation moved to a dedicated, `event.key`-based hook. No visual or API changes.
