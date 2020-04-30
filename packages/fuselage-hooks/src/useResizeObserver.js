// @flow

import { useRef, useEffect } from 'react';

import { useDebouncedState } from './useDebouncedUpdates';

type UseResizeObserverOptions = {
  debounceDelay: ?number,
};

export const useResizeObserver = ({
  debounceDelay,
} : UseResizeObserverOptions = {}) => {
  const ref = useRef<?Element>();
  const [{ width, height }, setSize] = useDebouncedState({}, debounceDelay);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.round(entry.contentRect.width);
      const height = Math.round(entry.contentRect.height);
      setSize({ width, height });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, width, height };
};
