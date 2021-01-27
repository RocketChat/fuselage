import { memoize } from '@rocket.chat/memo';

/**
 * Memoized and SSR-compatible facade of CSS.supports API
 */
export const cssSupports: (value: string) => boolean =
  typeof window !== 'undefined' &&
  typeof window.CSS !== 'undefined' &&
  window.CSS.supports
    ? memoize((value: string) => window.CSS.supports(value))
    : () => false;
