import { useCallback } from 'react';

/**
 * Hook to merge refs and callbacks refs into a single callback ref. Useful when your component need a internal ref
 * while receiving a forwared ref.
 *
 * @param {...(Object|function)} refs - the refs and callback refs that should be merged
 * @return {function} - a merged callback ref
 */
export const useMergedRefs = (...refs) => useCallback((refValue) => {
  refs.filter(Boolean).forEach((ref) => {
    if (typeof ref === 'function') {
      ref(refValue);
      return;
    }

    ref.current = refValue;
  });
}, refs);
