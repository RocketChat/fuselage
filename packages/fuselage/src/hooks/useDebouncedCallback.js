import { useMemo } from 'react';

import { debounce } from '../helpers';

/**
 * Hook to memoize a debounced version of a callback.
 *
 * @param {function} callback the callback to debounce
 * @param {number} delay the number of milliseconds to delay
 * @param {*[]|undefined} deps the hook dependencies
 * @return {function} a memoized and debounced callback
 */
export const useDebouncedCallback = (callback, delay, deps) =>
  useMemo(() => debounce(callback, delay), Array.isArray(deps) ? [callback, delay, ...deps] : undefined);
