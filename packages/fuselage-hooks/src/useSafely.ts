import { useEffect, useRef, Dispatch, DispatchWithoutAction } from 'react';

import { useMutableCallback } from './useMutableCallback';

/**
 * Hook that wraps pairs of state and updater to provide a new updater which
 * can be safe and asynchronically called even after the component unmounted.
 *
 * @param pair - the state and updater pair which will be patched
 * @param pair.0 - the state value
 * @param pair.1 - the state updater function
 * @return a state value and safe updater pair
 */
export const useSafely = <S, A>([state, updater]: [S, Dispatch<A> | DispatchWithoutAction]): [S, Dispatch<A> | DispatchWithoutAction] => {
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  });

  const safeUpdater = useMutableCallback((action?: A) => {
    if (!mountedRef.current) {
      return;
    }

    updater(action);
  });

  return [state, safeUpdater];
};
