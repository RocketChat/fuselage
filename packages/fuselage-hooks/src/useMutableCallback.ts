import { useCallback, useRef } from 'react';

/**
 * Hook to create a stable callback from a mutable one.
 *
 * @param fn the mutable callback
 * @return a stable callback
 */
export const useMutableCallback = <P extends any[], T>(
  fn: (...args: P) => T,
): (...args: P) => T => {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  return useCallback(
    (...args: P): T => fnRef.current.call(undefined, ...args),
    [],
  );
};
