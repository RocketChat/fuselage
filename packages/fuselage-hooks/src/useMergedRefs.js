// @flow

import { useCallback } from 'react';
import type { Ref } from 'react';

/**
 * Hook to merge refs and callbacks refs into a single callback ref. Useful when your component need a internal ref
 * while receiving a forwared ref.
 *
 * @param refs - the refs and callback refs that should be merged
 * @return a merged callback ref
 */
export const useMergedRefs = (...refs: Array<Ref<any>>) => useCallback((refValue: any) => {
  refs.filter(Boolean).forEach((ref) => {
    if (typeof ref === 'function') {
      ref(refValue);
      return;
    }

    if (typeof ref === 'object') {
      ref.current = refValue;
    }
  });
}, refs);
