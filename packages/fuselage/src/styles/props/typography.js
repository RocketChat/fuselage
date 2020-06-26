import { css, cssSupports } from '@rocket.chat/css-in-js';
import tokenTypography from '@rocket.chat/fuselage-tokens/typography';
import PropTypes from 'prop-types';

import { getSizeValue } from './layout';

export const getFontFamilyValue = (propValue) => {
  if (!tokenTypography.fontFamilies[propValue]) {
    return;
  }

  const fontFamily = tokenTypography.fontFamilies[propValue]
    .map((fontFace) => (fontFace.includes(' ') ? `'${ fontFace }'` : fontFace)).join(', ');

  if (cssSupports('(--foo: bar)')) {
    return `var(--rcx-font-family-${ propValue }, ${ fontFamily })`;
  }

  return fontFamily;
};

export const getFontScaleValue = (propValue) => {
  if (!tokenTypography.fontScales[propValue]) {
    return;
  }

  const {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  } = tokenTypography.fontScales[propValue];

  return {
    fontSize: `${ fontSize / 16 }rem`,
    fontWeight,
    lineHeight: `${ lineHeight / 16 }rem`,
    letterSpacing: `${ letterSpacing / 16 }rem`,
  };
};

export const mapTypographyProps = ({
  className,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  fontScale,
  fontStyle,
  textAlign,
  textTransform,
  textDecorationLine,
  ...props
}) => ({
  className: [
    ...className,
    fontFamily !== undefined
      && css`font-family: ${ getFontFamilyValue(fontFamily) || fontFamily } !important;`,
    fontSize !== undefined
      && css`font-size: ${ getFontScaleValue(fontSize)?.fontSize || getSizeValue(fontSize) || fontSize } !important;`,
    fontWeight !== undefined
      && css`font-weight: ${ getFontScaleValue(fontWeight)?.fontWeight || fontWeight } !important;`,
    lineHeight !== undefined
      && css `line-height: ${ getFontScaleValue(lineHeight)?.lineHeight || getSizeValue(lineHeight) || lineHeight } !important;`,
    letterSpacing !== undefined
      && css`letter-spacing: ${ getFontScaleValue(letterSpacing)?.letterSpacing || letterSpacing } !important;`,
    fontScale !== undefined
      && css`
        font-size: ${ getFontScaleValue(fontScale)?.fontSize } !important;
        font-weight: ${ getFontScaleValue(fontScale)?.fontWeight } !important;
        line-height: ${ getFontScaleValue(fontScale)?.lineHeight } !important;
        letter-spacing: ${ getFontScaleValue(fontScale)?.letterSpacing } !important;
      `,
    fontStyle !== undefined
      && css`font-style: ${ fontStyle } !important;`,
    textAlign !== undefined
      && css`text-align: ${ textAlign } !important;`,
    textTransform !== undefined
      && css`text-transform: ${ textTransform } !important;`,
    textDecorationLine !== undefined
      && css`text-decoration-line: ${ textDecorationLine } !important;`,
  ],
  ...props,
});

export const fontFamilyPropType = PropTypes.oneOf(Object.keys(tokenTypography.fontFamilies));
export const fontScalePropType = PropTypes.oneOf(Object.keys(tokenTypography.fontScales));
