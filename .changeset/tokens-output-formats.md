---
'@rocket.chat/fuselage-tokens': minor
'@rocket.chat/fuselage': minor
'@rocket.chat/fuselage-hooks': patch
'@rocket.chat/layout': patch
'@rocket.chat/logo': patch
'@rocket.chat/onboarding-ui': patch
---

feat(fuselage-tokens)!: Rework the token build and its output formats

The legacy `build-design-tokens` tool is gone — Style Dictionary is now the only
token build, and every artifact is generated from `src/` into `dist/`. Sources
were reorganized (`src/colors/*.json`, `src/breakpoints.json`,
`src/typography.json`, `src/border.json`) and tokens now carry explicit types.

**New tokens.** A `border` category exposes `radius` (`none`, `default`,
`small`, `medium`, `large`, `extra-large`, `full`) and `width` (`none`,
`default`, `medium`, `large`). `@rocket.chat/fuselage` reads them, so
`borderRadius` and `borderWidth` styling props now accept those keywords;
`borderRadius` returns `rem` rather than `px`.

**Every artifact now lives under `dist/`.** The root-level `colors.*`,
`breakpoints.*` and `typography.*` entry points are gone; import from `dist/`
instead. Only `.json` and `.scss` are emitted — the `.js` and `.mjs` bundles are
no longer built or published.

```diff
-const colors = require('@rocket.chat/fuselage-tokens/colors.js');
+const colors = require('@rocket.chat/fuselage-tokens/dist/colors.json');
```

**JSON shapes changed.**

- `breakpoints.json` is an object keyed by breakpoint name instead of an array,
  and the redundant `name` field is gone.
- `typography.json` renames `fontFamilies` to `fontFamily` and `fontScales` to
  `fontScale`.
- The semantic categories (`badge`, `button`, `font`, `shadow`, `status`,
  `statusBullet`, `stroke`, `surface`) no longer repeat the category as a
  top-level key: `badge.json` is now `{ light, high-contrast, dark }` rather
  than `{ badge: { light, … } }`.

**SCSS shapes changed.** Each category exports a single flat map with quoted
kebab-case keys, and lengths are converted to `rem`:

```diff
-@use '~@rocket.chat/fuselage-tokens/breakpoints.scss';
-$w: map.get(map.get(breakpoints.$breakpoints, md), min-viewport-width);
+@use '~@rocket.chat/fuselage-tokens/dist/breakpoints.scss';
+$w: map.get(breakpoints.$breakpoints, 'md-min-viewport-width');
```

`typography.scss` replaces `$font-families` and `$font-scales` with a single
`$typography` map.

**Color values changed.** Hex values are now lowercase, and `n300` is `#ebecef`
rather than `#eeeff1` — the SCSS palette already used that value, so
`neutral-300` had been inconsistent between `Theme.ts` and the stylesheets. It
now agrees.
