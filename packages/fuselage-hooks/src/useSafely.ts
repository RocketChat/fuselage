import { useEffect, useRef, Dispatch, DispatchWithoutAction } from 'react';

import { useMutableCallback } from './useMutableCallback';

/**
 * Hook that wraps pairs of state and dispatcher to provide a new dispatcher
 * which can be safe and asynchronically called even after the component unmounted.
 *
 * @param pair - the state and dispatcher pair which will be patched
 * @returns a state value and safe dispatcher pair
 * @public
 */
export const useSafely = <S, A, D extends DispatchWithoutAction | Dispatch<A>>(
  [state, dispatcher]: [S, Dispatch<A> | DispatchWithoutAction],
): [S, D] => {
  const dispatcherRef = useRef(dispatcher);

  useEffect(() => () => {
    dispatcherRef.current = () => undefined;
  }, []);

  const safeDispatcher = useMutableCallback((action?: A) => {
    const dispatcher = dispatcherRef.current;
    dispatcher(action);
  }) as D;

  return [state, safeDispatcher];
};
