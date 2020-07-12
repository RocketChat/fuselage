import { useEffect, useRef, Ref } from 'react';

/**
 * Hook to automatically request focus for an DOM element.
 *
 * @param isFocused - if true, the focus will be requested
 * @param options - options of the focus request
 * @returns the ref which holds the element
 * @public
 */
export const useAutoFocus = (
  isFocused = true,
  options?: FocusOptions,
): Ref<{ focus: (options?: FocusOptions) => void }> => {
  const elementRef = useRef<{ focus: (options?: FocusOptions) => void }>();

  const {
    preventScroll,
  } = options || {};

  useEffect(() => {
    if (isFocused && elementRef.current) {
      elementRef.current.focus({
        preventScroll,
      });
    }
  }, [elementRef, isFocused, preventScroll]);

  return elementRef;
};
