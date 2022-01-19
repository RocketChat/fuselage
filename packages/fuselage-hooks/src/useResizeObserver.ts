import { useRef, useEffect, RefObject } from 'react';

import { extractContentBoxSizeFromObserver } from './extractSizeFromObserver';
import { useDebouncedState } from './useDebouncedState';

/**
 * @ignore
 */
type UseResizeObserverOptions = {
  debounceDelay?: number;
};

/**
 * Hook to track dimension changes in a DOM element using the ResizeObserver API.
 *
 * @param options
 * @returns a triple containing the ref and the size information
 * @public
 */
export const useResizeObserver = <T extends Element>({
  debounceDelay,
}: UseResizeObserverOptions = {}): {
  ref: RefObject<T>;
  contentBoxSize: ResizeObserverSize;
  borderBoxSize: ResizeObserverSize;
} => {
  const ref = useRef<T>();
  const [{ borderBoxSize, contentBoxSize }, setSizes] = useDebouncedState<{
    borderBoxSize: ResizeObserverSize;
    contentBoxSize: ResizeObserverSize;
  }>(
    {
      borderBoxSize: {
        inlineSize: undefined,
        blockSize: undefined,
      },
      contentBoxSize: {
        inlineSize: undefined,
        blockSize: undefined,
      },
    },
    debounceDelay
  );

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setSizes({
        contentBoxSize: extractContentBoxSizeFromObserver(entry),
        borderBoxSize: extractBorderBoxSizeFromObserver(entry),
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [setSizes]);

  return { ref, contentBoxSize, borderBoxSize };
};
