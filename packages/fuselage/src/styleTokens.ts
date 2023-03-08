import tokenColors from '@rocket.chat/fuselage-tokens/colors.json';
import tokenTypography from '@rocket.chat/fuselage-tokens/dist/typography.json';
import { memoize } from '@rocket.chat/memo';

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
import { invariant } from './helpers/invariant';
import {
  toCSSColorValue,
  toCSSFontValue,
  toCSSValue,
} from './helpers/toCSSValue';
import { warning } from './helpers/warning';

const xRegExp = /^(neg-|-)?x(\d+)$/;

const matchX = (value: string): number | undefined => {
  const matches = xRegExp.exec(value);
  if (matches) {
    const [, negativeMark, absoluteValueString] = matches;
    const absoluteValue = parseInt(absoluteValueString, 10);
    return (negativeMark ? -1 : 1) * absoluteValue;
  }

  return undefined;
};

const percentageRegExp = /^(\d+)(\.\d+)?%$/;

const matchPercentage = (value: string): `${number}%` | undefined => {
  const matches = percentageRegExp.exec(value);
  if (matches) {
    return matches[0] as `${number}%`;
  }

  return undefined;
};

const toREM = (value: number) => {
  value /= 16;
  return value ? `${value}rem` : '0';
};

const toPixels = (value: number) => (value ? `${value}px` : '0');

const toPixelsOrPercentage = (value: number | `${number}%`) => {
  if (typeof value === 'number') {
    return toPixels(value);
  }

  return value;
};

export type Size = number | `${number}%` | 'auto' | 'full' | 'sw' | 'sh';

export type Padding = number | `${number}%`;

export type Margin = number | `${number}%` | 'auto';

export type FontScale = keyof typeof tokenTypography.fontScales;

export type FontFamily = keyof typeof tokenTypography.fontFamilies;

export type FontSize = FontScale | number;

export type FontWeight =
  | FontScale
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type LetterSpacing = FontScale | number;

export type LineHeight = FontScale | number | `${number}%`;

export type BorderWidth = number;

export type BorderRadius = number | 'full';

export type BorderColor = keyof typeof strokeColors;

export const normalizeSize = memoize((value: unknown): Size => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (typeof value === 'number') {
    invariant(!Number.isNaN(value), 'Expected a number');
    invariant(Number.isFinite(value), 'Expected a finite number');
    invariant(value >= 0, 'Expected a non-negative number');
    warning(Number.isSafeInteger(value), 'Expected a safe integer');
    return value;
  }

  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  switch (value) {
    case 'none':
      warning.always('The value "none" is deprecated, use "0" instead');
      return 0;

    case 'auto':
    case 'full':
    case 'sw':
    case 'sh':
      return value;
  }

  const x = matchX(value);
  if (x !== undefined) {
    return normalizeSize(x);
  }

  const percentage = matchPercentage(value);
  if (percentage !== undefined) {
    return percentage;
  }

  return normalizeSize(parseFloat(value));
});

export const formatSize = memoize((value: Size): string => {
  switch (value) {
    case 'full':
      return '100%';

    case 'sw':
      return '100vw';

    case 'sh':
      return '100vh';

    case 'auto':
      return 'auto';

    default:
      return toPixelsOrPercentage(value);
  }
});

export const normalizePadding = memoize((value: unknown): Padding => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (typeof value === 'number') {
    invariant(!Number.isNaN(value), 'Expected a number');
    invariant(Number.isFinite(value), 'Expected a finite number');
    invariant(value >= 0, 'Expected a non-negative number');
    warning(Number.isSafeInteger(value), 'Expected a safe integer');
    return value;
  }

  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  switch (value) {
    case 'none':
      warning.always('The value "none" is deprecated, use "0" instead');
      return 0;
  }

  const x = matchX(value);
  if (x !== undefined) {
    return normalizePadding(x);
  }

  const percentage = matchPercentage(value);
  if (percentage !== undefined) {
    return percentage;
  }

  return normalizePadding(parseFloat(value));
});

export const formatPadding = memoize((value: Padding): string =>
  toPixelsOrPercentage(value)
);

export const normalizeMargin = memoize((value: unknown): Margin => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (typeof value === 'number') {
    invariant(!Number.isNaN(value), 'Expected a number');
    invariant(Number.isFinite(value), 'Expected a finite number');
    warning(Number.isSafeInteger(value), 'Expected a safe integer');
    return value;
  }

  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  switch (value) {
    case 'none':
      warning.always('The value "none" is deprecated, use "0" instead');
      return 0;

    case 'auto':
      return 'auto';
  }

  const x = matchX(value);
  if (x !== undefined) {
    return normalizeMargin(x);
  }

  const percentage = matchPercentage(value);
  if (percentage !== undefined) {
    return percentage;
  }

  return normalizeMargin(parseFloat(value));
});

export const formatMargin = memoize((value: Margin): string => {
  switch (value) {
    case 'auto':
      return 'auto';

    default:
      return toPixelsOrPercentage(value);
  }
});

export const normalizeFontSize = memoize((value: unknown): FontSize => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (typeof value === 'number') {
    invariant(!Number.isNaN(value), 'Expected a number');
    invariant(Number.isFinite(value), 'Expected a finite number');
    invariant(value >= 0, 'Expected a non-negative number');
    warning(Number.isSafeInteger(value), 'Expected a safe integer');
    return value;
  }

  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  const x = matchX(value);
  if (x !== undefined) {
    return normalizeFontSize(x);
  }

  invariant(isFontScale(value), 'Expected a valid font scale');
  return value;
});

export const formatFontSize = memoize((value: FontSize): string => {
  if (isFontScale(value)) {
    const fontScale = tokenTypography.fontScales[value];
    return toREM(fontScale.fontSize);
  }

  return toPixels(value);
});

export const normalizeFontWeight = memoize((value: unknown): FontWeight => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (typeof value === 'number') {
    invariant(
      value === 100 ||
        value === 200 ||
        value === 300 ||
        value === 400 ||
        value === 500 ||
        value === 600 ||
        value === 700 ||
        value === 800 ||
        value === 900,
      'Expected a valid font weight'
    );
    return value;
  }

  invariant(isFontScale(value), 'Expected a valid font scale');
  return value;
});

export const formatFontWeight = memoize((value: FontWeight): string => {
  if (isFontScale(value)) {
    const fontScale = tokenTypography.fontScales[value];
    return String(fontScale.fontWeight);
  }

  return String(value);
});

export const normalizeLetterSpacing = memoize(
  (value: unknown): LetterSpacing => {
    invariant(value !== undefined && value !== null, 'Expected a value');

    if (typeof value === 'number') {
      invariant(!Number.isNaN(value), 'Expected a number');
      invariant(Number.isFinite(value), 'Expected a finite number');
      warning(Number.isSafeInteger(value), 'Expected a safe integer');
      return value;
    }

    value = String(value);
    invariant(typeof value === 'string', 'Expected a string');

    const x = matchX(value);
    if (x !== undefined) {
      return normalizeLetterSpacing(x);
    }

    invariant(isFontScale(value), 'Expected a valid font scale');
    return value;
  }
);

export const formatLetterSpacing = memoize((value: LetterSpacing): string => {
  if (isFontScale(value)) {
    const fontScale = tokenTypography.fontScales[value];
    return toREM(fontScale.letterSpacing);
  }

  return toPixels(value);
});

export const normalizeLineHeight = memoize((value: unknown): LineHeight => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (typeof value === 'number') {
    invariant(!Number.isNaN(value), 'Expected a number');
    invariant(Number.isFinite(value), 'Expected a finite number');
    invariant(value >= 0, 'Expected a non-negative number');
    warning(Number.isSafeInteger(value), 'Expected a safe integer');
    return value;
  }

  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  const x = matchX(value);
  if (x !== undefined) {
    return normalizeLineHeight(x);
  }

  const percentage = matchPercentage(value);
  if (percentage !== undefined) {
    return percentage;
  }

  invariant(isFontScale(value), 'Expected a valid font scale');
  return value;
});

export const formatLineHeight = memoize((value: LineHeight): string => {
  if (isFontScale(value)) {
    const fontScale = tokenTypography.fontScales[value];
    return toREM(fontScale.lineHeight);
  }

  return toPixelsOrPercentage(value);
});

export const normalizeFontScale = memoize((value: unknown): FontScale => {
  value = String(value);
  invariant(isFontScale(value), 'Invalid font scale');
  return value as FontScale;
});

export const normalizeFontFamily = memoize((value: unknown): FontFamily => {
  value = String(value);
  invariant(isFontFamily(value), 'Invalid font family');
  return value as FontFamily;
});

export const formatFontFamily = memoize((value: FontFamily): string => {
  const fontFamily = tokenTypography.fontFamilies[value]
    .map((fontFace) => (fontFace.includes(' ') ? `'${fontFace}'` : fontFace))
    .join(', ');

  return toCSSFontValue(value, fontFamily);
});

export function normalizeEnum<TAltertives extends readonly string[]>(
  alternatives: TAltertives,
  value: unknown
): TAltertives[number] {
  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');
  assertEnum(alternatives, value);

  return value;
}

export function assertEnum<TAltertives extends readonly string[]>(
  alternatives: TAltertives,
  value: string
): asserts value is TAltertives[number] {
  invariant(
    alternatives.includes(value as TAltertives[number]),
    () =>
      `Expected one of ${alternatives
        .map((alternative) => `"${alternative}"`)
        .join(', ')}, got "${value}"`
  );
}

export const normalizeBorderWidth = memoize((value: unknown): BorderWidth => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (typeof value === 'number') {
    invariant(!Number.isNaN(value), 'Expected a number');
    invariant(Number.isFinite(value), 'Expected a finite number');
    invariant(value >= 0, 'Expected a non-negative number');
    warning(Number.isSafeInteger(value), 'Expected a safe integer');
    return value;
  }

  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  switch (value) {
    case 'none':
      return 0;

    case 'default':
      return 1;
  }

  const x = matchX(value);
  if (x !== undefined) {
    return normalizeBorderWidth(x);
  }

  throw new Error('Expected a valid border width');
});

export const formatBorderWidth = memoize((value: BorderWidth): string =>
  toPixels(value)
);

export const normalizeBorderRadius = memoize((value: unknown): BorderRadius => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (typeof value === 'number') {
    invariant(!Number.isNaN(value), 'Expected a number');
    invariant(Number.isFinite(value), 'Expected a finite number');
    invariant(value >= 0, 'Expected a non-negative number');
    warning(Number.isSafeInteger(value), 'Expected a safe integer');
    return value;
  }

  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  switch (value) {
    case 'none':
      return 0;

    case 'full':
      return 9999;
  }

  const x = matchX(value);
  if (x !== undefined) {
    return normalizeBorderWidth(x);
  }

  throw new Error('Expected a valid border width');
});

export const formatBorderRadius = memoize((value: BorderRadius): string => {
  if (value === 'full') {
    return '9999px';
  }

  return toPixels(value);
});

export const normalizeBorderColor = memoize((value: unknown): BorderColor => {
  invariant(value !== undefined && value !== null, 'Expected a value');

  if (isStrokeColor(value)) {
    return value;
  }

  const colorName = `stroke-${value}`;
  invariant(isStrokeColor(colorName), 'Expected a valid stroke color');
  return colorName;
});

export const formatBorderColor = memoize((value: BorderColor): string =>
  String(strokeColors[value])
);

const length = (fn?: (value: string) => string | undefined) =>
  memoize((value) => {
    if (typeof value === 'number') {
      return toPixels(value);
    }

    value = String(value);
    invariant(typeof value === 'string', 'Expected a string');

    const matches = xRegExp.exec(value);
    if (matches) {
      const [, negativeMark, absoluteValue] = matches;
      return absoluteValue === '0'
        ? '0'
        : `${negativeMark ? '-' : ''}${absoluteValue}px`;
    }

    return fn?.(value) ?? value;
  });

export const fraction = (value: unknown) => {
  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  if (value === '1') {
    return '100%';
  }

  const match = value.match(/^0?\.(\d{1,2})(\d*)$/);
  if (match) {
    const [, integer, decimal] = match;

    if (!decimal) {
      return `${integer.padEnd(2, '0')}%`;
    }

    return `${integer.padEnd(2, '0')}.${decimal}%`;
  }

  return value;
};

export const nonNegativeInteger = (value: unknown) => {
  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');
  return value;
};

export const integer = (value: unknown) => {
  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');
  return value;
};

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

export const strokeColor = memoize((value: unknown) => {
  const colorName = `stroke-${value}`;
  if (isStrokeColor(colorName)) {
    return String(strokeColors[colorName]);
  }
  return color(value);
});

export const backgroundColor = memoize((value: unknown) => {
  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  const colorName = `surface-${value}`;

  if (isSurfaceColor(value)) {
    return String(surfaceColors[value]);
  }

  if (isSurfaceColor(colorName)) {
    return String(surfaceColors[colorName]);
  }

  if (isStatusBackgroundColor(value)) {
    return String(statusBackgroundColors[value]);
  }

  if (isStatusColor(value)) {
    if (
      process.env.NODE_ENV !== 'production' &&
      process.env.NODE_ENV !== 'test'
    ) {
      console.warn(`${value} shouldn't be used as a backgroundColor.`);
    }
    return String(statusColors[value]);
  }

  if (isBadgeColor(value)) {
    return String(badgeBackgroundColors[value]);
  }

  return color(value);
});

export const fontColor = memoize((value: unknown) => {
  value = String(value);
  invariant(typeof value === 'string', 'Expected a string');

  const colorName = `font-${value}`;
  if (isTextIconColor(colorName)) {
    return String(textIconColors[colorName]);
  }
  if (isStatusColor(value)) {
    return String(statusColors[value]);
  }
  return color(value);
});

/** @deprecated **/
const color = memoize((value: unknown) => {
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
    return toCSSColorValue(value, neutral.n100);
  }

  if (value === 'secondary-info') {
    return toCSSColorValue(value, neutral.n700);
  }

  if (value === 'surface-neutral') {
    return toCSSColorValue(value, neutral.n400);
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

export const inset = length((value: string) => {
  if (value === 'none') {
    return '0';
  }
});

const isFontFamily = (value: unknown): value is FontFamily =>
  typeof value === 'string' && value in tokenTypography.fontFamilies;

const isFontScale = (value: unknown): value is FontScale =>
  typeof value === 'string' && value in tokenTypography.fontScales;
