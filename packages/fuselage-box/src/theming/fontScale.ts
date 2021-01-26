import tokenTypography from '@rocket.chat/fuselage-tokens/typography.json';

export type FontScale = keyof typeof tokenTypography['fontScales'];

export const fontScale = (
  value: FontScale
): {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
} => {
  const {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  } = tokenTypography.fontScales[value];

  return {
    fontSize: `${fontSize / 16}rem`,
    fontWeight: String(fontWeight),
    lineHeight: `${lineHeight / 16}rem`,
    letterSpacing: `${letterSpacing / 16}rem`,
  };
};
