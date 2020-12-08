import { css } from '@rocket.chat/css-in-js';

import { fontScale as fontScaleValue } from '../../styleTokens';

export const fontScale = (
  value: Parameters<typeof fontScaleValue>[0]
): ReturnType<typeof css> | null => {
  const fontScaleParams = fontScaleValue(value);

  if (!fontScaleParams) {
    return null;
  }

  return css`
    font-size: ${fontScaleParams.fontSize} !important;
    font-weight: ${fontScaleParams.fontWeight} !important;
    letter-spacing: ${fontScaleParams.letterSpacing} !important;
    line-height: ${fontScaleParams.lineHeight} !important;
  `;
};
