import tokenTypography from '@rocket.chat/fuselage-tokens/typography.json';
import { memoize } from '@rocket.chat/memo';
import invariant from 'invariant';
import type { CSSProperties } from 'react';

import {
  isStatusBackgroundColor,
  isStatusColor,
  isStrokeColor,
  isSurfaceColor,
  isTextIconColor,
  neutral,
  statusBackgroundColors,
  strokeColors,
  surfaceColors,
  textIconColors,
  statusColors,
  throwErrorOnInvalidToken,
  isBadgeColor,
  badgeBackgroundColors,
} from './Theme';
import { getPaletteColor } from './getPaletteColor';
import {
  toCSSColorValue,
  toCSSFontValue,
  toCSSValue,
} from './helpers/toCSSValue';

const measure = (
  computeSpecialValue?: (value: string) => null | undefined | string,
) =>
  memoize((value) => {
    if (typeof value === 'number') {
      return `${value}px`;
    }

    if (typeof value !== 'string') {
      return undefined;
    }

    const xRegExp = /^(neg-|-)?x(\d+)$/;
    const matches = xRegExp.exec(value);
    if (matches) {
      const [, negativeMark, measureInPixelsAsString] = matches;
      const measureInPixels =
        (negativeMark ? -1 : 1) * parseInt(measureInPixelsAsString, 10);
      return `${measureInPixels / 16}rem`;
    }

    if (computeSpecialValue) {
      return computeSpecialValue(value) || value;
    }

    return value;
  });

const borders = {
  radius: {
    'none': '0',
    'small': '2px',
    'medium': '4px',
    'large': '8px',
    'extra-large': '20px',
    'full': '9999px',
  },
  width: {
    'none': '0',
    'default': '1px',
    'medium': '2px',
    'large': '4px',
    'extra-large': '8px',
  },
} satisfies {
  radius: Record<string, CSSProperties['borderRadius']>;
  width: Record<string, CSSProperties['borderWidth']>;
};

export type BorderWidth = keyof typeof borders.width;
export type BorderRadius = keyof typeof borders.radius;

export const borderWidth = (value: unknown) => {
  if (typeof value === 'string' && value in borders.width) {
    return borders.width[value as keyof typeof borders.width];
  }

  throw new Error(
    `Invalid borderWidth value: ${value}. Valid values are: ${Object.keys(borders.width).join(', ')}`,
  );
};

export const borderRadius = (value: unknown) => {
  if (typeof value === 'string' && value in borders.radius) {
    return borders.radius[value as keyof typeof borders.radius];
  }

  throw new Error(
    `Invalid borderRadius value: ${value}. Valid values are: ${Object.keys(borders.radius).join(', ')}`,
  );
};

const mapTypeToPrefix = {
  neutral: 'n',
  blue: 'b',
  green: 'g',
  yellow: 'y',
  red: 'r',
  orange: 'o',
  purple: 'p',
} as const;

const isPaletteColorType = (
  type: unknown,
): type is keyof typeof mapTypeToPrefix =>
  typeof type === 'string' && type in mapTypeToPrefix;

const isPaletteColorGrade = (
  grade: unknown,
): grade is 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 =>
  typeof grade === 'number' &&
  grade % 100 === 0 &&
  grade / 100 >= 1 &&
  grade / 100 <= 9;

const isPaletteColorAlpha = (alpha: unknown): alpha is number | undefined =>
  alpha === undefined ||
  (typeof alpha === 'number' && alpha >= 0 && alpha <= 1);

const paletteColorRegex =
  /^(neutral|blue|green|yellow|red|orange|purple)-(\d+)(-(\d+))?$/;

export const strokeColor = memoize((value) => {
  const colorName = `stroke-${value}`;
  if (isStrokeColor(colorName)) {
    return strokeColors[colorName].toString();
  }
  return color(value);
});

export const backgroundColor = memoize((value) => {
  const colorName = `surface-${value}`;

  if (isSurfaceColor(value)) {
    return surfaceColors[value].toString();
  }

  if (isSurfaceColor(colorName)) {
    return surfaceColors[colorName].toString();
  }

  if (isStatusBackgroundColor(value)) {
    return statusBackgroundColors[value].toString();
  }

  if (isStatusColor(value)) {
    if (
      process.env['NODE_ENV'] !== 'production' &&
      process.env['NODE_ENV'] !== 'test'
    ) {
      console.warn(`${value} shouldn't be used as a backgroundColor.`);
    }
    return statusColors[value].toString();
  }

  if (isBadgeColor(value)) {
    return badgeBackgroundColors[value].toString();
  }

  return color(value);
});

export const fontColor = memoize((value) => {
  const colorName = `font-${value}`;
  if (isTextIconColor(colorName)) {
    return textIconColors[colorName].toString();
  }
  if (isStatusColor(value)) {
    return statusColors[value].toString();
  }
  return color(value);
});

/** @deprecated **/
export const color = memoize((value) => {
  if (typeof value !== 'string') {
    return;
  }
  if (
    process.env['NODE_ENV'] !== 'production' &&
    process.env['NODE_ENV'] !== 'test'
  ) {
    console.warn(`invalid color: ${value}`, new Error().stack);
  }
  if (throwErrorOnInvalidToken) {
    throw new Error(
      `The color token "${value}" is deprecated. Please use the new color tokens instead.`,
    );
  }

  if (isSurfaceColor(value)) {
    return surfaceColors[value].toString();
  }

  if (isStatusBackgroundColor(value)) {
    return statusBackgroundColors[value].toString();
  }

  if (isStrokeColor(value)) {
    return strokeColors[value].toString();
  }
  if (isTextIconColor(value)) {
    return textIconColors[value].toString();
  }

  if (value === 'surface' || value === 'surface-light') {
    return surfaceColors['surface-light'].toString();
  }

  if (value === 'surface-tint') {
    return toCSSColorValue(value, neutral[100]);
  }

  if (value === 'secondary-info') {
    return toCSSColorValue(value, neutral[700]);
  }

  if (value === 'surface-neutral') {
    return toCSSColorValue(value, neutral[400]);
  }

  const paletteMatches = paletteColorRegex.exec(String(value));
  if (
    typeof paletteMatches?.length === 'number' &&
    paletteMatches?.length >= 5
  ) {
    const [, type, gradeString, , alphaString] = paletteMatches;
    const grade = parseInt(gradeString, 10);
    const alpha =
      alphaString !== undefined ? parseInt(alphaString, 10) / 100 : undefined;

    invariant(isPaletteColorType(type), 'invalid color type');
    invariant(isPaletteColorGrade(grade), 'invalid color grade');
    invariant(isPaletteColorAlpha(alpha), 'invalid color alpha');

    const [customProperty, color] = getPaletteColor(type, grade, alpha);

    if (customProperty) {
      return toCSSValue(customProperty, color);
    }

    return color;
  }
  return value;
});

export const size = measure((value: unknown) => {
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

  return undefined;
});

export const spacing = measure((value: unknown) => {
  if (value === 'none') {
    return '0px';
  }

  return undefined;
});

type FontFamily = keyof typeof tokenTypography.fontFamilies;

const isFontFamily = (value: unknown): value is FontFamily =>
  typeof value === 'string' && value in tokenTypography.fontFamilies;

export const fontFamily = memoize((value: unknown): string | undefined => {
  if (!isFontFamily(value)) {
    return undefined;
  }

  const fontFamily = tokenTypography.fontFamilies[value]
    .map((fontFace) => (fontFace.includes(' ') ? `'${fontFace}'` : fontFace))
    .join(', ');

  return toCSSFontValue(value, fontFamily);
});

type FontScale = keyof typeof tokenTypography.fontScales;

const isFontScale = (value: unknown): value is FontScale =>
  typeof value === 'string' && value in tokenTypography.fontScales;

export const fontScale = memoize(
  (
    value: unknown,
  ):
    | {
        fontSize: string;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: string;
      }
    | undefined => {
    if (!isFontScale(value)) {
      return undefined;
    }

    const { fontSize, fontWeight, lineHeight, letterSpacing } =
      tokenTypography.fontScales[value];

    return {
      fontSize: `${fontSize / 16}rem`,
      fontWeight,
      lineHeight: `${lineHeight / 16}rem`,
      letterSpacing: `${letterSpacing / 16}rem`,
    };
  },
);
