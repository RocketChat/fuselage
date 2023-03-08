import { enumCssPropertyUtility, sizeCssPropertyUtility } from '../important';

export const alignItems = enumCssPropertyUtility({
  property: 'align-items',
  values: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] as const,
  name: (value) => `items-${value}!`,
});

export const alignContent = enumCssPropertyUtility({
  property: 'align-content',
  values: [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
    'baseline',
  ] as const,
  name: (value) => `content-${value}!`,
});

export const alignSelf = enumCssPropertyUtility({
  property: 'align-self',
  values: [
    'auto',
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
  ] as const,
  name: (value) => `self-${value}!`,
});

export const justifyItems = enumCssPropertyUtility({
  property: 'justify-items',
  values: ['flex-start', 'center', 'flex-end', 'stretch'] as const,
  name: (value) => `justify-items-${value}!`,
});

export const justifyContent = enumCssPropertyUtility({
  property: 'justify-content',
  values: [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ] as const,
  name: (value) => `justify-${value}!`,
});

export const justifySelf = enumCssPropertyUtility({
  property: 'justify-self',
  values: ['auto', 'flex-start', 'center', 'flex-end', 'stretch'] as const,
  name: (value) => `justify-self-${value}!`,
});

export const flexWrap = enumCssPropertyUtility({
  property: 'flex-wrap',
  values: ['nowrap', 'wrap', 'wrap-reverse'] as const,
  name: (value) => `wrap-${value}!`,
});

export const flexDirection = enumCssPropertyUtility({
  property: 'flex-direction',
  values: ['row', 'row-reverse', 'column', 'column-reverse'] as const,
  name: (value) => `flex-${value}!`,
});

export const flexBasis = sizeCssPropertyUtility('basis', ['flex-basis']);
