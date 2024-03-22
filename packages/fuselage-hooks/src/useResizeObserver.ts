import type { RefCallback, RefObject } from 'react';
import { useRef, useState, useCallback } from 'react';

import {
  extractContentBoxSizeFromObserver,
  extractBorderBoxSizeFromObserver,
} from './extractSizeFromObserver';
import { useDebouncedState } from './useDebouncedState';
import { useMergedRefs } from './useMergedRefs';

/**
 * @ignore
 */
type UseResizeObserverOptions = {
  debounceDelay?: number;
};

type UseResizeObserverReturnType<T> = {
  ref: RefObject<T>;
  contentBoxSize: Partial<ResizeObserverSize>;
  borderBoxSize: Partial<ResizeObserverSize>;
};

/**
 * Hook to track dimension changes in a DOM element using the ResizeObserver API.
 *
 * @param options
 * @returns a triple containing the ref and the size information
 * @public
 */
export const useResizeObserver =
  typeof window !== 'undefined'
    ? <T extends Element>({
        debounceDelay = 0,
      }: UseResizeObserverOptions = {}): UseResizeObserverReturnType<T> => {
        const [{ borderBoxSize, contentBoxSize }, setSizes] =
          useDebouncedState<{
            borderBoxSize: Partial<ResizeObserverSize>;
            contentBoxSize: Partial<ResizeObserverSize>;
          }>(
            {
              borderBoxSize: {
                inlineSize: undefined,
                blockSize: undefined,
              },
              contentBoxSize: {
                inlineSize: undefined,
                blockSize: undefined,
              },
            },
            debounceDelay
          );

        const [observer] = useState(
          () =>
            new ResizeObserver(([entry]) => {
              setSizes({
                contentBoxSize: extractContentBoxSizeFromObserver(entry),
                borderBoxSize: extractBorderBoxSizeFromObserver(entry),
              });
            })
        );

        const ref = useRef<T>();

        const callbackRef: RefCallback<T> = useCallback(
          (node: T | null) => {
            if (node === null) {
              observer.disconnect();
              return;
            }

            observer.observe(node);
          },
          [observer]
        );

        return {
          ref: useMergedRefs(ref, callbackRef) as unknown as RefObject<T>,
          contentBoxSize,
          borderBoxSize,
        };
      }
    : <T extends Element>(
        _props: UseResizeObserverOptions = {}
      ): UseResizeObserverReturnType<T> => {
        const ref = useRef<T>() as RefObject<T>;

        return {
          ref,
          borderBoxSize: {
            inlineSize: undefined,
            blockSize: undefined,
          },
          contentBoxSize: {
            inlineSize: undefined,
            blockSize: undefined,
          },
        };
      };
