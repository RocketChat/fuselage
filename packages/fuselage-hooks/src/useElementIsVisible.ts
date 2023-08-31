import { useDebouncedState, useSafely } from '@rocket.chat/fuselage-hooks';
import type { RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    DISABLE_ANIMATION: boolean;
  }
}

export const useElementIsVisible = <T extends Element>(): [
  ref: RefObject<T>,
  isVisible: boolean
] => {
  const innerRef = useRef<T>();

  const [menuVisibility, setMenuVisibility] = useSafely(
    useDebouncedState(false, 100)
  );

  const [observer] = useState(
    () =>
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setMenuVisibility(entry.isIntersecting);
        });
      })
  );

  useEffect(
    () => () => {
      observer.disconnect();
    },
    [observer]
  );

  const ref = useCallback(
    (node: T | null) => {
      if (node === null) {
        setMenuVisibility(false);
        return;
      }
      innerRef.current = node;

      observer.observe(innerRef.current);
    },
    [observer, setMenuVisibility]
  ) as unknown as RefObject<T>;

  return [ref, menuVisibility];
};
