// @flow

import { useRef, useEffect } from 'react';

import { useDebouncedState } from './useDebouncedUpdates';

type UseResizeObserverOptions = {
  debounceDelay: ?number,
};

type UseResizeObserverReturn = {
  ref: { current: ?Element },
  contentBoxSize: {
    inlineSize: number,
    blockSize: number,
  },
  borderBoxSize: {
    inlineSize: number,
    blockSize: number,
  },
};

/**
 * Hook to track dimension changes in a DOM element using the ResizeObserver API.
 *
 * @param options
 * @param options.debounceDelay the number of milliseconds to delay updates
 * @return a triple containing the ref and the size information
 */
export const useResizeObserver = ({
  debounceDelay,
}: UseResizeObserverOptions = {}): UseResizeObserverReturn => {
  const ref = useRef<?Element>();
  const [{ contentBoxSize, borderBoxSize }, setSizes] = useDebouncedState({}, debounceDelay);

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
