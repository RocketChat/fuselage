import { memoize } from '@rocket.chat/memo';

export const cssSupports: (value: string) => boolean =
  typeof window !== 'undefined' &&
  typeof window.CSS !== 'undefined' &&
  window.CSS.supports
    ? memoize((value: string) => window.CSS.supports(value))
    : () => false;
