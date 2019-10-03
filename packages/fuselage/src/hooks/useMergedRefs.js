import { useCallback } from 'react';

export const useMergedRefs = (...refs) => useCallback((refValue) => {
  refs.filter(Boolean).forEach((ref) => {
    if (typeof ref === 'function') {
      ref(refValue);
      return;
    }

    ref.current = refValue;
  });
}, refs);
