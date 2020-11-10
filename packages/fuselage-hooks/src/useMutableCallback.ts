import { useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Hook to create a stable callback from a mutable one.
 *
 * @param fn - the mutable callback
 * @returns a stable callback
 * @public
 */
export const useMutableCallback = <P extends any[], T>(
  fn: (...args: P) => T
): ((...args: P) => T) => {
  const fnRef = useRef(fn);
  const stableFnRef = useRef(
    (...args: P): T => fnRef.current.call(undefined, ...args)
  );

  useIsomorphicLayoutEffect(() => {
    fnRef.current = fn;
  });

  return stableFnRef.current;
};
