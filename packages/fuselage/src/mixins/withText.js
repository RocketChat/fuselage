import { css } from 'styled-components';

import typography from '../styles/typography';

export const withText = ({
  fontFamily = typography.p1.fontFamily,
  fontSize = typography.p1.fontSize,
  fontWeight = typography.p1.fontWeight,
  letterSpacing = typography.p1.letterSpacing,
  lineHeight = typography.p1.lineHeight,
}) => css`
  font-family: ${ fontFamily };
  font-size: ${ fontSize };
  font-variant-numeric: tabular-nums;
  font-weight: ${ fontWeight };
  letter-spacing: ${ letterSpacing };
  line-height: ${ lineHeight };
  text-decoration: none;
`;
