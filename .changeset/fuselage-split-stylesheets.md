---
'@rocket.chat/fuselage': patch
---

fix(fuselage): Publish separate development and production stylesheets

Both webpack modes emitted `dist/fuselage.css`, so the production stylesheet overwrote the development one — but with source maps off in production, nothing overwrote `dist/fuselage.css.map`, leaving a map that described a file no longer there. `dist/fuselage.css` is unchanged and remains the minified stylesheet to import; the development build now emits `dist/fuselage.development.css` alongside a source map that matches it.
