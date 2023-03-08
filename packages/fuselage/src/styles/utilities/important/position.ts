import { enumCssPropertyUtility } from '../important';

export const position = enumCssPropertyUtility({
  property: 'position',
  values: ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const,
  name: (value) => `${value}!`,
});
