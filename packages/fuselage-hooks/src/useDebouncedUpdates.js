import { useReducer, useState } from 'react';

import { useDebouncedCallback } from './useDebouncedCallback';

/**
 * Hook to debounce the state updater function returned by hooks like `useState()` and `useReducer()`.
 *
 * @param {[*,function]} pair - the state and updater pair which will be debounced
 * @param {*} pair.0 - the state value
 * @param {function} pair.1 - the state updater function
 * @param {number} delay - the number of milliseconds to delay the updater
 * @return {[any,function]} - a state value and debounced updater pair
 */
export const useDebouncedUpdates = ([value, update], delay) => [value, useDebouncedCallback(update, delay, [])];

/**
 * Hook to create a reduced state with a debounced `dispatch()` function.
 *
 * @param {function} reducer - the reducer function
 * @param {*} initializerArg - the initial state value or the argument passed to the initial state generator function
 * @param {function} initializer - the initial state generator function
 * @param {number} delay - the number of milliseconds to delay the updater
 * @return {[any,function]} - a state and debounced `dispatch()` function
 */
export const useDebouncedReducer = (reducer, initializerArg, initializer, delay) =>
  useDebouncedUpdates(useReducer(reducer, initializerArg, initializer), delay);

/**
 * Hook to create a state with a debounced setter function.
 *
 * @param {*|function} initialValue - the initial state value or the initial state generator function
 * @param {number} delay - the number of milliseconds to delay the updater
 * @return {[any,function]} - a state and debounced setter function
 */
export const useDebouncedState = (initialValue, delay) => useDebouncedUpdates(useState(initialValue), delay);
