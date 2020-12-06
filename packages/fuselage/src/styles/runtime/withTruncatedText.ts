import { css } from '@rocket.chat/css-in-js';

export const withTruncatedText = (
  enabled: boolean
): ReturnType<typeof css> | null =>
  enabled
    ? css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
    : null;
