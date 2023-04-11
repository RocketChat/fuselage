import { css } from '@rocket.chat/css-in-js';

import type { Size } from '../../styleTokens';
import { normalizeEnum, formatSize, normalizeSize } from '../../styleTokens';
import type { Utility } from './Utility';

export const sizeCssPropertyUtility = (
  prefix: string,
  properties: string[]
): Utility<Size> => ({
  normalizeValue: normalizeSize,
  name: (value) => `${prefix}-${value}!`,
  cssFn: css`
    ${(value) =>
      properties.map(
        (property) =>
          css`
            ${property}: ${formatSize(value)} !important;
          `
      )}
  `,
  fallbackCssFn: css`
    ${(value) =>
      properties.map(
        (property) =>
          css`
            ${property}: ${value} !important;
          `
      )}
  `,
});

export const enumCssPropertyUtility = <TEnum extends readonly string[]>({
  property,
  values,
  name,
}: {
  property: string;
  values: TEnum;
  name: (value: TEnum[number]) => string;
}): Utility<TEnum[number]> => ({
  normalizeValue: (value) => normalizeEnum(values, value),
  name,
  cssFn: css`
    ${property}: ${(value) => value} !important;
  `,
  fallbackCssFn: css`
    ${property}: ${(value) => value} !important;
  `,
});
