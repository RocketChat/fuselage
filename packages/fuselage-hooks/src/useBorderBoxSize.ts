import { Ref, useRef } from 'react';

import { useDebouncedState } from './useDebouncedState';
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
          borderBoxSize: [borderBoxSize],
        },
      ]) => {
        setSize((prevSize) => {
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
      }
    );

    observer.observe(element);

    setSize({
      inlineSize: element.offsetWidth,
      blockSize: element.offsetHeight,
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
