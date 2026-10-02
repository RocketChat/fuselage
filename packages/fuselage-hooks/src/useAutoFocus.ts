import type { Ref } from 'react';
import { useCallback, useRef } from 'react';

/**
 * Hook to automatically request focus for an DOM element.
 *
 * @param isFocused - if true, the focus will be requested
 * @param options - options of the focus request
 * @returns the ref to attach to the element
 * @public
 */
export const useAutoFocus = <
  T extends { focus: (options?: FocusOptions) => void },
>(
  isFocused = true,
  options?: FocusOptions,
): Ref<T> => {
  const optionsRef = useRef(options);
  optionsRef.current = options;

  return useCallback(
    (element: T | null) => {
      if (isFocused) {
        element?.focus(optionsRef.current);
      }
    },
    [isFocused],
  );
};
