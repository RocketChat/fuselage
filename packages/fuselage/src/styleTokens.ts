import { cssSupports } from '@rocket.chat/css-in-js';
import tokenColors from '@rocket.chat/fuselage-tokens/colors.json';
import tokenTypography from '@rocket.chat/fuselage-tokens/typography.json';

import { memoize } from './helpers/memoize';

const measure = <V>(
  computeSpecialValue: (value: V) => string | undefined
): ((value: V) => string | undefined) =>
  memoize((value: V): string | undefined => {
    if (typeof value === 'number') {
      return `${value}px`;
    }

    if (typeof value !== 'string') {
      return undefined;
    }

    const xRegExp = /^(neg-|-)?x(\d+)$/;
    if (xRegExp.test(value)) {
      const [, negativeMark, measureInPixelsAsString] = xRegExp.exec(
        value
      ) as any;
      const measureInPixels =
        (negativeMark ? -1 : 1) * parseInt(measureInPixelsAsString, 10);
      return `${measureInPixels / 16}rem`;
    }

    if (computeSpecialValue) {
      return computeSpecialValue(value) || value;
    }

    return value;
  });

export const borderWidth = measure((value: 'none'): string | undefined => {
  if (value === 'none') {
    return '0px';
  }

  return undefined;
});

export const borderRadius = measure((value: 'none' | 'full'):
  | string
  | undefined => {
  if (value === 'none') {
    return '0px';
  }

  if (value === 'full') {
    return '9999px';
  }

  return undefined;
});

const mapTypeToPrefix = {
  neutral: 'n',
  primary: 'b',
  info: 'b',
  success: 'g',
  warning: 'y',
  danger: 'r',
} as const;

type PaletteColorType = keyof typeof mapTypeToPrefix;
type PaletteColorGrade =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

const getPaletteColor = (
  type: PaletteColorType,
  grade: PaletteColorGrade,
  alpha: number | undefined
): [string, string] => {
  const prefix = mapTypeToPrefix[type];

  const baseColor = tokenColors[`${prefix}${grade}`];

  const matches = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/.exec(
    baseColor
  );

  if (alpha !== undefined) {
    const [, r, g, b] = matches as any;
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
} as const;

type ForegroundColorType = keyof typeof foregroundColors;

const getForegroundColor = (type: ForegroundColorType): [string, string] => {
  const color = foregroundColors[type];

  return [`--rcx-color-foreground-${type}`, color];
};

const paletteColorRegex = /^(neutral|primary|info|success|warning|danger)-(\d+)(-(\d+))?$/;

export const color = memoize(
  (propValue: 'surface' | ForegroundColorType | string) => {
    if (typeof propValue !== 'string') {
      return;
    }

    const paletteMatches = paletteColorRegex.exec(String(propValue));

    if (paletteMatches) {
      const [, type, grade, , alphaString] = (paletteMatches as unknown) as [
        undefined,
        PaletteColorType,
        PaletteColorGrade,
        undefined,
        string
      ];
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

    if (propValue in foregroundColors) {
      const [customProperty, color] = getForegroundColor(
        propValue as ForegroundColorType
      );

      if (customProperty && cssSupports('(--foo: bar)')) {
        return `var(${customProperty}, ${color})`;
      }

      return color;
    }

    return propValue;
  }
);

export const size = measure((value: any): any => {
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

export const inset = measure((value: any): any => {
  if (value === 'none') {
    return '0px';
  }
});

export const margin = measure((value: any): any => {
  if (value === 'none') {
    return '0px';
  }
});

export const padding = measure((value: any): any => {
  if (value === 'none') {
    return '0px';
  }
});

export const fontFamily = memoize((value: any): any => {
  if (typeof value !== 'string') {
    return;
  }

  if (!tokenTypography.fontFamilies[value]) {
    return value;
  }

  const fontFamily = tokenTypography.fontFamilies[value]
    .map((fontFace: any) =>
      fontFace.includes(' ') ? `'${fontFace}'` : fontFace
    )
    .join(', ');

  if (cssSupports('(--foo: bar)')) {
    return `var(--rcx-font-family-${value}, ${fontFamily})`;
  }

  return fontFamily;
});

export const fontScale = (
  value: keyof typeof tokenTypography.fontScales
):
  | {
      fontSize: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
    }
  | undefined => {
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
