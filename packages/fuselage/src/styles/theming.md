# Theming

Currently, Fuselage uses the same method for theming applied on Rocket.Chat: global CSS custom properties/variables.
These properties are prefixed by `rcx-` (to distinguish them from the already existing `rc-` ones from Rocket.Chat's UI)
followed by the name of the component affected by them (e.g. `rcx-check-box-` variables refer to the `CheckBox`
component) and the property name (e.g. `color`, `hover-background-color` etc.).

For instance, the following CSS code

```css
:root {
  --rcx-button-primary-background: navy;
  --rcx-button-danger-background: tomato;
}
```

will enable `Button` elements which are decorated by `primary` and `danger` properties to show a background of
<span style="color: navy">navy</span> and <span style="color: tomato">tomato</span> colors, respectively.

We recommend [react-helmet](https://www.npmjs.com/package/react-helmet) to set theming, as it follows:

```jsx
<Helmet>
  <style type="text/css">{`
  :root {
    --rcx-button-primary-background: navy;
    --rcx-button-danger-background: tomato;
  }
  `}</style>
</Helmet>
```
