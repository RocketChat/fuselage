export const useMergedRefs = (...refs) => (refValue) => {
  refs.filter(Boolean).forEach((ref) => {
    if (typeof ref === 'function') {
      ref(refValue);
      return;
    }

    ref.current = refValue;
  });
};
