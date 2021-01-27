import { memoize } from '@rocket.chat/memo';

import { length } from './length';

export type BorderRadius = number | 'none' | 'full' | string;

export const borderRadius = memoize((value: BorderRadius):
  | string
  | undefined => {
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
    return '9999px';
  }

  return length(value);
});
