import { css } from 'styled-components';

export const clickable = css`
  cursor: pointer;

  outline: 0;

  *:disabled &,
  &:disabled,
  &.disabled {
    cursor: not-allowed;
  }
`;
