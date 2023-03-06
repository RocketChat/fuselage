import { css } from '@rocket.chat/css-in-js';

export const withTruncatedText = css`
  ${(enabled: boolean) =>
    enabled
      ? css`
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `
      : ''}
`;
