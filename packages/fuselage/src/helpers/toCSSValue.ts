import { cssSupports } from '@rocket.chat/css-supports';

const cssSupportsVariable = cssSupports('(--foo: bar)');

type cssToValueType = <T extends string | { toString: () => string }>(
  label: string,
  value: T
) => string;
export const toCSSValue: cssToValueType = cssSupportsVariable
  ? (((label, value) => `var(${label}, ${value})`) as cssToValueType)
  : (((_label, value) => value) as cssToValueType);

export const toCSSFontValue = ((label: string, value: string) =>
  toCSSValue(`--rcx-font-family-${label}`, value)) as cssToValueType;
export const toCSSColorValue = ((label: string, value: string) =>
  toCSSValue(`--rcx-color-${label}`, value)) as cssToValueType;
