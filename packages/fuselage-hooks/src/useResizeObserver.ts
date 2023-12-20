import type { RefCallback } from 'react';
import { useRef, useState, useCallback } from 'react';

import {
  extractContentBoxSizeFromObserver,
  extractBorderBoxSizeFromObserver,
} from './extractSizeFromObserver';
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
export const useResizeObserver =
  typeof window !== 'undefined'
    ? <T extends Element>({
        debounceDelay = 0,
      }: UseResizeObserverOptions = {}): {
        ref: RefCallback<T>;
        contentBoxSize: Partial<ResizeObserverSize>;
        borderBoxSize: Partial<ResizeObserverSize>;
      } => {
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

        const ref = useCallback(
          (node: T | null) => {
            if (node === null) {
              observer.disconnect();
              return;
            }

            observer.observe(node);
          },
          [observer]
        );

        return { ref, contentBoxSize, borderBoxSize };
      }
    : ({}: UseResizeObserverOptions = {}) => {
        const ref = useRef();

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
