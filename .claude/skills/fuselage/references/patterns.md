# Fuselage patterns

Hand-maintained companion to the generated `catalog.md` / `components.md`.
Everything here is verified against `packages/fuselage/src`.

## Box: the primitive everything is built on

`Box` renders any element and accepts styling props plus every DOM attribute.

```tsx
<Box
  is='section'
  display='flex'
  alignItems='center'
  paddingInline='x16'
  backgroundColor='tint'
  color='default'
>
  …
</Box>
```

- Styling props are named after the CSS properties themselves, in camelCase:
  `backgroundColor`, `padding`, `paddingInline`, `marginBlockStart`,
  `borderInlineEndColor`, `fontScale`-backed `fontSize`. **There are no
  shorthands** — `bg`, `p`, `mb`, `pi` are not props and are silently dropped.
  (`AGENTS.md` mentions `bg`; the source is `backgroundColor`.)
- `is` picks the tag or another component (`is='a'`, `is={Button}`). Default `div`.
- `className` accepts a string, a `css` function from `@rocket.chat/css-in-js`,
  or an array mixing both.
- `elevation` (`'0' | '1' | '2' | '1nb' | '2nb'`), `invisible` and
  `withRichContent` are Box's own behavioral props.
- Layout helpers exist as components too: `Flex`, `Grid`, `Margins`, `Scrollable`.
- The full prop list is `packages/fuselage/src/components/Box/stylingProps.ts`.

Use `Box` to build components and to lay out application screens. Do **not** use
it to restyle an existing Fuselage component — if the visual you need is not a
prop, the component needs a variant, not an override.

## Color tokens

`backgroundColor` resolves against surface tokens, `color` against font tokens
and `borderColor` against stroke tokens. Pass the short name — the prefix is
added for you, and an unknown value falls through to a deprecated path that warns
in development.

| Prop              | Valid values                                                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `backgroundColor` | `light`, `tint`, `room`, `neutral`, `disabled`, `hover`, `selected`, `dark`, `featured`, `featured-hover`, `sidebar`, `overlay`, `transparent` |
| `color`           | `white`, `disabled`, `annotation`, `hint`, `secondary-info`, `default`, `titles-labels`, `info`, `danger`, `pure-black`, `pure-white`          |
| `borderColor`     | `extra-light`, `light`, `medium`, `dark`, `extra-dark`, `extra-light-highlight`, `highlight`, `extra-light-error`, `error`                     |

In Fuselage's own SCSS, use the token functions — they emit the CSS variable with
a static fallback, which is what makes theming work:

```scss
@use '../../styles/colors.scss';

.rcx-my-component {
  color: colors.font(default);
  background-color: colors.surface(tint);
  border-color: colors.stroke(light);
}
```

Raw hex values, `rgb()` literals and Tailwind-style utility strings are all
wrong here. The full token maps live in `packages/fuselage/src/styles/colors.scss`
and `packages/fuselage-tokens/src/colors/`.

## Theming and dark mode

`PaletteStyleTag` writes the palette as CSS variables into a portal-mounted
style tag. Mount exactly one per application.

```tsx
<PaletteStyleTag theme='dark' /> // 'light' | 'dark' | 'high-contrast'
```

It also accepts `tagId`, `prefix`, `selector` and a raw `palette` string for a
custom palette. `Palette` and `Var` (exported from the package root) expose the
same tokens to JavaScript.

## Sizes

Length props take `x`-prefixed size tokens: `x20` means 20px, emitted as
`1.25rem`. Prefix with `neg-` for negative values (`marginBlockStart='neg-x8'`).
`size`/`width`/`height` also accept `none`, `full`, `sw` and `sh`. A raw number
is treated as pixels and bypasses the scale — use a token instead.

`Icon` maps `size` onto font size, so icons scale with the type scale; `x16`,
`x20` and `x28` cover almost every case.

```tsx
<Icon name='bell' size='x20' />
```

Icon names are typed: `name` takes the `Keys` union from `@rocket.chat/icons`,
so a typo is a type error rather than a missing glyph.

## Composition families

These components are used as a set. Grep `components.md` for the full member
list before composing one.

### Field — every form row

```tsx
<Field>
  <FieldLabel required htmlFor='name'>
    Name
    <FieldLabelInfo id='name-info' title='Shown to other users' />
  </FieldLabel>
  <FieldDescription>Context that clarifies the label</FieldDescription>
  <FieldRow>
    <TextInput id='name' aria-describedby='name-info' />
  </FieldRow>
  <FieldError>Invalid email address</FieldError>
  <FieldHint>Explains a technical term</FieldHint>
</Field>
```

Always wire `htmlFor`/`id` and point `aria-describedby` at the hint or info id.
Drive validation state from `react-hook-form`, per `AGENTS.md`.

### Modal

`Modal` plus `ModalHeader`, `ModalHeaderText`, `ModalTitle`, `ModalTagline`,
`ModalIcon`, `ModalThumb`, `ModalHeroImage`, `ModalClose`, `ModalContent`,
`ModalFooter`, `ModalFooterAnnotation`, `ModalFooterControllers`,
`ModalBackdrop`. Footer actions are ordinary `Button`s: one primary, the rest
secondary.

### Contextualbar

`Contextualbar` plus `ContextualbarHeader`, `ContextualbarTitle`,
`ContextualbarIcon`, `ContextualbarAction(s)`, `ContextualbarButton`,
`ContextualbarContent`, `ContextualbarSection`, `ContextualbarFooter`,
`ContextualbarEmptyContent`, `ContextualbarSkeleton`. Prefer it over `Modal` for
non-disruptive contextual input.

### Option / MenuItem

`Option` and its parts (`OptionAvatar`, `OptionIcon`, `OptionContent`,
`OptionColumn`, `OptionDescription`, `OptionMenu`, `OptionSkeleton`,
`OptionDivider`, `OptionTitle`, `OptionHeader`, `OptionInput`, `CheckOption`)
are re-exported from `Menu` under `MenuItem*` aliases. Both names reach the same
component — use the `MenuItem*` alias inside a `Menu`, `Option*` inside
`Options`/`Select`.

### Card, Sidebar, Sidepanel, Message, Table, Accordion

Same shape: a root plus named parts. `Sidebar` and `Message` are the deepest
families — read their section in `components.md` first.

## Toasts

Toasts live in `@rocket.chat/fuselage-toastbar`, not in the main package:

```tsx
import {
  ToastBarProvider,
  useToastBarDispatch,
} from '@rocket.chat/fuselage-toastbar';

const dispatchToastMessage = useToastBarDispatch();
dispatchToastMessage({ type: 'success', message: 'Saved' }); // 'success' | 'info' | 'error'
```

`useToastBarDismiss` dismisses programmatically. Wrap the app once in
`ToastBarProvider`.

## Hooks

`@rocket.chat/fuselage-hooks` is a peer dependency and the right place to look
before writing a utility hook. Verified exports include `useDebouncedValue`,
`useDebouncedCallback`, `useDebouncedState`, `useMediaQuery`, `useMediaQueries`,
`useBreakpoints`, `useBorderBoxSize`, `useContentBoxSize`, `useResizeObserver`,
`useOutsideClick`, `useAutoFocus`, `useMergedRefs`, `useLocalStorage`,
`useSessionStorage`, `useToggle`, `usePrevious`, `useStableCallback`,
`useClipboard`, `usePrefersReducedMotion`, `usePrefersColorScheme`,
`useDarkMode`, `useElementIsVisible`.

## Accessibility

- `react-aria`/`react-stately` back `Menu`, `Popover`, `Select` and `Slider`.
  Reuse those components instead of rebuilding overlay or listbox behavior.
- Every new component's spec should assert `expect(await axe(container))
.toHaveNoViolations()` — `jest-axe` is already configured.
- `Icon` renders `aria-hidden='true'`, so an icon-only control needs its own
  accessible name — pass `title` or `aria-label` to `IconButton` (they reach the
  element through Box props).
- Keyboard support is not optional for anything focusable, and focus must stay
  visible — do not remove the focus ring in SCSS.

## Long lists

`react-virtuoso` is a peer dependency, used by `OptionsPaginated`. Use it for
any list that can grow past a screenful; do not write a windowing loop.
