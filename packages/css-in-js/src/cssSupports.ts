import { memoize } from './memoize';

export const cssSupports = (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && window.CSS.supports)
  ? memoize((value: string) => window.CSS.supports(value))
  : () => false;
