import type { Ref, RefCallback, MutableRefObject } from 'react';
import { useCallback, useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const isRefCallback = <T>(x: unknown): x is RefCallback<T> =>
  typeof x === 'function';
const isMutableRefObject = <T>(x: unknown): x is MutableRefObject<T> =>
  typeof x === 'object';

/**
 * Hook to merge refs and callbacks refs into a single callback ref. Useful when your component need a internal ref
 * while receiving a forwared ref.
 *
 * @param refs - the refs and callback refs that should be merged
 * @return a merged callback ref
 * @public
 */
export const useMergedRefs = <T>(...refs: Ref<T>[]): RefCallback<T> => {
  const refsRef = useRef(refs);

  useIsomorphicLayoutEffect(() => {
    refsRef.current = refs;
  });

  return useCallback((refValue: T) => {
    const refs = refsRef.current;

    refs.filter(Boolean).forEach((ref) => {
      if (isRefCallback<T>(ref)) {
        ref(refValue);
        return;
      }

      if (isMutableRefObject<T>(ref)) {
        ref.current = refValue;
      }
    });
  }, []);
};
