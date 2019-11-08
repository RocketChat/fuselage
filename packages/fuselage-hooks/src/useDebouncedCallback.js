// @flow

import { useMemo } from 'react';

import { debounce } from './helpers';

/**
 * Hook to memoize a debounced version of a callback.
 *
 * @param callback the callback to debounce
 * @param delay the number of milliseconds to delay
 * @param deps the hook dependencies
 * @return a memoized and debounced callback
 */
export const useDebouncedCallback = (
  callback: (...Array<any>) => any,
  delay: number,
  deps?: Array<any>,
): ((...Array<any>) => any) =>
  useMemo(() => debounce(callback, delay), Array.isArray(deps) ? [delay, ...deps] : undefined);
