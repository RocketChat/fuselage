import { enumCssPropertyUtility } from '../important';

const values = [
  'dashed',
  'dotted',
  'double',
  'groove',
  'hidden',
  'inset',
  'none',
  'outset',
  'ridge',
  'solid',
] as const;

const name = (value: typeof values[number]) => `${value}!`;

export const borderStyle = enumCssPropertyUtility({
  property: 'border-style',
  values,
  name,
});

export const borderBlockStyle = enumCssPropertyUtility({
  property: 'border-block-style',
  values,
  name,
});

export const borderInlineStyle = enumCssPropertyUtility({
  property: 'border-inline-style',
  values,
  name,
});

export const borderBlockStartStyle = enumCssPropertyUtility({
  property: 'border-block-start-style',
  values,
  name,
});

export const borderBlockEndStyle = enumCssPropertyUtility({
  property: 'border-block-end-style',
  values,
  name,
});

export const borderInlineStartStyle = enumCssPropertyUtility({
  property: 'border-inline-start-style',
  values,
  name,
});

export const borderInlineEndStyle = enumCssPropertyUtility({
  property: 'border-inline-end-style',
  values,
  name,
});
