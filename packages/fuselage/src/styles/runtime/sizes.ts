import { css } from '@rocket.chat/css-in-js';

import { size as sizeValue } from '../../styleTokens';

export const size = (value: unknown): ReturnType<typeof css> | null => {
  const measure = sizeValue(value);

  if (!measure) {
    return null;
  }

  return css`
    width: ${measure} !important;
    height: ${measure} !important;
  `;
};

export const minSize = (value: unknown): ReturnType<typeof css> | null => {
  const measure = sizeValue(value);

  if (!measure) {
    return null;
  }

  return css`
    min-width: ${measure} !important;
    min-height: ${measure} !important;
  `;
};

export const maxSize = (value: unknown): ReturnType<typeof css> | null => {
  const measure = sizeValue(value);

  if (!measure) {
    return null;
  }

  return css`
    max-width: ${measure} !important;
    max-height: ${measure} !important;
  `;
};
