// @flow

import { createRef, useState } from 'react';

/**
 * Hook equivalent to useRef, but with a lazy initialization for computed value.
 *
 * @param initializer the function the computes the ref value
 * @return the ref
 */
export const useLazyRef = <T>(initializer: () => T) =>
  useState(() => {
    const ref = createRef<T>();
    ref.current = initializer();
    return ref;
  })[0];
