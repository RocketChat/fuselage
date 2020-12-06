import { css } from '@rocket.chat/css-in-js';

export const invisible = (enabled: boolean): ReturnType<typeof css> | null =>
  enabled
    ? css`
        visibility: hidden;
        opacity: 0;
      `
    : null;
