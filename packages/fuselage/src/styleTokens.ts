import { cssSupports } from '@rocket.chat/css-supports';
import tokenColors from '@rocket.chat/fuselage-tokens/colors.json';
import tokenTypography from '@rocket.chat/fuselage-tokens/dist/typography.json';
import { memoize } from '@rocket.chat/memo';
import invariant from 'invariant';

import {
  backgroundColors,
  isBackgroundColor,
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
} from './Theme';

const measure = (
  computeSpecialValue?: (value: string) => null | undefined | string
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
});

export const borderRadius = measure((value: unknown) => {
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
} as const;

const isPaletteColorType = (
  type: unknown
): type is keyof typeof mapTypeToPrefix =>
  typeof type === 'string' && type in mapTypeToPrefix;

const isPaletteColorGrade = (
  grade: unknown
): grade is 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 =>
  typeof grade === 'number' &&
  grade % 100 === 0 &&
  grade / 100 >= 1 &&
  grade / 100 <= 9;

const isPaletteColorAlpha = (alpha: unknown): alpha is number | undefined =>
  alpha === undefined ||
  (typeof alpha === 'number' && alpha >= 0 && alpha <= 1);

const isPaletteColorRef = (ref: unknown): ref is keyof typeof tokenColors =>
  typeof ref === 'string' && ref in tokenColors;

const getPaletteColor = (
  type: keyof typeof mapTypeToPrefix,
  grade: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  alpha?: number
): [customPropertyName: string, value: string] => {
  const ref = `${mapTypeToPrefix[type]}${grade}`;
  invariant(isPaletteColorRef(ref), 'invalid color reference');

  const baseColor = tokenColors[ref];

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
  'primary': tokenColors.p500,
  'success': tokenColors.s500,
  'danger': tokenColors.d500,
  'warning': tokenColors.w700,
  'link': tokenColors.p500,
  'visited-link': tokenColors['s2-500'],
  'active-link': tokenColors.d500,
} as const;

const isForegroundColorRef = (
  ref: unknown
): ref is keyof typeof foregroundColors =>
  typeof ref === 'string' && ref in foregroundColors;

const getForegroundColor = (
  type: keyof typeof foregroundColors
): [customPropertyName: string, value: string] => {
  invariant(isForegroundColorRef(type), 'invalid foreground color');

  const color = foregroundColors[type];
  return [`--rcx-color-foreground-${type}`, color];
};

const paletteColorRegex =
  /^(neutral|primary|info|success|warning|danger)-(\d+)(-(\d+))?$/;

const cssSupportsVariable = cssSupports('(--foo: bar)');

type cssToValueType = <T extends string | { toString: () => string }>(
  label: string,
  value: T
) => string;
const toCSSValue: cssToValueType = cssSupportsVariable
  ? (((label, value) =>
      `var(--rcx-color-${label}, ${value})`) as cssToValueType)
  : (((label, value) => value) as cssToValueType);

export const strokeColor = memoize((value) => {
  const colorName = `stroke-${value}`;
  if (isStrokeColor(colorName)) {
    return strokeColors[colorName].toString();
  }
  return color(value);
});

export const backgroundColor = memoize((value) => {
  if (isSurfaceColor(value)) {
    return surfaceColors[value].toString();
  }
  const colorName = `background-${value}`;
  if (isBackgroundColor(colorName)) {
    return backgroundColors[colorName].toString();
  }

  if (isStatusBackgroundColor(value)) {
    return statusBackgroundColors[value].toString();
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
    process.env.NODE_ENV !== 'production' &&
    process.env.NODE_ENV !== 'test'
  ) {
    console.warn(`invalid color: ${value}`, new Error().stack);
  }
  if (throwErrorOnInvalidToken) {
    throw new Error(
      `The color token "${value}" is deprecated. Please use the new color tokens instead.`
    );
  }

  if (isSurfaceColor(value)) {
    return surfaceColors[value].toString();
  }
  if (isBackgroundColor(value)) {
    return backgroundColors[value].toString();
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
    return toCSSValue(value, neutral.n100);
  }

  if (value === 'secondary-info') {
    return toCSSValue(value, neutral.n700);
  }

  if (value === 'surface-neutral') {
    return toCSSValue(value, neutral.n400);
  }

  if (isForegroundColorRef(value)) {
    const [customProperty, color] = getForegroundColor(value);

    if (customProperty) {
      return toCSSValue(customProperty, color);
    }

    return color;
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
});

export const inset = measure((value: unknown) => {
  if (value === 'none') {
    return '0px';
  }
});

export const margin = measure((value: unknown) => {
  if (value === 'none') {
    return '0px';
  }
});

export const padding = measure((value: unknown) => {
  if (value === 'none') {
    return '0px';
  }
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

  if (cssSupportsVariable) {
    return `var(--rcx-font-family-${value}, ${fontFamily})`;
  }

  return fontFamily;
});

type FontScale = keyof typeof tokenTypography.fontScales;

const isFontScale = (value: unknown): value is FontScale =>
  typeof value === 'string' && value in tokenTypography.fontScales;

export const fontScale = memoize(
  (
    value: unknown
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
  }
);
