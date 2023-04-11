import { css } from '@rocket.chat/css-in-js';

import type { Utility } from '../Utility';

export const invisible: Utility<boolean> = {
  normalizeValue: Boolean,
  name: () => 'invisible',
  cssFn: css`
    ${(value) =>
      value
        ? css`
            visibility: hidden;
            opacity: 0;
          `
        : ''}
  `,
};
