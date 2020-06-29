import { cssSupports } from '@rocket.chat/css-in-js';
import tokenTypography from '@rocket.chat/fuselage-tokens/typography';
import PropTypes from 'prop-types';

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

export const fontFamilyPropType = PropTypes.oneOf(Object.keys(tokenTypography.fontFamilies));
export const fontScalePropType = PropTypes.oneOf(Object.keys(tokenTypography.fontScales));
