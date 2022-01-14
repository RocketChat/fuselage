import { RefObject, useState } from 'react';

import { extractSizeFromObserver } from './extractSizeFromObserver';
import { useDebouncedCallback } from './useDebouncedCallback';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useContentBoxSize = (
  ref: RefObject<HTMLElement>,
  options: {
    debounceDelay?: number;
  } = {}
): Readonly<{
  inlineSize: number;
  blockSize: number;
}> => {
  const [size, setSize] = useState({
    inlineSize: ref.current?.clientWidth ?? 0,
    blockSize: ref.current?.clientHeight ?? 0,
  });

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

      const contentBoxSize = extractSizeFromObserver(
        entries[0],
        'contentBoxSize'
      );

      setSizeWithDebounce((prevSize) => {
        if (
          prevSize.inlineSize === contentBoxSize.inlineSize &&
          prevSize.blockSize === contentBoxSize.blockSize
        ) {
          return prevSize;
        }

        return {
          inlineSize: contentBoxSize.inlineSize,
          blockSize: contentBoxSize.blockSize,
        };
      });
    });

    observer.observe(element);

    setSize({
      inlineSize: element.clientWidth,
      blockSize: element.clientHeight,
    });

    return () => {
      observer.unobserve(element);
    };
  }, [setSizeWithDebounce]);

  return size;
};
