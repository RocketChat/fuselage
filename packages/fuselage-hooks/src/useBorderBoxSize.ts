import { RefObject, useState } from 'react';

import { useDebouncedCallback } from './useDebouncedCallback';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useBorderBoxSize = (
  ref: RefObject<HTMLElement>,
  options: {
    debounceDelay?: number;
  } = {}
): Readonly<{
  inlineSize: number;
  blockSize: number;
}> => {
  const [size, setSize] = useState(() => ({
    inlineSize: ref.current?.offsetWidth ?? 0,
    blockSize: ref.current?.offsetHeight ?? 0,
  }));

  const setSizeWithDebounce = useDebouncedCallback(
    setSize,
    options.debounceDelay
  );

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (entries.length === 0) {
        return;
      }

      const borderBoxSize: ResizeObserverSize = Array.isArray(
        entries[0].borderBoxSize
      )
        ? entries[0].borderBoxSize[0]
        : entries[0].borderBoxSize;

      setSizeWithDebounce((prevSize) => {
        if (
          prevSize.inlineSize === borderBoxSize.inlineSize &&
          prevSize.blockSize === borderBoxSize.blockSize
        ) {
          return prevSize;
        }

        return {
          inlineSize: borderBoxSize.inlineSize,
          blockSize: borderBoxSize.blockSize,
        };
      });
    });

    observer.observe(element);

    setSize({
      inlineSize: element.offsetWidth,
      blockSize: element.offsetHeight,
    });

    return () => {
      observer.unobserve(element);
    };
  }, [setSizeWithDebounce]);

  return size;
};
