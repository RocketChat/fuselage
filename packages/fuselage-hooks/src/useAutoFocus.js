// @flow

import { useEffect, useRef } from 'react';

type FocusOptions = {
  preventScroll?: boolean,
} | typeof undefined;

/**
 * Hook to automatically request focus for an DOM element.
 *
 * @param isFocused if true, the focus will be requested
 * @param options options of the focus request
 * @return the ref which holds the element
 */
export const useAutoFocus = (isFocused: boolean = true, options: FocusOptions): { current: ?HTMLElement } => {
  const elementRef = useRef<?HTMLElement>();

  useEffect(() => {
    if (isFocused && elementRef.current) {
      elementRef.current.focus(options);
    }
  }, [elementRef, isFocused]);

  return elementRef;
};
