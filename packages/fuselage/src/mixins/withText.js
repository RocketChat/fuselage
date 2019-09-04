import { css } from 'styled-components';

import theme from '../styles/theme';

export const withText = css`
  font-family: ${ theme.typography.p1.fontFamily };
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  text-decoration: none;
  `;
