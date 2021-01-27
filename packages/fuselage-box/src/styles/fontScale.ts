import { css, cssFn } from '@rocket.chat/css-in-js';

import { fontScale, FontScale } from '../theming';

export default (value: FontScale): cssFn | undefined => {
  const values = fontScale(value);

  if (!values) {
    return undefined;
  }

  return css`
    font-size: ${values.fontSize} !important;
    font-weight: ${values.fontWeight} !important;
    letter-spacing: ${values.letterSpacing} !important;
    line-height: ${values.lineHeight} !important;
  `;
};
