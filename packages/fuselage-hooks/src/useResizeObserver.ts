import { useRef, useEffect, RefObject } from 'react';

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
export const useResizeObserver = ({ debounceDelay }: UseResizeObserverOptions = {}): {
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
          contentBoxSize: Array.isArray(contentBoxSize) ? contentBoxSize[0] : contentBoxSize,
          borderBoxSize: Array.isArray(borderBoxSize) ? borderBoxSize[0] : borderBoxSize,
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
