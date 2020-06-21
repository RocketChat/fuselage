import { useRef, MutableRefObject } from 'react';

const EMPTY = Symbol('empty');

/**
 * Hook equivalent to useRef, but with a lazy initialization for computed value.
 *
 * @param init the function the computes the ref value
 * @return the ref
 */
export const useLazyRef = <T>(init: () => T): MutableRefObject<T> => {
  const ref = useRef<typeof EMPTY | T>(EMPTY);
  if (ref.current === EMPTY) {
    ref.current = init();
  }

  return ref as MutableRefObject<T>;
};
