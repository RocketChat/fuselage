import { useReducer, useState, Dispatch, DispatchWithoutAction } from 'react';

import { useDebouncedCallback } from './useDebouncedCallback';
import { DebouncedFunction, DebounceableFunction } from './helpers';

type DebounceableDispatch<A> = (Dispatch<A> | DispatchWithoutAction) & DebounceableFunction;
type DebouncedDispatch<A> = (Dispatch<A> | DispatchWithoutAction) & DebouncedFunction;

/**
 * Hook to debounce the state updater function returned by hooks like `useState()` and `useReducer()`.
 *
 * @param pair - the state and updater pair which will be debounced
 * @param pair.0 - the state value
 * @param pair.1 - the state updater function
 * @param delay - the number of milliseconds to delay the updater
 * @return a state value and debounced updater pair
 */
export const useDebouncedUpdates = <S, A>(
  [value, update]: [S, DebounceableDispatch<A>],
  delay: number,
): [S, DebouncedDispatch<A>] => [value, useDebouncedCallback(update, delay, [])];

/**
 * Hook to create a reduced state with a debounced `dispatch()` function.
 *
 * @param reducer - the reducer function
 * @param initializerArg - the initial state value or the argument passed to the initial state generator function
 * @param initializer - the initial state generator function
 * @param delay - the number of milliseconds to delay the updater
 * @return a state and debounced `dispatch()` function
 */
export const useDebouncedReducer = <S, A>(
  reducer: (state: S, action: A) => S,
  initialArg: S | undefined,
  init: (initialArg: S) => S,
  delay: number,
): [S, DebouncedDispatch<A>] =>
  useDebouncedUpdates(useReducer(reducer, initialArg, init), delay);

/**
 * Hook to create a state with a debounced setter function.
 *
 * @param initialValue - the initial state value or the initial state generator function
 * @param delay - the number of milliseconds to delay the updater
 * @return a state and debounced setter function
 */
export const useDebouncedState = <S>(
  initialValue: S | (() => S),
  delay: number,
): [S, DebouncedDispatch<S | ((prevState: S) => S)>] => useDebouncedUpdates(useState(initialValue), delay);
