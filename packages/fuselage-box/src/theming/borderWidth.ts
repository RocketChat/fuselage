import { memoize } from '@rocket.chat/memo';

import { length } from './length';

export type BorderWidth = number | 'none' | string;

export const borderWidth = memoize((value: BorderWidth): string | undefined => {
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
