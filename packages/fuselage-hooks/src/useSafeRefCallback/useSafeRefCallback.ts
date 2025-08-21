import { useCallback, useRef } from 'react';

type CallbackRefWithCleanup<T> = (node: T) => () => void;
type CallbackRef<T> = (node: T) => void;

type SafeCallbackRef<T> = CallbackRefWithCleanup<T> | CallbackRef<T>;

/**
 * useSafeRefCallback will call a cleanup function (returned from the passed callback)
 * whenever the component is re-rendered ( similar to useEffect, but in a callbackRef )
 *
 * Caveat: Usually, callback refs are called with `null` when the component is unmounted. The returned callback from this hook will only be called whenever `node !== null`.
 *  For cases where you want to do some action when the node is null, you should rely on the cleanup function to be called.
 *
 * @example
 *   const callback = useSafeRefCallback(
 *       useCallback(
 *            // node will always exist
 *           (node: HTMLDivElement) => {
 *               node.addEventListener('click', listener);
 *               return () => {
 *                   node.removeEventListener('click', listener);
 *               };
 *           },
 *           [listener],
 *       ),
 *   );
 *
 */
export const useSafeRefCallback = <T extends HTMLElement>(
  callback: SafeCallbackRef<T>,
) => {
  const cleanupRef = useRef<(() => void) | null>(null);

  const callbackRef = useCallback(
    (node: T | null): void => {
      if (node === null) {
        if (typeof cleanupRef.current === 'function') {
          cleanupRef.current();
          cleanupRef.current = null;
        }
        return;
      }

      const cleanup = callback(node);

      cleanupRef.current = cleanup || null;
    },
    [callback],
  );

  return callbackRef;
};
