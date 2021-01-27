import { cssSupports } from '@rocket.chat/css-in-js';
import tokenTypography from '@rocket.chat/fuselage-tokens/typography.json';
import { memoize } from '@rocket.chat/memo';

export type FontFamily = keyof typeof tokenTypography['fontFamilies'];

export const fontFamily = memoize((value: FontFamily): string | undefined => {
  if (!(value in tokenTypography.fontFamilies)) {
    return undefined;
  }

  const fontFamily = tokenTypography.fontFamilies[value]
    .map((fontFace) => (fontFace.includes(' ') ? `'${fontFace}'` : fontFace))
    .join(', ');

  if (cssSupports('(--foo: bar)')) {
    return `var(--rcx-font-family-${value}, ${fontFamily})`;
  }

  return fontFamily;
});
