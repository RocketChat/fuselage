import { css } from '@rocket.chat/css-in-js';

import type { BorderRadius } from '../../../styleTokens';
import {
  formatBorderRadius,
  normalizeBorderRadius,
} from '../../../styleTokens';
import type { Utility } from '../Utility';

const borderRadiusCssPropertyUtility = ({
  prefix,
  property,
}: {
  prefix: string;
  property: string;
}): Utility<BorderRadius> => ({
  normalizeValue: normalizeBorderRadius,
  name: (value) => `${prefix}-${value}!`,
  cssFn: css`
    ${property}: ${formatBorderRadius} !important;
  `,
  fallbackCssFn: css`
    ${property}: ${(value) => value} !important;
  `,
});

export const borderRadius = borderRadiusCssPropertyUtility({
  property: 'border-radius',
  prefix: 'rounded',
});

export const borderStartStartRadius = borderRadiusCssPropertyUtility({
  property: 'border-start-start-radius',
  prefix: 'rounded-ss',
});

export const borderStartEndRadius = borderRadiusCssPropertyUtility({
  property: 'border-start-end-radius',
  prefix: 'rounded-se',
});

export const borderEndStartRadius = borderRadiusCssPropertyUtility({
  property: 'border-end-start-radius',
  prefix: 'rounded-es',
});

export const borderEndEndRadius = borderRadiusCssPropertyUtility({
  property: 'border-end-end-radius',
  prefix: 'rounded-ee',
});
