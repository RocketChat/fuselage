// @flow

import { useReducer, useState } from 'react';

import { useDebouncedCallback } from './useDebouncedCallback';

/**
 * Hook to debounce the state updater function returned by hooks like `useState()` and `useReducer()`.
 *
 * @param pair - the state and updater pair which will be debounced
 * @param pair.0 - the state value
 * @param pair.1 - the state updater function
 * @param delay - the number of milliseconds to delay the updater
 * @return a state value and debounced updater pair
 */
export const useDebouncedUpdates = (
  [value, update]: [any, () => any],
  delay: number,
) => [value, useDebouncedCallback(update, delay, [])];

/**
 * Hook to create a reduced state with a debounced `dispatch()` function.
 *
 * @param reducer - the reducer function
 * @param initializerArg - the initial state value or the argument passed to the initial state generator function
 * @param initializer - the initial state generator function
 * @param delay - the number of milliseconds to delay the updater
 * @return a state and debounced `dispatch()` function
 */
export const useDebouncedReducer = (
  reducer: (any, any) => any,
  initializerArg: any,
  initializer: (any) => any,
  delay: number,
) =>
  useDebouncedUpdates(useReducer(reducer, initializerArg, initializer), delay);

/**
 * Hook to create a state with a debounced setter function.
 *
 * @param initialValue - the initial state value or the initial state generator function
 * @param delay - the number of milliseconds to delay the updater
 * @return a state and debounced setter function
 */
export const useDebouncedState = (
  initialValue: any | () => any,
  delay: number,
) => useDebouncedUpdates(useState(initialValue), delay);
