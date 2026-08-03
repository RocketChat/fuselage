# @rocket.chat/figma-sync

Generates Fuselage's Figma component library from Storybook. Replaces
story.to.design with something that understands our token architecture.

```
CI                                          apply (human-triggered)
──                                          ──────────────────────
build-storybook                             read figma-spec.json
  ↓                                           ↓
extract.mjs (Playwright)                    resolve each binding to a variable
  measures every variant                      ↓
  reads the var() chain                     create/update the variant set
  ↓
figma-spec.json  ──── published ─────────→
```

All the logic lives in the extractor. The apply step makes no design decisions —
every value it writes comes from the spec. **If output looks wrong, fix the
extractor, not the apply step.**

## Who can apply the spec

Two ways, and the choice decides whether `plugin/` is worth keeping.

|                         | Triggered by                  | Needs Figma open | Maintains a plugin |
| ----------------------- | ----------------------------- | ---------------- | ------------------ |
| Figma MCP (`use_figma`) | a dev in Claude Code / Cursor | no               | no                 |
| `plugin/`               | anyone, including designers   | yes              | yes                |

The remote Figma MCP server writes to the canvas server-side, with no desktop app
and no open editor — the 101 variants currently in the file were applied that way,
not through the plugin. So if only engineers ever trigger a sync, the plugin is
redundant.

**Neither can run in CI**, and the reason is authentication, not headlessness:

- The MCP server is OAuth-only. Figma support, verbatim: "Figma's MCP server does
  not support authentication using personal access tokens and this cannot be
  enabled." It also enforces a client allowlist — only clients in the Figma MCP
  Catalog (VS Code, Cursor, Claude Code…) may connect, which a GitHub Action is not.
- The REST API cannot create or modify nodes at all. It covers file JSON, comments,
  variables, dev resources, webhooks and analytics — not canvas content.

So CI generates and publishes the spec; a human applies it. The one thing that
_could_ be fully automated is the token collections, via `POST /v1/files/:key/variables`
with a plan access token (org-scoped, CI-oriented) — but that endpoint needs an
Enterprise plan.

## Why not just read computed styles

`getComputedStyle` resolves `var()` away, leaving only a hex. An extractor that
sees `#156FF5` has to guess which variable to bind, and guesses wrong whenever
two tokens share a value — Fuselage has 11 such collisions.

The CSSOM still holds the _authored_ declaration, and Fuselage stacks three
layers:

```css
var(--rcx-button-primary-background-color,             /* override hook, never declared */
  var(--rcx-color-button-background-primary-default,   /* component token, DECLARED     */
    var(--rcx-color-blue-500, #156FF5)))               /* primitive, never declared     */
```

Walking that chain to the first **declared** custom property yields the binding
the code actually means. That is the whole trick, and it is why this beats a
generic DOM-to-Figma converter for a design system.

Two consequences worth knowing:

- Primitives are compile-time only. They never exist as runtime custom
  properties, so they are never a binding target — only a fallback value.
- Not everything is tokenized. Button's `warning`, `secondary-warning` and
  `secondary-success` variants have no `button-*` custom property, and
  `border-width` / `border-radius` have none anywhere. Those fall back to
  matching a variable by value, which the extractor reports as a warning.

## Usage

Against a running Storybook:

```bash
yarn workspace @rocket.chat/figma-sync extract -- --url http://localhost:6006
```

Against a built one (what CI does):

```bash
node src/extract.mjs --static ../../packages/fuselage/storybook-static
```

Flags: `--url`, `--static`, `--out`, `--config`, `--only <ComponentName>`.

First run needs the browser: `node node_modules/playwright/cli.js install chromium`.

## Adding a component

First see which args are candidate axes:

```bash
node src/probe-axes.mjs '["data-display-tag--default"]' http://localhost:6006
```

Then add an entry to `components.json`:

```json
{
  "name": "Tag",
  "storyId": "data-display-tag--default",
  "axes": ["variant", "medium", "large"],
  "args": { "children": "Tag" },
  "rootSelector": ".rcx-tag"
}
```

- `axes` — which args become Figma variant axes. Values come from the story's
  `argTypes`: a `select` contributes its options, a `boolean` contributes
  `[false, true]`. Only list args that change appearance (skip `is`, `href`).
- `rootSelector` — **required.** The story root is a css-in-js `Box` wrapper, not
  the component; without this you measure a transparent div. Take the root class
  from the component's `.styles.scss`.
- `axisValues` — override the values for an axis. `null` means "omit the arg",
  which is how Fuselage spells an unnamed default (Button at 40px has no size
  class). Order the values the way the grid should read: Button uses
  `["small", "medium", null, "large"]` because the unnamed default is 40px, which
  sits between `medium` (32) and `large` (48). Put `null` first and the variant
  grid stops being monotonic, which looks exactly like a missing size.
- `axisLabels` — rename a value in the Figma variant name, e.g. `null` → `default`.
- `oneOf` — collapses mutually exclusive boolean args into one axis. Fuselage
  spells some variants and sizes as separate booleans (`Tag` has `medium` and
  `large`; `FramedIcon` has `info`/`success`/`warning`/`danger`/`neutral`), and
  crossing those independently generates nonsense combinations like
  `medium=true, large=true`. `{"size": {"args": ["medium","large"], "noneLabel": "small"}}`
  produces exactly three variants and sets at most one arg true.
- `fluidWidth` — opts a component into stretch detection. It is applied **per
  variant**, not per component: the measured width only counts as fluid when it
  matches the story canvas. A vertical `Divider` is 1px wide while a horizontal
  one fills, and a per-component flag would stretch both.

## Gotchas the hard way

Three bugs that produced plausible-looking but wrong output. All three are fixed;
they are listed because each one passed a naive audit.

- **Paints must carry the measured colour AND the alpha.**
  `setBoundVariableForPaint` does not touch the literal colour, and Figma renders
  that literal whenever it fails to resolve the alias. Seeding black rendered
  every Button solid black with a perfectly correct binding in the panel. Dropping
  the alpha turned `border: 1px solid transparent` into a black outline on every
  Tag.
- **Variant property names are capitalised** (`Variant=primary, Size=default`).
  Emit them lower-case and a re-sync creates a duplicate set instead of updating.
- **Never fold the current node size into the new size.** `Math.max(target,
comp.width)` makes a re-sync depend on prior state, so a variant can never
  shrink back down.

Keep the matrix under ~30 variants where you can.

**Then read the warnings.** Two of them mean "do not ship this component":

- _ALL n variants measured identically_ — the axes have no effect on
  `rootSelector`, so the differentiator is in a child, a pseudo-element, or an
  SVG fill. Root-only measurement cannot see it.
- _only k distinct renderings across n variants_ — same problem, partially.

`components.json` has a `skipped` array recording every component that failed
this way and why. Read it before re-adding one.

## The plugin

`plugin/` is a private org plugin: Figma → Plugins → Development → Import from
manifest, then publish privately.

It updates variant sets **in place**, matching by variant name, so instances in
other files keep working. Variant names present in Figma but absent from the spec
are reported as orphaned and left alone — it never deletes.

Token collections must already exist in the target file; the plugin binds to
them, it does not create them.

## Scope

Phase A ships 11 components / 101 variants: Button, Tag, Badge, Callout, Banner,
Chip, Label, FramedIcon, Skeleton, Divider, Tooltip.

Eleven more were tried and rejected — see `skipped` in `components.json`. They
cluster into three fixable gaps, in rough order of value:

1. **Child-node measurement.** ProgressBar's variant colour is on the child bar;
   CheckBox / RadioButton / ToggleSwitch put their state on a child `<i>`;
   CodeSnippet's `buttonDisabled` affects a child button. The extractor measures
   one element, so all of these read as identical variants.
2. **Shadow extraction.** Tile's `elevation` maps to `box-shadow`, which is not
   captured — its 5 variants measure as 2. Fuselage's `shadow-elevation-*` tokens
   are already published in Figma, so this is mostly plumbing.
3. **SVG / vectors.** StatusBullet is an SVG whose colour is a `path` fill.
   Icons live here too.

Composites (Table, Modal, Contextualbar, Sidebar) are unlikely to ever be fully
automatic — author those in Figma by hand.

Also note `Avatar` is skipped for a different reason: its `size` arg is not
applied by the story at all, so it is a Storybook bug rather than an extractor
limitation.
