import type { Ref, RefCallback, RefObject } from 'react';
import { useCallback } from 'react';

const isRefCallback = <T>(x: unknown): x is RefCallback<T> =>
  typeof x === 'function';
const isRefObject = <T>(x: unknown): x is RefObject<T | null> =>
  typeof x === 'object' && x !== null;
const isRefCleanup = (x: unknown): x is () => void | undefined =>
  typeof x === 'function';

const setRef = <T>(
  ref: Ref<T> | undefined,
  refValue: T,
): (() => void) | void => {
  if (isRefCallback<T>(ref)) {
    const result = ref(refValue);
    return isRefCleanup(result) ? result : () => ref(null);
  }

  if (isRefObject<T>(ref)) {
    ref.current = refValue;

    return () => {
      ref.current = null;
    };
  }
};

/**
 * Merges many refs and ref callbacks into a single ref callback. Useful when you need to attach
 * more than one ref to a component's lifecycle.
 *
 * @param refs - the ref objects and ref callbacks to be merged
 * @return the merged ref callback
 * @public
 */
export const useMergedRefs = <T>(
  ...refs: (Ref<T> | null | undefined)[]
): RefCallback<T> => {
  return useCallback((refValue: T) => {
    const refValues = refs.map((ref) => setRef(ref, refValue));

    return () => {
      refValues.forEach((value) => {
        if (!isRefCleanup(value)) {
          return;
        }

        value();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
};
