import { useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Hook that lets you extract non-reactive logic into an *effect event*.
 *
 * An effect event is a function that is a part of an effect logic, but it behaves a lot more like
 * an event handler. The logic inside it is not reactive, and it always “sees” the latest values of
 * your props and state.
 *
 * @param fn - the mutable callback
 * @returns a stable callback
 * @public
 */
export const useEffectEvent = <P extends any[], T>(
  fn: (...args: P) => T
): ((...args: P) => T) => {
  const fnRef = useRef(fn);
  const stableFnRef = useRef(
    (...args: P): T => fnRef.current.call(undefined, ...args)
  );

  useIsomorphicLayoutEffect(() => {
    fnRef.current = fn;
  });

  return stableFnRef.current;
};

/**
 * Hook to create a stable callback from a mutable one.
 *
 * @deprecated use {@link useEffectEvent} instead
 * @param fn - the mutable callback
 * @returns a stable callback
 * @public
 */
export const useMutableCallback = useEffectEvent;
