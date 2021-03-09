import { Ref, useRef, useState } from 'react';

import { useDebouncedCallback } from './useDebouncedCallback';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useBorderBoxSize = (
  options: {
    debounceDelay?: number;
  } = {}
): Readonly<{
  ref: Ref<HTMLElement>;
  inlineSize: number;
  blockSize: number;
}> => {
  const ref = useRef<HTMLElement>();
  const [size, setSize] = useState({
    inlineSize: 0,
    blockSize: 0,
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
      if (entries.length === 0 || entries[0].borderBoxSize.length === 0) {
        return;
      }

      const borderBoxSize = entries[0].borderBoxSize[0];

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

  return {
    ref,
    ...size,
  };
};
