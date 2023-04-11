import { enumCssPropertyUtility } from '../important';

export const overflow = enumCssPropertyUtility({
  property: 'overflow',
  values: ['visible', 'hidden', 'clip', 'scroll', 'auto'] as const,
  name: (value) => `overflow-${value}!`,
});

export const overflowX = enumCssPropertyUtility({
  property: 'overflow-x',
  values: ['visible', 'hidden', 'clip', 'scroll', 'auto'] as const,
  name: (value) => `overflow-x-${value}!`,
});

export const overflowY = enumCssPropertyUtility({
  property: 'overflow-y',
  values: ['visible', 'hidden', 'clip', 'scroll', 'auto'] as const,
  name: (value) => `overflow-y-${value}!`,
});
