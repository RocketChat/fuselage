import { css } from '@rocket.chat/css-in-js';
import tokenTypography from '@rocket.chat/fuselage-tokens/typography';
import PropTypes from 'prop-types';

import { cssSupports } from './cssSupports';
import { getSizeValue } from './layout';

const getFontFamilyValue = (propValue) => {
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

const getFontScaleValue = (propValue) => {
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

const fontFamilyProperty = (value) =>
  css`font-family: ${ getFontFamilyValue(value) || value } !important;`;

const fontSizeProperty = (value) =>
  css`font-size: ${ getFontScaleValue(value)?.fontSize || getSizeValue(value) || value } !important;`;

const fontWeightProperty = (value) =>
  css`font-weight: ${ getFontScaleValue(value)?.fontWeight || value } !important;`;

const lineHeightProperty = (value) =>
  css `line-height: ${ getFontScaleValue(value)?.lineHeight || getSizeValue(value) || value } !important;`;

const letterSpacingProperty = (value) =>
  css`letter-spacing: ${ getFontScaleValue(value)?.letterSpacing || value } !important;`;

const fontScaleProperty = (value) => {
  const {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  } = getFontScaleValue(value);

  return css`
    font-size: ${ fontSize } !important;
    font-weight: ${ fontWeight } !important;
    line-height: ${ lineHeight } !important;
    letter-spacing: ${ letterSpacing } !important;
  `;
};

const fontStyleProperty = (value) => css`font-style: ${ value } !important;`;

const textAlignProperty = (value) => {
  if (value === 'start' && !cssSupports('text-align: start')) {
    return css`
      :not([dir=rtl]) & {
        text-align: left;
      }

      [dir=rtl] & {
        text-align: right;
      }
    `;
  }

  if (value === 'end' && !cssSupports('text-align: end')) {
    return css`
      *:not([dir=rtl]) & {
        text-align: right;
      }

      [dir=rtl] & {
        text-align: left;
      }
    `;
  }

  return css`text-align: ${ value } !important;`;
};

const textTransformProperty = (value) => css`text-transform: ${ value } !important;`;

const textDecorationLineProperty = (value) => css`text-decoration-line: ${ value } !important;`;

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
    fontFamily !== undefined && fontFamilyProperty(fontFamily),
    fontSize !== undefined && fontSizeProperty(fontSize),
    fontWeight !== undefined && fontWeightProperty(fontWeight),
    lineHeight !== undefined && lineHeightProperty(lineHeight),
    letterSpacing !== undefined && letterSpacingProperty(letterSpacing),
    fontScale !== undefined && fontScaleProperty(fontScale),
    fontStyle !== undefined && fontStyleProperty(fontStyle),
    textAlign !== undefined && textAlignProperty(textAlign),
    textTransform !== undefined && textTransformProperty(textTransform),
    textDecorationLine !== undefined && textDecorationLineProperty(textDecorationLine),
  ],
  ...props,
});

export const fontFamilyPropType = PropTypes.oneOf(Object.keys(tokenTypography.fontFamilies));
export const fontScalePropType = PropTypes.oneOf(Object.keys(tokenTypography.fontScales));
