import { useEffect, useRef, Ref } from 'react';

type Options = {
  preventScroll?: boolean;
} | undefined;

/**
 * Hook to automatically request focus for an DOM element.
 *
 * @param isFocused if true, the focus will be requested
 * @param options options of the focus request
 * @return the ref which holds the element
 */
export const useAutoFocus = (
  isFocused = true,
  options?: Options,
): Ref<{ focus: (options?: Options) => void }> => {
  const elementRef = useRef<{ focus: (options?: Options) => void }>();

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
