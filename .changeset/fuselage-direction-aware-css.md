---
'@rocket.chat/fuselage': patch
---

fix(fuselage): Let direction-aware CSS reach the browser

`postcss-logical` was compiling every logical property in the sources down to hardcoded left-to-right physical ones, and `postcss-dir-pseudo-class` was replacing `:dir(rtl)` with the weaker `[dir="rtl"]` ancestor selector, which only matches under an explicit `dir` attribute. Both now ship as authored, so `margin-inline-start`, `inset-inline-end` and the rest flip in right-to-left documents instead of staying pinned to the left, and `:dir()` matches an element's own directionality — including `dir="auto"` resolved from its content. Left-to-right rendering is unchanged.
