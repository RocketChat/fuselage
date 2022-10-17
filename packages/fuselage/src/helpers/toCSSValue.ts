import { cssSupports } from '@rocket.chat/css-supports';

const cssSupportsVariable = cssSupports('(--foo: bar)');

type cssToValueType = <T extends string | { toString: () => string }>(
  label: string,
  value: T
) => string;
export const toCSSValue: cssToValueType = cssSupportsVariable
  ? (((label, value) => `var(${label}, ${value})`) as cssToValueType)
  : (((label, value) => value) as cssToValueType);

export const toCSSFontValue = ((label: string, value: string) =>
  toCSSValue(`var(--rcx-font-family-${label}`, value)) as cssToValueType;
export const toCSSColorValue = ((label: string, value: string) =>
  toCSSValue(`var(--rcx-color-${label}`, value)) as cssToValueType;
