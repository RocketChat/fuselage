import { memoize } from '@rocket.chat/memo';

import { length } from './length';

export type Size = number | 'none' | 'full' | 'sw' | 'sh' | string;

export const size = memoize((value: Size): string | undefined => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  if (typeof value !== 'string') {
    return undefined;
  }

  if (value === 'none') {
    return '0px';
  }

  if (value === 'full') {
    return '100%';
  }

  if (value === 'sw') {
    return '100vw';
  }

  if (value === 'sh') {
    return '100vh';
  }

  return length(value);
});
