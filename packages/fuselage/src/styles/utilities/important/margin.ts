import { css } from '@rocket.chat/css-in-js';

import type { Margin } from '../../../styleTokens';
import { formatMargin, normalizeMargin } from '../../../styleTokens';
import type { Utility } from '../Utility';

const marginCssPropertyUtility = ({
  property,
  prefix,
}: {
  property: string;
  prefix: string;
}): Utility<Margin> => ({
  normalizeValue: normalizeMargin,
  name: (value) => `${prefix}-${value}!`,
  cssFn: css`
    ${property}: ${formatMargin} !important;
  `,
  fallbackCssFn: css`
    ${property}: ${(value) => value} !important;
  `,
});

export const margin = marginCssPropertyUtility({
  property: 'margin',
  prefix: 'm',
});

export const marginBlock = marginCssPropertyUtility({
  property: 'margin-block',
  prefix: 'mb',
});

export const marginBlockStart = marginCssPropertyUtility({
  property: 'margin-block-start',
  prefix: 'mbs',
});

export const marginBlockEnd = marginCssPropertyUtility({
  property: 'margin-block-end',
  prefix: 'mbe',
});

export const marginInline = marginCssPropertyUtility({
  property: 'margin-inline',
  prefix: 'mi',
});

export const marginInlineStart = marginCssPropertyUtility({
  property: 'margin-inline-start',
  prefix: 'mis',
});

export const marginInlineEnd = marginCssPropertyUtility({
  property: 'margin-inline-end',
  prefix: 'mie',
});
