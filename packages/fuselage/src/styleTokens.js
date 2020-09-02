import { cssSupports } from '@rocket.chat/css-in-js';
import colorTokens from '@rocket.chat/fuselage-tokens/colors.json';
import typographyTokens from '@rocket.chat/fuselage-tokens/typography.json';

import { memoize } from './helpers/memoize';

const measure = (computeSpecialValue) =>
  memoize((value) => {
    if (typeof value === 'number') {
      return `${ value }px`;
    }

    if (typeof value !== 'string') {
      return undefined;
    }

    const xRegExp = /^(neg-|-)?x(\d+)$/;
    if (xRegExp.test(value)) {
      const [, negativeMark, measureInPixelsAsString] = xRegExp.exec(value);
      const measureInPixels = (negativeMark ? -1 : 1) * parseInt(measureInPixelsAsString, 10);
      return `${ measureInPixels / 16 }rem`;
    }

    if (computeSpecialValue) {
      return computeSpecialValue(value) || value;
    }

    return value;
  });

export const borderWidth = measure((value) => {
  if (value === 'none') {
    return '0px';
  }
});

export const borderRadius = measure((value) => {
  if (value === 'none') {
    return '0px';
  }

  if (value === 'full') {
    return '9999px';
  }
});

const withAlphaRegex = /^((neutral|primary|info|success|warning|danger)-\d+)-(\d+)$/;

const withAlpha = (colorHex, alpha) => {
  const matches = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/.exec(colorHex);
  const [, r, g, b] = matches;
  return `rgba(${ parseInt(r, 16) }, ${ parseInt(g, 16) }, ${ parseInt(b, 16) }, ${ alpha * 100 }%)`;
};

export const color = memoize((value) => {
  if (colorTokens.light[value]) {
    if (cssSupports('(--foo: bar)')) {
      return `var(--rcx-color-${ value })`;
    }

    return colorTokens.light[value];
  }

  const paletteMatches = withAlphaRegex.exec(value);

  if (paletteMatches) {
    const [, type, , alphaString] = paletteMatches;

    if (colorTokens.light[type]) {
      const alpha = parseInt(alphaString, 10) / 100;
      return withAlpha(colorTokens.light[type], alpha);
    }
  }

  return value;
});

export const size = measure((value) => {
  if (value === 'none') {
    return '0px';
  }

  if (value === 'full') {
    return '100%';
  }

  if (value === 'sw') {
    return '100vw';
  }

  if (value === 'sh') {
    return '100vh';
  }
});

export const inset = measure((value) => {
  if (value === 'none') {
    return '0px';
  }
});

export const margin = measure((value) => {
  if (value === 'none') {
    return '0px';
  }
});

export const padding = measure((value) => {
  if (value === 'none') {
    return '0px';
  }
});

export const fontFamily = memoize((value) => {
  if (typeof value !== 'string') {
    return;
  }

  if (!typographyTokens.fontFamilies[value]) {
    return value;
  }

  const fontFamily = typographyTokens.fontFamilies[value]
    .map((fontFace) => (fontFace.includes(' ') ? `'${ fontFace }'` : fontFace)).join(', ');

  if (cssSupports('(--foo: bar)')) {
    return `var(--rcx-font-family-${ value }, ${ fontFamily })`;
  }

  return fontFamily;
});

export const fontScale = (value) => {
  if (!typographyTokens.fontScales[value]) {
    return;
  }

  const {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  } = typographyTokens.fontScales[value];

  return {
    fontSize: `${ fontSize / 16 }rem`,
    fontWeight,
    lineHeight: `${ lineHeight / 16 }rem`,
    letterSpacing: `${ letterSpacing / 16 }rem`,
  };
};
fontScale.values = Object.keys(typographyTokens.fontScales);
