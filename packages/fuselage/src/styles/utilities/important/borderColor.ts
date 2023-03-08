import { css } from '@rocket.chat/css-in-js';

import type { BorderColor } from '../../../styleTokens';
import {
  strokeColor,
  formatBorderColor,
  normalizeBorderColor,
} from '../../../styleTokens';
import type { Utility } from '../Utility';

const borderColorCssPropertyUtility = ({
  prefix,
  property,
}: {
  prefix: string;
  property: string;
}): Utility<BorderColor> => ({
  normalizeValue: normalizeBorderColor,
  name: (value) => `${prefix}-${value}!`,
  cssFn: css`
    ${property}: ${formatBorderColor} !important;
  `,
  fallbackCssFn: css`
    ${property}: ${(value) => strokeColor(value)} !important;
  `,
});

export const borderColor = borderColorCssPropertyUtility({
  property: 'border-color',
  prefix: 'border',
});

export const borderBlockColor = borderColorCssPropertyUtility({
  property: 'border-block-color',
  prefix: 'border-b',
});

export const borderBlockStartColor = borderColorCssPropertyUtility({
  property: 'border-block-start-color',
  prefix: 'border-bs',
});

export const borderBlockEndColor = borderColorCssPropertyUtility({
  property: 'border-block-end-color',
  prefix: 'border-be',
});

export const borderInlineColor = borderColorCssPropertyUtility({
  property: 'border-inline-color',
  prefix: 'border-i',
});

export const borderInlineStartColor = borderColorCssPropertyUtility({
  property: 'border-inline-start-color',
  prefix: 'border-is',
});

export const borderInlineEndColor = borderColorCssPropertyUtility({
  property: 'border-inline-end-color',
  prefix: 'border-ie',
});
