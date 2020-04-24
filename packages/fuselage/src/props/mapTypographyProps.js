import { css } from '@rocket.chat/css-in-js';

export const mapTypographyProps = ({
  className,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  fontStyle,
  ...props
}) => ({
  className: [
    ...className,
    fontFamily !== undefined && css`font-family: ${ fontFamily } !important;`,
    fontSize !== undefined && css`font-size: ${ fontSize } !important;`,
    fontWeight !== undefined && css`font-weight: ${ fontWeight } !important;`,
    lineHeight !== undefined && css `line-height: ${ lineHeight } !important;`,
    letterSpacing !== undefined && css`letter-spacing: ${ letterSpacing } !important;`,
    textAlign !== undefined && css`text-align: ${ textAlign } !important;`,
    fontStyle !== undefined && css`font-style: ${ fontStyle } !important;`,
  ],
  ...props,
});
