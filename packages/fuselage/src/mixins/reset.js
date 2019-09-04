import { css } from 'styled-components';

import dimensions from '../theme/dimensions';


export const reset = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  font-weight: normal;
  appearance: none;
  list-style: none;
  transition: all ${ dimensions.transitions.shortDuration };
  outline: none;

  &[hidden] {
    display: none;
  }

  ${ ({ invisible }) => invisible && css`
    visibility: hidden;

    opacity: 0;
  ` }
`;
