import { useEffect, useRef, Ref } from 'react';

/**
 * Hook to automatically request focus for an DOM element.
 *
 * @param isFocused - if true, the focus will be requested
 * @param options - options of the focus request
 * @returns the ref which holds the element
 * @public
 * @deprecated
 */
export const useAutoFocus = <
  T extends { focus: (options?: FocusOptions) => void }
>(
  isFocused = true,
  options?: FocusOptions
): Ref<T> => {
  const elementRef = useRef<T>();

  const { preventScroll } = options || {};

  useEffect(() => {
    if (isFocused && elementRef.current) {
      elementRef.current.focus({
        preventScroll,
      });
    }
  }, [elementRef, isFocused, preventScroll]);

  return elementRef;
};
