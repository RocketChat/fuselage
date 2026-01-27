---
'@rocket.chat/fuselage': patch
---

fix(fuselage): ButtonGroup margin spacing in RTL mode

Fixed ButtonGroup RTL spacing by adding explicit `[dir='rtl']` overrides for first and last child margins. The postcss-logical plugin was converting CSS logical properties to physical properties (margin-left/right) without generating proper RTL fallback rules, causing incorrect spacing in RTL layouts.
