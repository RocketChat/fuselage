import { css } from 'styled-components';

import typography from '../theme/typography';

export const withText = css`
  font-family: ${ ({ fontName = 'base' }) => typography[`${ fontName }Font`] };
  font-weight: 400;
  font-variant-numeric: tabular-nums;
  text-decoration: none;
  `;
