import { css } from 'styled-components';


export const disableable = css`
  *:disabled &,
  &:disabled {
    cursor: not-allowed;
  }

  ${ ({ disabled }) => disabled && css`cursor: not-allowed;` }
`;
