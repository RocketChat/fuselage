import type { cssFn } from '@rocket.chat/css-in-js';

export type Utility<TValue> = {
  normalizeValue: (value: unknown) => TValue;
  name: (value: TValue) => string;
  cssFn: cssFn<[value: TValue]>;
  fallbackCssFn?: cssFn<[value: string]>;
};
