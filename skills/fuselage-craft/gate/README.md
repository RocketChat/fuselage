# fuselage-craft gate

Enforcement layer for the **fuselage-craft** skill. Ensures downstream products use
`@rocket.chat/fuselage` as the single source of truth and never copy Fuselage values
(hex colors, px dimensions, shadows) into product code.

## Two gates, one command

### Lint gate — literal-value bans

Five ESLint rules that ban raw design values from product code. **Zero Fuselage values are
baked into the rules.** They ban literal patterns generically (any hex, any px in a style
context) — they do not know or check specific Fuselage token values. Fuselage-specific API
validation is the type gate's job.

| Rule | Severity | What it flags |
|---|---|---|
| `no-raw-color` | error | Hex/rgb/rgba/hsl literals in JSX color attrs, `style={{}}`, `css`/`styled` templates |
| `no-literal-dimension` | error | Literal `px`/`rem` values for spacing/sizing props in `style={{}}` and `css`/`styled` |
| `no-literal-shadow` | error | Literal `boxShadow`/`box-shadow` values in `style={{}}` and `css`/`styled` |
| `require-field-wrapper` | error | Input controls (`<input>`, `<TextInput>`, etc.) not inside a `<Field>` ancestor |
| `prefer-box` | warn | Raw DOM elements (`div`, `span`, etc.) with inline `style={{}}` objects |

### Type gate — validate against installed Fuselage types

Runs the consumer's own `tsc --noEmit`. TypeScript validates that every `color=`,
`fontScale=`, `elevation=`, etc. prop passed to Fuselage components matches the installed
package's type declarations. This catches invalid token names, wrong prop types, and API
mismatches without the gate needing to know any token values.

## Requirements

The gate needs `eslint` (9+) and `typescript-eslint`. It resolves them from the host repo
when present; otherwise install the gate's own deps once:

```sh
cd skills/fuselage-craft/gate && npm install
```

`node_modules` here is gitignored. The type gate also needs the consumer's `typescript`.

## Usage

### Run the full gate

```sh
# from the consumer repo root (default targets src/**/*.{ts,tsx})
node skills/fuselage-craft/gate/run-gate.mjs

# with explicit globs
node skills/fuselage-craft/gate/run-gate.mjs 'src/**/*.tsx' 'app/**/*.tsx'
```

The gate exits nonzero if lint errors > 0 **or** `tsc` exits nonzero. Warnings (prefer-box)
do not fail the gate.

### Lint only

```sh
npx eslint --config skills/fuselage-craft/gate/eslint.config.mjs src/
```

### Type check only

```sh
node skills/fuselage-craft/gate/typecheck.mjs
node skills/fuselage-craft/gate/typecheck.mjs -p tsconfig.app.json
```

### Run rule tests

```sh
# from repo root
node skills/fuselage-craft/gate/tests/run-tests.mjs

# or from gate/ directory
cd skills/fuselage-craft/gate && npm test
```

## Rule options

### `require-field-wrapper`

Accepts a config object:

```js
// in your eslint.config.mjs:
'fuselage-craft-gate/require-field-wrapper': ['error', {
  controls: ['TextInput', 'Select', 'MyCustomInput'],  // replaces default list
  fieldComponent: 'FormField',  // default: 'Field'
}]
```

The default `controls` list is **raw HTML only** (`input`, `select`, `textarea`) so the rule
bakes in zero Fuselage names. `run-gate.mjs` augments it at runtime with the live list of
`@rocket.chat/fuselage-forms` controls, resolved by `resolve.mjs` from the installed package.
Override `controls` only when running the rule standalone or with a different wrapper.

## Design constraints

- **Zero hardcoded Fuselage values** in any rule. The rules ban literal patterns; correctness
  of token names is enforced by TypeScript types from the installed package.
- **Component name lists** (e.g. which components count as inputs) are rule options with
  sensible defaults — configuration, not value replication.
- Allowed exceptions: `0`, `auto`, `100%`, `var(--...)`, `calc(...)` for dimensions;
  `none`/`unset`/`inherit` for shadows.

## Graduation note

These rules can later move into a published `packages/eslint-plugin-fuselage`; kept in
the skill for now so the gate ships with the skill and stays co-located with the
fuselage-craft design guidance.
