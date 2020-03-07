// @flow

import { useCallback, useRef } from 'react';

/**
 * Hook to create a stable callback from a mutable one.
 *
 * @param fn the mutable callback
 * @return a stable callback
 */
export const useMutableCallback = (fn: (...args : any[]) => any) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  return useCallback((...args: any[]) => fnRef.current && (0, fnRef.current)(...args), []);
};
