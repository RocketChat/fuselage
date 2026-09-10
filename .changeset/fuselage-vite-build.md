---
'@rocket.chat/fuselage': patch
---

fix(fuselage): Build the package with Vite instead of webpack

The bundler changed and the published bundles changed with it.
`dist/fuselage.production.js` drops from 216KB to 126KB (44KB to 32KB
gzipped) and `dist/fuselage.development.js` from 613KB to 271KB, because
Rollup scope-hoists the modules rather than wrapping each one in webpack's
runtime. The exported API is identical: the same 282 names with the same
types, and components render the same markup.

`dist/fuselage.css` is unchanged apart from the font reference, now
`url(./fonts/InterVariable.woff2)` instead of `url(fonts/InterVariable.woff2)`
— both resolve relative to the stylesheet.

One artifact is lost: `dist/fuselage.development.css.map` is no longer
published. Vite emits no source map for extracted CSS in a build, so the
development stylesheet no longer has one.
