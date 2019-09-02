import { css } from 'styled-components';

export const whenRightToLeftOrientation = (content) => css`
  .rtl &,
  &.rtl,
  [dir=rtl] & {
    ${ content }
  }
`;
