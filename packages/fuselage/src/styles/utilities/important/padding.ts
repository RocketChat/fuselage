import { css } from '@rocket.chat/css-in-js';

import type { Padding } from '../../../styleTokens';
import { formatPadding, normalizePadding } from '../../../styleTokens';
import type { Utility } from '../Utility';

const paddingCssPropertyUtility = ({
  property,
  prefix,
}: {
  property: string;
  prefix: string;
}): Utility<Padding> => ({
  normalizeValue: normalizePadding,
  name: (value) => `${prefix}-${value}!`,
  cssFn: css`
    ${property}: ${formatPadding} !important;
  `,
  fallbackCssFn: css`
    ${property}: ${(value) => value} !important;
  `,
});

export const padding = paddingCssPropertyUtility({
  property: 'padding',
  prefix: 'p',
});

export const paddingBlock = paddingCssPropertyUtility({
  property: 'padding-block',
  prefix: 'pb',
});

export const paddingBlockStart = paddingCssPropertyUtility({
  property: 'padding-block-start',
  prefix: 'pbs',
});

export const paddingBlockEnd = paddingCssPropertyUtility({
  property: 'padding-block-end',
  prefix: 'pbe',
});

export const paddingInline = paddingCssPropertyUtility({
  property: 'padding-inline',
  prefix: 'pi',
});

export const paddingInlineStart = paddingCssPropertyUtility({
  property: 'padding-inline-start',
  prefix: 'pis',
});

export const paddingInlineEnd = paddingCssPropertyUtility({
  property: 'padding-inline-end',
  prefix: 'pie',
});
