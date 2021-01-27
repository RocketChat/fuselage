import { memoize } from '@rocket.chat/memo';

import { length } from './length';

export type Margin = number | 'none' | string;

export const margin = memoize((value: Margin): string | undefined => {
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
