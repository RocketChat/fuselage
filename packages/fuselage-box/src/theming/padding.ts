import { memoize } from '@rocket.chat/memo';

import { length } from './length';

export type Padding = number | 'none' | string;

export const padding = memoize((value: Padding): string | undefined => {
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
