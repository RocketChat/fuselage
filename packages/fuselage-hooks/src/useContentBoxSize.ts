import { Ref, useRef } from 'react';

import { useDebouncedState } from './useDebouncedState';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useContentBoxSize = (
  options: {
    debounceDelay?: number;
  } = {}
): Readonly<{
  ref: Ref<HTMLElement>;
  inlineSize: number;
  blockSize: number;
}> => {
  const ref = useRef<HTMLElement>();
  const [size, setSize] = useDebouncedState(
    {
      inlineSize: 0,
      blockSize: 0,
    },
    options.debounceDelay
  );

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver(
      ([
        {
          contentBoxSize: [contentBoxSize],
        },
      ]) => {
        setSize((prevSize) => {
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
      }
    );

    observer.observe(element);

    setSize({
      inlineSize: element.clientWidth,
      blockSize: element.clientHeight,
    });

    return () => {
      observer.unobserve(element);
    };
  }, [setSize]);

  return {
    ref,
    ...size,
  };
};
