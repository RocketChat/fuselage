import { css } from '@rocket.chat/css-in-js';

import type { Utility } from '../Utility';

export const withTruncatedText: Utility<boolean> = {
  normalizeValue: Boolean,
  name: () => 'with-truncated-text',
  cssFn: css`
    ${(value) =>
      value
        ? css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          `
        : ''}
  `,
};
