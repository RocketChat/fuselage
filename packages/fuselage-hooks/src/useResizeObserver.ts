import { useRef, useEffect, RefObject } from 'react';

import { useDebouncedState } from './useDebouncedUpdates';

type UseResizeObserverOptions = {
  debounceDelay?: number;
};

type BoxSize = {
  inlineSize: number;
  blockSize: number;
};

type BoxSizePair = {
  contentBoxSize?: BoxSize;
  borderBoxSize?: BoxSize;
};

type UseResizeObserverReturn = {
  ref: RefObject<Element>;
  contentBoxSize?: BoxSize;
  borderBoxSize?: BoxSize;
};

/**
 * Hook to track dimension changes in a DOM element using the ResizeObserver API.
 *
 * @param options
 * @param options.debounceDelay the number of milliseconds to delay updates
 * @return a triple containing the ref and the size information
 */
export const useResizeObserver = ({ debounceDelay }: UseResizeObserverOptions = {}): UseResizeObserverReturn => {
  const ref = useRef<Element>();
  const [{ contentBoxSize, borderBoxSize }, setSizes] = useDebouncedState<BoxSizePair>({}, debounceDelay);

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
  }, []);

  return { ref, contentBoxSize, borderBoxSize };
};
