import { useRef, useLayoutEffect } from 'react';

export const useBrowserMutableCallback = <P extends any[], T>(
  fn: (...args: P) => T,
): (...args: P) => T => {
  const fnRef = useRef(fn);
  const stableFnRef = useRef((...args: P): T => fnRef.current.call(undefined, ...args));

  useLayoutEffect(() => {
    fnRef.current = fn;
  });

  return stableFnRef.current;
};

export const useServerMutableCallback = <P extends any[], T>(
  fn: (...args: P) => T,
): (...args: P) => T => fn;

/**
 * Hook to create a stable callback from a mutable one.
 *
 * @param fn the mutable callback
 * @return a stable callback
 */
export const useMutableCallback = typeof window !== 'undefined' && window.document
  ? useBrowserMutableCallback
  : useServerMutableCallback;
