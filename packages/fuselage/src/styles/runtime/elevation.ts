import { css } from '@rocket.chat/css-in-js';

import { color } from '../../styleTokens';

export const elevation = (
  value: '0' | '1' | '2'
): ReturnType<typeof css> | null => {
  if (value === '0') {
    return css`
      box-shadow: none;
    `;
  }

  if (value === '1') {
    return css`
      box-shadow: 0px 0px 12px 0px ${color('neutral-800-10')};
    `;
  }

  if (value === '2') {
    return css`
      box-shadow: 0px 0px 2px 0px ${color('neutral-800-8')},
        0px 0px 12px 0px ${color('neutral-800-12')};
    `;
  }

  return null;
};
