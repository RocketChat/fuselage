import { cssSupports } from '@rocket.chat/css-supports';
import tokenColors from '@rocket.chat/fuselage-tokens/colors.json';
import tokenTypography from '@rocket.chat/fuselage-tokens/dist/typography.json';
import { memoize } from '@rocket.chat/memo';
import invariant from 'invariant';

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

const toCSSValue = cssSupportsVariable
  ? (label: string, value: string) => `var(--rcx-color-${label}, ${value})`
  : (label: string, value: string) => value;

const backgroundColors = {
  light: tokenColors.white,
  tint: tokenColors.n100,
};

type BackgroundColors = keyof typeof backgroundColors;

const surfaceColors = {
  'surface-light': tokenColors.white,
  'surface-tint': tokenColors.n100,
  'surface-neutral': tokenColors.n400,
  'surface-disabled': tokenColors.n100,
  'surface-hover': tokenColors.n400,
  'surface-info': tokenColors.i200,
  'surface-success': tokenColors.s200,
  'surface-warning': tokenColors.w200,
  'surface-danger': tokenColors.d200,
  'surface-service-1': tokenColors['s1-200'],
  'surface-service-2': tokenColors['s2-200'],
};

type SurfaceColors = keyof typeof surfaceColors;

const strokeColors = {
  'stroke-extra-light': tokenColors.n200,
  'stroke-light': tokenColors.n500,
  'stroke-medium': tokenColors.n600,
  'stroke-dark': tokenColors.n700,
  'stroke-extra-dark': tokenColors.n800,
  'stroke-extra-light-highlight': tokenColors.p200,
  'stroke-highlight': tokenColors.p500,
  'stroke-extra-light-error': tokenColors.d200,
  'stroke-error': tokenColors.d500,
};

type StrokeColor = keyof typeof strokeColors;

const textIconColors = {
  'font-white': tokenColors.white,
  'font-disabled': tokenColors.n500,
  'font-annotation': tokenColors.n600,
  'font-hint': tokenColors.n700,
  'font-text': tokenColors.n800,
  'font-title-labels': tokenColors.n900,
  'font-danger': tokenColors.d600,
  'font-secondary-info': tokenColors.n700,
  'font-on-info': tokenColors.i600,
  'font-on-success': tokenColors.s800,
  'font-on-warning': tokenColors.w900,
  'font-on-danger': tokenColors.d800,
  'font-on-service-1': tokenColors['s1-800'],
  'font-on-service-2': tokenColors['s2-600'],
};

type TextIconColors = keyof typeof textIconColors;

const isSurfaceColor = (color: unknown): color is SurfaceColors =>
  typeof color === 'string' && color in surfaceColors;

const isStrokeColor = (color: unknown): color is StrokeColor =>
  typeof color === 'string' && color in strokeColor;

const isTextIconColor = (color: unknown): color is TextIconColors =>
  typeof color === 'string' && color in textIconColors;

const isBackgroundColor = (color: unknown): color is BackgroundColors =>
  typeof color === 'string' && color in backgroundColors;

export const strokeColor = memoize((value) => {
  if (isStrokeColor(value)) {
    return toCSSValue(value, strokeColors[value]);
  }
  return color(value);
});

export const backgroundColor = memoize((value) => {
  if (isSurfaceColor(value)) {
    return toCSSValue(value, surfaceColors[value]);
  }
  if (isBackgroundColor(value)) {
    return toCSSValue(value, backgroundColors[value]);
  }
  return color(value);
});

export const fontColor = memoize((value) => {
  if (isTextIconColor(value)) {
    return toCSSValue(value, textIconColors[value]);
  }
  return color(value);
});

/** @deprecated **/
export const color = memoize((value) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(`invalid color: ${value}`, new Error().stack);
  }

  if (typeof value !== 'string') {
    return;
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

  if (value === 'surface-tint') {
    return toCSSValue(value, tokenColors.n100);
  }

  if (value === 'secondary-info') {
    return toCSSValue(value, tokenColors.n700);
  }

  if (value === 'surface-neutral') {
    return toCSSValue(value, tokenColors.n400);
  }

  if (isForegroundColorRef(value)) {
    const [customProperty, color] = getForegroundColor(value);

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
