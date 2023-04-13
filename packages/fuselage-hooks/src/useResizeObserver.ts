import type { RefObject } from 'react';
import { useRef, useEffect } from 'react';

import {
  extractContentBoxSizeFromObserver,
  extractBorderBoxSizeFromObserver,
} from './extractSizeFromObserver';
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
  debounceDelay = 0,
}: UseResizeObserverOptions = {}): {
  ref: RefObject<T>;
  contentBoxSize: ResizeObserverSize;
  borderBoxSize: ResizeObserverSize;
} => {
  const ref = useRef<T>(null);

  const [{ borderBoxSize, contentBoxSize }, setSizes] = useDebouncedState<{
    borderBoxSize: ResizeObserverSize;
    contentBoxSize: ResizeObserverSize;
  }>(
    {
      borderBoxSize: {
        inlineSize: 0,
        blockSize: 0,
      },
      contentBoxSize: {
        inlineSize: 0,
        blockSize: 0,
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
