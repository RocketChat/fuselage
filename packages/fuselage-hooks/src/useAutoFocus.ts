import type { Ref } from 'react';
import { useEffect, useRef } from 'react';

/**
 * Hook to automatically request focus for an DOM element.
 *
 * @param isFocused - if true, the focus will be requested
 * @param options - options of the focus request
 * @returns the ref which holds the element
 * @public
 * @deprecated in favor of focus provided by react-hook-form or the `autoFocus` attribute
 */
export const useAutoFocus = <
  T extends { focus: (options?: FocusOptions) => void },
>(
  isFocused = true,
  options?: FocusOptions,
): Ref<T> => {
  const elementRef = useRef<T>(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    if (isFocused && elementRef.current) {
      elementRef.current.focus(optionsRef.current);
    }
  }, [elementRef, isFocused]);

  return elementRef;
};
