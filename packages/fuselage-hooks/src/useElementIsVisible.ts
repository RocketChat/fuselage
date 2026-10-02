import type { RefObject } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import { useDebouncedState } from './useDebouncedState';
import { useSafely } from './useSafely';

declare global {
  interface Window {
    DISABLE_ANIMATION: boolean;
  }
}

export const useElementIsVisible = <T extends Element>(): [
  ref: RefObject<T | null>,
  isVisible: boolean,
] => {
  const innerRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | undefined>(undefined);

  const [menuVisibility, setMenuVisibility] = useSafely(
    useDebouncedState(false, 100),
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (observerRef.current !== observer) {
        return;
      }
      entries.forEach((entry) => {
        if (entry.target === innerRef.current) {
          setMenuVisibility(entry.isIntersecting);
        }
      });
    });
    observerRef.current = observer;

    if (innerRef.current) {
      observer.observe(innerRef.current);
    }

    return () => {
      observerRef.current = undefined;
      observer.disconnect();
    };
  }, [setMenuVisibility]);

  const ref = useCallback(
    (node: T | null) => {
      if (innerRef.current) {
        observerRef.current?.unobserve(innerRef.current);
      }
      innerRef.current = node;
      setMenuVisibility(false);

      if (node) {
        observerRef.current?.observe(node);
      }
    },
    [setMenuVisibility],
  ) as unknown as RefObject<T | null>;

  return [ref, menuVisibility];
};
