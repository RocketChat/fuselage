import { useRef, useEffect, RefObject } from 'react';

import { useDebouncedState } from './useDebouncedState';

type Options = {
  debounceDelay?: number;
};

/**
 * Hook to track dimension changes in a DOM element using the ResizeObserver API.
 *
 * @param options
 * @param options.debounceDelay the number of milliseconds to delay updates
 * @return a triple containing the ref and the size information
 */
export const useResizeObserver = ({ debounceDelay }: Options = {}): {
  ref: RefObject<Element>;
  contentBoxSize: ResizeObserverSize;
  borderBoxSize: ResizeObserverSize;
} => {
  const ref = useRef<Element>();
  const [{ borderBoxSize, contentBoxSize }, setSizes] = useDebouncedState<{
    borderBoxSize: ResizeObserverSize;
    contentBoxSize: ResizeObserverSize;
  }>({
    borderBoxSize: {
      inlineSize: undefined,
      blockSize: undefined,
    },
    contentBoxSize: {
      inlineSize: undefined,
      blockSize: undefined,
    },
  }, debounceDelay);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { contentBoxSize, borderBoxSize }: any = entry;

      if (contentBoxSize && borderBoxSize) {
        setSizes({
          contentBoxSize,
          borderBoxSize,
        });
        return;
      }

      const { target, contentRect } = entry;
      const { width: contentBoxInlineSize, height: contentBoxBlockSize } = contentRect;
      const { width: borderBoxInlineSize, height: borderBoxBlockSize } = target.getBoundingClientRect();

      setSizes({
        contentBoxSize: {
          inlineSize: contentBoxInlineSize,
          blockSize: contentBoxBlockSize,
        },
        borderBoxSize: {
          inlineSize: borderBoxInlineSize,
          blockSize: borderBoxBlockSize,
        },
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
