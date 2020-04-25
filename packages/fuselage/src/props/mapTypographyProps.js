import { css } from '@rocket.chat/css-in-js';
import tokenTypography from '@rocket.chat/fuselage-tokens/typography';
import invariant from 'invariant';

import { cssSupports } from './cssSupports';

const fontFamilyProperty = (value) => {
  if (tokenTypography.fontFamilies[value]) {
    value = tokenTypography.fontFamilies[value].map(JSON.stringify).join(' ');
  }

  return css`font-family: ${ value } !important;`;
};

const fontSizeProperty = (value) => {
  if (tokenTypography.fontScales[value]) {
    value = `${ tokenTypography.fontScales[value].fontSize / 16 }rem`;
  }

  return css`font-size: ${ value } !important;`;
};

const fontWeightProperty = (value) => {
  if (tokenTypography.fontScales[value]) {
    value = tokenTypography.fontScales[value].fontWeight;
  }

  return css`font-weight: ${ value } !important;`;
};

const lineHeightProperty = (value) => {
  if (tokenTypography.fontScales[value]) {
    value = `${ tokenTypography.fontScales[value].lineHeight / 16 }rem`;
  }

  return css `line-height: ${ value } !important;`;
};

const letterSpacingProperty = (value) => {
  if (tokenTypography.fontScales[value]) {
    value = `${ tokenTypography.fontScales[value].letterSpacing / 16 }rem`;
  }

  return css`letter-spacing: ${ value } !important;`;
};

const fontScaleProperty = (value) => {
  invariant(tokenTypography.fontScales[value], 'invalid font scale');

  return css`
    font-size: ${ tokenTypography.fontScales[value].fontSize / 16 }rem !important;
    font-weight: ${ tokenTypography.fontScales[value].fontWeight } !important;
    line-height: ${ tokenTypography.fontScales[value].lineHeight / 16 }rem !important;
    letter-spacing: ${ tokenTypography.fontScales[value].letterSpacing / 16 }rem !important;
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
