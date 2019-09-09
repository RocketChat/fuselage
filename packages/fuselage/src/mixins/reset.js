import { css } from 'styled-components';

import transitions from '../styles/transitions';
import { whenHidden, whenInvisible } from './state';


export const reset = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  font-weight: normal;
  appearance: none;
  list-style: none;
  transition: all ${ transitions.shortDuration };
  outline: none;

  ${ whenHidden(css`display: none;`) }

  ${ whenInvisible(css`
    opacity: 0;
    visibility: hidden;
  `) }
`;
