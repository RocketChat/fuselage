import { useState, MutableRefObject } from 'react';

/**
 * Hook equivalent to useRef, but with a lazy initialization for computed value.
 *
 * @param init the function the computes the ref value
 * @return the ref
 */
export const useLazyRef = <T>(init: () => T): MutableRefObject<T> =>
  useState(() => ({ current: init() }))[0];
