// @flow

import { useEffect, useRef } from 'react';

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
export const useSafely = ([state, updater]: [any, () => any]) => {
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  });

  const safeUpdater = useMutableCallback((...args) => {
    if (!mountedRef.current) {
      return;
    }

    updater(...args);
  });

  return [state, safeUpdater];
};
