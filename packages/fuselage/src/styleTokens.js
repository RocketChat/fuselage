import { cssSupports } from '@rocket.chat/css-in-js';
import tokenColors from '@rocket.chat/fuselage-tokens/colors';
import tokenTypography from '@rocket.chat/fuselage-tokens/typography';
import invariant from 'invariant';

import { memoize } from './helpers/memoize';

const measure = (computeSpecialValue) =>
  memoize((value) => {
    if (typeof value === 'number') {
      return `${value}px`;
    }

    if (typeof value !== 'string') {
      return undefined;
    }

    const xRegExp = /^(neg-|-)?x(\d+)$/;
    if (xRegExp.test(value)) {
      const [, negativeMark, measureInPixelsAsString] = xRegExp.exec(value);
      const measureInPixels =
        (negativeMark ? -1 : 1) * parseInt(measureInPixelsAsString, 10);
      return `${measureInPixels / 16}rem`;
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

const mapTypeToPrefix = {
  neutral: 'n',
  primary: 'b',
  info: 'b',
  success: 'g',
  warning: 'y',
  danger: 'r',
};

const getPaletteColor = (type, grade, alpha) => {
  invariant(
    grade % 100 === 0 && grade / 100 >= 1 && grade / 100 <= 9,
    'invalid color grade'
  );
  invariant(
    alpha === undefined || (alpha >= 0 && alpha <= 1),
    'invalid color alpha'
  );

  const prefix = mapTypeToPrefix[type];
  invariant(!!prefix, 'invalid color type');

  const baseColor = tokenColors[`${prefix}${grade}`];

  invariant(!!baseColor, 'invalid color reference');

  const matches = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/.exec(
    baseColor
  );

  invariant(!!matches, 'invalid color token format');

  if (alpha !== undefined) {
    const [, r, g, b] = matches;
    return [
      `--rcx-color-${type}-${grade}-${(alpha * 100).toFixed(0)}`,
      `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${
        alpha * 100
      }%)`,
    ];
  }

  return [`--rcx-color-${type}-${grade}`, baseColor];
};

const foregroundColors = {
  'default': tokenColors.n800,
  'info': tokenColors.n700,
  'hint': tokenColors.n600,
  'disabled': tokenColors.n400,
  'alternative': 'white',
  'primary': tokenColors.b500,
  'success': tokenColors.g500,
  'danger': tokenColors.r500,
  'warning': tokenColors.y700,
  'link': tokenColors.b500,
  'visited-link': tokenColors.p500,
  'active-link': tokenColors.r500,
};

const getForegroundColor = (type) => {
  const color = foregroundColors[type];
  invariant(!!color, 'invalid foreground color');

  return [`--rcx-color-foreground-${type}`, color];
};

const paletteColorRegex = /^(neutral|primary|info|success|warning|danger)-(\d+)(-(\d+))?$/;

export const color = memoize((propValue) => {
  if (typeof propValue !== 'string') {
    return;
  }

  const paletteMatches = paletteColorRegex.exec(String(propValue));

  if (paletteMatches) {
    const [, type, gradeString, , alphaString] = paletteMatches;
    const grade = parseInt(gradeString, 10);
    const alpha =
      alphaString !== undefined ? parseInt(alphaString, 10) / 100 : undefined;
    const [customProperty, color] = getPaletteColor(type, grade, alpha);

    if (customProperty && cssSupports('(--foo: bar)')) {
      return `var(${customProperty}, ${color})`;
    }

    return color;
  }

  if (propValue === 'surface') {
    if (cssSupports('(--foo: bar)')) {
      return 'var(--rcx-color-surface, white)';
    }

    return 'white';
  }

  if (foregroundColors[String(propValue)]) {
    const [customProperty, color] = getForegroundColor(String(propValue));

    if (customProperty && cssSupports('(--foo: bar)')) {
      return `var(${customProperty}, ${color})`;
    }

    return color;
  }

  return propValue;
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

  if (!tokenTypography.fontFamilies[value]) {
    return value;
  }

  const fontFamily = tokenTypography.fontFamilies[value]
    .map((fontFace) => (fontFace.includes(' ') ? `'${fontFace}'` : fontFace))
    .join(', ');

  if (cssSupports('(--foo: bar)')) {
    return `var(--rcx-font-family-${value}, ${fontFamily})`;
  }

  return fontFamily;
});

export const fontScale = (value) => {
  if (!tokenTypography.fontScales[value]) {
    return;
  }

  const {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  } = tokenTypography.fontScales[value];

  return {
    fontSize: `${fontSize / 16}rem`,
    fontWeight,
    lineHeight: `${lineHeight / 16}rem`,
    letterSpacing: `${letterSpacing / 16}rem`,
  };
};
fontScale.values = Object.keys(tokenTypography.fontScales);
