import { cssSupports } from '@rocket.chat/css-in-js';
import tokenTypography from '@rocket.chat/fuselage-tokens/typography.json';
import { memoize } from '@rocket.chat/memo';

export type FontScale = keyof typeof tokenTypography['fontScales'];

export const fontScale = memoize((value: FontScale):
  | {
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
      letterSpacing: string;
    }
  | undefined => {
  if (!(value in tokenTypography.fontScales)) {
    return undefined;
  }

  const {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  } = tokenTypography.fontScales[value];

  const values = {
    fontSize: `${fontSize / 16}rem`,
    fontWeight: String(fontWeight),
    lineHeight: `${lineHeight / 16}rem`,
    letterSpacing: `${letterSpacing / 16}rem`,
  };

  if (!cssSupports('(--foo: bar)')) {
    return values;
  }

  return {
    fontSize: `var(--rcx-font-scale-${value}-font-size, ${values.fontSize})`,
    fontWeight: `var(--rcx-font-scale-${value}-font-weight, ${values.fontWeight})`,
    lineHeight: `var(--rcx-font-scale-${value}-line-height, ${values.lineHeight})`,
    letterSpacing: `var(--rcx-font-scale-${value}-letter-spacing, ${values.letterSpacing})`,
  };
});
