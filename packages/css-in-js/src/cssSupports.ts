import { memoize } from './memoize';

export const cssSupports = (typeof CSS !== 'undefined' && CSS.supports)
  ? memoize((value: string) => CSS.supports(value))
  : () => false;
