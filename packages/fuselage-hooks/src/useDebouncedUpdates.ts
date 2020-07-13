import {
  Dispatch,
  DispatchWithoutAction,
} from 'react';

import { useDebouncedCallback } from './useDebouncedCallback';

/**
 * Hook to debounce the state dispatcher function returned by hooks like `useState()` and `useReducer()`.
 *
 * @param pair - the state and dispatcher pair which will be debounced
 * @param delay - the number of milliseconds to delay the dispatcher
 * @returns a state value and debounced dispatcher pair
 * @public
 */
export function useDebouncedUpdates<S>(
  [state, dispatch]: [S, DispatchWithoutAction],
  delay: number
): [S, DispatchWithoutAction & {
  flush: () => void;
  cancel: () => void;
}];
export function useDebouncedUpdates<S, A>(
  [state, dispatch]: [S, Dispatch<A>],
  delay: number
): [S, Dispatch<A> & {
  flush: () => void;
  cancel: () => void;
}];
export function useDebouncedUpdates([state, dispatch]: [unknown, () => unknown], delay: number): [unknown, unknown] {
  return [state, useDebouncedCallback(dispatch, delay, [])];
}
