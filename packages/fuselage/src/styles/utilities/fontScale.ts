import { css } from '@rocket.chat/css-in-js';

import type { FontScale } from '../../styleTokens';
import * as tokens from '../../styleTokens';

const fontScaleField =
  (field: 'fontSize' | 'fontWeight' | 'letterSpacing' | 'lineHeight') =>
  ({ value }: { value: FontScale }) =>
    tokens.fontScale(value)?.[field];

const important = ({ important = false }: { important?: boolean }) =>
  important ? '!important' : '';

export const fontScale = css<[{ value: FontScale; important?: boolean }]>`
  font-size: ${fontScaleField('fontSize')} ${important};
  font-weight: ${fontScaleField('fontWeight')} ${important};
  letter-spacing: ${fontScaleField('letterSpacing')} ${important};
  line-height: ${fontScaleField('lineHeight')} ${important};
`;
