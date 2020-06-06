import { useCallback, useRef } from 'react';

/**
 * Hook to create a stable callback from a mutable one.
 *
 * @param fn the mutable callback
 * @return a stable callback
 */
export const useMutableCallback = <T>(fn: (...args: unknown[]) => T): (...args: unknown[]) => T => {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  return useCallback((...args: unknown[]): T => fnRef.current.call(undefined, ...args), []);
};
