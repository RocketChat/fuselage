import { css, cssFn } from '@rocket.chat/css-in-js';

import { fontScale, FontScale } from '../theming';

export default (_fontScale: FontScale): cssFn => css`
  font-size: ${fontScale(_fontScale).fontSize} !important;
  font-weight: ${fontScale(_fontScale).fontWeight} !important;
  letter-spacing: ${fontScale(_fontScale).letterSpacing} !important;
  line-height: ${fontScale(_fontScale).lineHeight} !important;
`;
