import tokenTypography from '@rocket.chat/fuselage-tokens/typography.json';
import { memoize } from '@rocket.chat/memo';

import {
  isStatusBackgroundColor,
  isStatusColor,
  isStrokeColor,
  isSurfaceColor,
  isTextIconColor,
  statusBackgroundColors,
  strokeColors,
  surfaceColors,
  textIconColors,
  statusColors,
  throwErrorOnInvalidToken,
  isBadgeColor,
  badgeBackgroundColors,
} from './Theme';
import { toCSSFontValue } from './helpers/toCSSValue';

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

export const borderWidth = measure((value: unknown) => {
  if (value === 'none') {
    return '0px';
  }
  if (value === 'default') {
    return borderWidth('x1');
  }

  return undefined;
});

export const borderRadius = measure((value: unknown) => {
  if (value === 'none') {
    return '0px';
  }

  if (value === 'full') {
    return '9999px';
  }

  return undefined;
});

export const strokeColor = memoize((value: unknown): string | undefined => {
  const colorName = `stroke-${value}`;
  if (isStrokeColor(colorName)) {
    return strokeColors[colorName].toString();
  }
  return handleInvalidColor(value);
});

export const backgroundColor = memoize((value: unknown): string | undefined => {
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

  return handleInvalidColor(value);
});

export const fontColor = memoize((value: unknown): string | undefined => {
  const colorName = `font-${value}`;
  if (isTextIconColor(colorName)) {
    return textIconColors[colorName].toString();
  }
  if (isStatusColor(value)) {
    return statusColors[value].toString();
  }
  return handleInvalidColor(value);
});

const handleInvalidColor = (value: unknown): string | undefined => {
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

  return undefined;
};

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
