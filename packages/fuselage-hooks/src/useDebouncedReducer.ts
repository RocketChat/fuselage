import {
  Dispatch,
  DispatchWithoutAction,
  Reducer,
  ReducerState,
  ReducerStateWithoutAction,
  ReducerWithoutAction,
  useReducer,
} from 'react';

import { useDebouncedUpdates } from './useDebouncedUpdates';

export function useDebouncedReducer<S, R extends ReducerWithoutAction<S>>(
  reducer: R,
  initialArg: S,
  init: undefined,
  delay: number
): [
  ReducerStateWithoutAction<R>,
  DispatchWithoutAction & {
    flush: () => void;
    cancel: () => void;
  }
];

export function useDebouncedReducer<S, R extends ReducerWithoutAction<S>, I>(
  reducer: R,
  initialArg: I,
  init: (arg: I) => ReducerStateWithoutAction<R>,
  delay: number
): [
  ReducerStateWithoutAction<R>,
  DispatchWithoutAction & {
    flush: () => void;
    cancel: () => void;
  }
];

export function useDebouncedReducer<S, A, R extends Reducer<S, A>>(
  reducer: R,
  initialArg: S,
  init: undefined,
  delay: number
): [
  ReducerState<R>,
  Dispatch<A> & {
    flush: () => void;
    cancel: () => void;
  }
];

/**
 * Hook to create a reduced state with a debounced `dispatch()` function.
 *
 * @param reducer - the reducer function
 * @param initialArg - the initial state value or the argument passed to the
 *        initial state generator function
 * @param init - the initial state generator function
 * @param delay - the number of milliseconds to delay the updater
 * @returns a state and debounced `dispatch()` function
 * @public
 */
export function useDebouncedReducer<S, A, R extends Reducer<S, A>, I>(
  reducer: R,
  initialArg: I,
  init: (arg: I) => ReducerState<R>,
  delay: number
): [
  ReducerState<R>,
  Dispatch<A> & {
    flush: () => void;
    cancel: () => void;
  }
] {
  return useDebouncedUpdates(useReducer(reducer, initialArg, init), delay);
}
