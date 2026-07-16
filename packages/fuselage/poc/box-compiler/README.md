# PoC — build-time atomic extraction for `<Box>`

Proof of concept for the "Tamagui-style" compiler step discussed alongside the
runtime atomic path. A Babel plugin rewrites `<Box>` at build time so that
**static** styling props never reach the runtime.

## What it does

For every `<Box>` whose styling props are static literals:

- resolves them to atomic class names **at build time**,
- strips the props from the JSX,
- adds/merges a plain `className`,
- collects the matching CSS rules into an out-of-band sheet (deduped).

Non-literal props (expressions) are left untouched and handled by the runtime
atomic path (`useAtomicStyle`). A `Box` with only dynamic props is unchanged.

```jsx
// in
<Box p="x8" display="flex" bg="tint" className={cls}>hi</Box>

// out
<Box className={"rcx-padding-… rcx-display-flex-… rcx-bg-… " + cls}>hi</Box>
// + CSS sheet: .rcx-padding-…{padding:0.5rem!important} .rcx-display-flex-…{…} …
```

## Zero token drift

Resolution is injected via plugin options, so the plugin reuses Fuselage's real
runtime resolver (`extractAtomicStylingProps` + `buildAtomicClassName`). The
classes and rules it emits are byte-identical to the runtime atomic path — the
compiler just moves the work from render time to build time.

## Run it

```sh
# transform demo (fake resolver, illustration only)
node poc/box-compiler/demo.cjs

# real resolver + assertions
yarn jest src/utilities/boxCompiler.poc.spec.ts
```

## Scope / not done yet

- Only `<Box>` by local name, only literal props. `is` flattening, spreads,
  ternaries, imported constants → left to runtime (conservative bail-out).
- No webpack/vite wiring; the sheet is collected in-memory to prove the model.
- Next step if adopted: emit the sheet to a `.css` asset and register the
  plugin in the build.
