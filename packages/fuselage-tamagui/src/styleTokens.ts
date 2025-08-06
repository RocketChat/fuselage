
import type { AllTokens } from './Theme';
import { theme } from './Theme';

type TokenGroup = keyof AllTokens;

const resolveToken = <T extends TokenGroup>(
  tokenGroup: T,
  token: keyof AllTokens[T] | (string & {})
) => {
  if (typeof token !== 'string' || !theme[tokenGroup][token]) {
    return;
  }
  return theme[tokenGroup][token];
};

export const size = (token: keyof AllTokens['sizes'] | (string & {})) =>
  resolveToken('sizes', token);

export const strokeColor = (
  token: keyof AllTokens['strokeColors'] | (string & {})
) => resolveToken('strokeColors', token);

export const fontColor = (token: keyof AllTokens['fontColors'] | (string & {})) =>
  resolveToken('fontColors', token);

export const fontFamily = (
  token: keyof AllTokens['fontFamily'] | (string & {})
) => {
  const family = resolveToken('fontFamily', token);
  if (!family) {
    return;
  }
  return family;
};

export const fontScale = (token: keyof AllTokens['fontScales'] | (string & {})) =>
  resolveToken('fontScales', token);

export const borderWidth = (
  token: keyof AllTokens['borderWidths'] | (string & {})
) => resolveToken('borderWidths', token);

export const borderRadius = (
  token: keyof AllTokens['borderRadius'] | (string & {})
) => resolveToken('borderRadius', token);

export const backgroundColor = (
  token: keyof AllTokens['backgroundColors'] | (string & {})
) => resolveToken('backgroundColors', token);

export const inset = (token: keyof AllTokens['insets'] | (string & {})) =>
  resolveToken('insets', token);

export const margin = (token: keyof AllTokens['margins'] | (string & {})) =>
  resolveToken('margins', token);

export const padding = (token: keyof AllTokens['paddings'] | (string & {})) =>
  resolveToken('paddings', token);
