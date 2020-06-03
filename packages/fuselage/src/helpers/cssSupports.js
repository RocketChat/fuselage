import { memoize } from './memoize';

export const cssSupports = memoize((value) => typeof window !== 'undefined' && window.CSS && window.CSS.supports(value));
