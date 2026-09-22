import type { Ref, RefCallback, RefObject } from 'react';
import { useCallback, useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const isRefCallback = <T>(x: unknown): x is RefCallback<T> =>
  typeof x === 'function';
const isRefObject = <T>(x: unknown): x is RefObject<T | null> =>
  typeof x === 'object' && x !== null;

const attachRef = <T>(
  ref: Ref<T> | null | undefined,
  refValue: T,
): (() => void) => {
  if (isRefCallback<T>(ref)) {
    const cleanup = ref(refValue);
    return typeof cleanup === 'function' ? cleanup : () => ref(null);
  }

  if (isRefObject<T>(ref)) {
    ref.current = refValue;
    return () => {
      ref.current = null;
    };
  }

  return () => undefined;
};

/**
 * Hook to merge refs and callbacks refs into a single callback ref. Useful when your component need a internal ref
 * while receiving a forwared ref.
 *
 * The cleanup functions returned by the merged callback refs are forwarded, so they run when the node is detached,
 * whether React runs the cleanup returned by the merged ref or calls it with `null`.
 *
 * @param refs - the refs and callback refs that should be merged
 * @return a merged callback ref
 * @public
 */
export const useMergedRefs = <T>(
  ...refs: (Ref<T> | null | undefined)[]
): RefCallback<T> => {
  const refsRef = useRef(refs);
  const detachRef = useRef<() => void>(undefined);

  useIsomorphicLayoutEffect(() => {
    refsRef.current = refs;
  });

  return useCallback((refValue: T | null) => {
    detachRef.current?.();

    if (refValue === null) {
      return;
    }

    const cleanups = refsRef.current.map((ref) => attachRef(ref, refValue));
    const detach = () => {
      if (detachRef.current !== detach) {
        return;
      }

      detachRef.current = undefined;
      cleanups.forEach((cleanup) => cleanup());
    };
    detachRef.current = detach;

    return detach;
  }, []);
};
