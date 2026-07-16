# Applying the Box build-time compiler in Rocket.Chat

How to run this plugin against the Rocket.Chat client (`apps/meteor`).

## TL;DR

Rocket.Chat's client is compiled by **Meteor's `babel-compiler` (Babel, not
SWC — SWC is dormant under `modern: true`)**, and it **merges
`apps/meteor/.babelrc`'s `plugins` array** into the transform for every app
file. So the plugin drops into that array. No webpack/vite/loader exists for
the client, so use `inject` mode (runtime `attachRules`) — it matches the
CSS-in-JS injection Fuselage already does; there is no static-CSS-asset path in
Meteor to target.

## Prerequisite: this is a coordinated change, not just a plugin

The render-CPU win needs **two halves**:

1. **Build half** — this plugin, added to `apps/meteor/.babelrc`. Rewrites
   `<Box>` at build time: precomputes atomic classes, keeps the props, adds a
   `data-rcx-atomic` marker.
2. **Runtime half** — a Fuselage build whose `useStylingProps` honors that
   marker and skips restyling the compiled props (this branch,
   `feat/box-atomic-styling`).

Rocket.Chat ships the **published** Fuselage, which does **not** have the
runtime half. If you add only the build plugin:

- correctness is fine (props are kept; the published runtime restyles them), but
- there is **no CPU win** (the marker is ignored, so the runtime does the work
  anyway) and you get a redundant class per Box.

So step 1 is pointing Rocket.Chat at a Fuselage that includes the runtime half.

## Step 1 — Rocket.Chat must use the marker-aware Fuselage

Point `@rocket.chat/fuselage` at this branch (any one of):

- `yarn link` a local `feat/box-atomic-styling` Fuselage build, or
- a canary/prerelease published from this branch, or
- a `resolutions` override to a git/tarball build of this branch.

Verify the installed Fuselage `dist` contains the marker check
(`data-rcx-atomic` in `useStylingProps`).

## Step 2 — Get the plugin + resolver into the repo

The plugin needs its resolver snapshot. **Regenerate the resolver against the
exact Fuselage version Rocket.Chat installs** (token maps must match, or classes
drift):

```sh
# from the fuselage checkout that matches RC's installed version
node -e "require('esbuild').build({entryPoints:['poc/box-compiler/resolver.entry.ts'],\
outfile:'poc/box-compiler/resolver.generated.cjs',bundle:true,platform:'node',\
format:'cjs',external:['@rocket.chat/css-in-js']})"
```

Copy `plugin.cjs` + `resolver.generated.cjs` into the app, e.g.
`apps/meteor/.babel/box-atomic/`. (Longer term: export both from the Fuselage
package so RC consumes them directly and they stay version-locked.)

`@rocket.chat/css-in-js` (what the injected `attachRules` import resolves to) is
already a transitive dep of Fuselage in `apps/meteor/node_modules`, so the
injected import resolves with no extra install.

## Step 3 — Wire it into `apps/meteor/.babelrc`

Scope it to client code with a Babel `overrides` block so server files are never
touched (they have no `<Box>` anyway, but this keeps the blast radius small):

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    ["@babel/preset-typescript", { "allowDeclareFields": true }]
  ],
  "overrides": [
    {
      "test": ["./client/**/*.tsx", "./ee/client/**/*.tsx", "./imports/**/*.tsx"],
      "plugins": [["./.babel/box-atomic/plugin.cjs", { "inject": true }]]
    }
  ],
  "env": {
    "coverage": { "plugins": [["istanbul", { "exclude": ["**/*.spec.js", "**/*.test.js"] }]] }
  }
}
```

- `inject: true` → each transformed module gets a top-of-file
  `attachRules("<its rules>")`; the CSS lands at module load using Fuselage's
  own `<style id="rcx-styles">`. `attachRules` dedupes/ref-counts, so shared
  declarations become one rule.
- `keepProps` defaults to **true** (safe): props stay on the element for
  runtime introspection (`cloneElement`, `child.props.x`, spreads); the runtime
  skips them via the marker. Do **not** set `keepProps:false` app-wide — it is
  unsafe wherever code reads a Box's props.
- Plugins run before presets, so the plugin sees JSX before `preset-react`
  turns it into `_jsx(...)`. Good.

Meteor caches Babel output aggressively — clear `.meteor/local/` (or bump a
cache key) after changing `.babelrc` so files recompile.

## Step 4 — Verify

Run the client, inspect a `Box` in DevTools:

- element has semantic atomic classes (`rcx-display-flex-…`, `rcx-padding-…`)
  **and** a `data-rcx-atomic="…"` attribute,
- `document.getElementById('rcx-styles')` contains the injected rules,
- nothing renders empty (children/introspection intact).

## Measuring the win in Rocket.Chat

- **Stylesheet size**: count `rcx-css-*` combination rules before vs `rcx-*`
  atomic rules after on a heavy screen (admin, room).
- **Render CPU**: React Profiler commit durations on a Box-heavy view, or the
  bench story approach adapted to a real route.
- Build a **production** bundle for real numbers (dev Babel + StrictMode inflate).

## Scope / limits

- Only `<Box>` by local name, only literal props. `<Box>` aliased on import,
  spreads, and dynamic props fall through to the runtime (correct, just not
  precompiled).
- Meteor has no loader pipeline → the static-CSS-asset variant (webpack/vite,
  via the `sheet` option) does not apply here; `inject` is the right mode.
- Resolver is a snapshot — regenerate on every Fuselage bump.
