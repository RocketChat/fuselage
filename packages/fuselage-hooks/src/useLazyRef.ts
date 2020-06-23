import { useLayoutEffect, useRef, MutableRefObject } from 'react';

const EMPTY = Symbol('empty');

const useBrowserLazyRef = <T>(init: () => T): MutableRefObject<T> => {
  const ref = useRef<typeof EMPTY | T>(EMPTY);

  useLayoutEffect(() => {
    if (ref.current === EMPTY) {
      ref.current = init();
    }
  }, [init]);

  return ref as MutableRefObject<T>;
};

const useServerLazyRef = <T>(init: () => T): MutableRefObject<T> =>
  useRef(init());

/**
 * Hook equivalent to useRef, but with a lazy initialization for computed value.
 *
 * @param init the function the computes the ref value
 * @return the ref
 */
export const useLazyRef = typeof window !== 'undefined' && window.document
  ? useBrowserLazyRef
  : useServerLazyRef;
