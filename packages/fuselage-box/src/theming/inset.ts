import { memoize } from '@rocket.chat/memo';

import { length } from './length';

export type Inset = number | 'none' | string;

export const inset = memoize((value: Inset): string | undefined => {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  if (typeof value !== 'string') {
    return undefined;
  }

  if (value === 'none') {
    return '0px';
  }

  return length(value);
});
