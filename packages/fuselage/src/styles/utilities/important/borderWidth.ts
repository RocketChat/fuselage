import { css } from '@rocket.chat/css-in-js';

import type { BorderWidth } from '../../../styleTokens';
import { formatBorderWidth, normalizeBorderWidth } from '../../../styleTokens';
import type { Utility } from '../Utility';

const borderWidthCssPropertyUtility = ({
  prefix,
  property,
}: {
  prefix: string;
  property: string;
}): Utility<BorderWidth> => ({
  normalizeValue: normalizeBorderWidth,
  name: (value) => `${prefix}-${value}!`,
  cssFn: css`
    ${property}: ${formatBorderWidth} !important;
  `,
  fallbackCssFn: css`
    ${property}: ${(value) => value} !important;
  `,
});

export const borderWidth = borderWidthCssPropertyUtility({
  property: 'border-width',
  prefix: 'border',
});

export const borderBlockWidth = borderWidthCssPropertyUtility({
  property: 'border-block-width',
  prefix: 'border-b',
});

export const borderBlockStartWidth = borderWidthCssPropertyUtility({
  property: 'border-block-start-width',
  prefix: 'border-bs',
});

export const borderBlockEndWidth = borderWidthCssPropertyUtility({
  property: 'border-block-end-width',
  prefix: 'border-be',
});

export const borderInlineWidth = borderWidthCssPropertyUtility({
  property: 'border-inline-width',
  prefix: 'border-i',
});

export const borderInlineStartWidth = borderWidthCssPropertyUtility({
  property: 'border-inline-start-width',
  prefix: 'border-is',
});

export const borderInlineEndWidth = borderWidthCssPropertyUtility({
  property: 'border-inline-end-width',
  prefix: 'border-ie',
});
