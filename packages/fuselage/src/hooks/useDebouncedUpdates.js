import { useReducer, useState } from 'react';

import { useDebouncedCallback } from './useDebouncedCallback';

export const useDebouncedUpdates = ([value, update], delay) => [value, useDebouncedCallback(update, delay, [])];

export const useDebouncedReducer = (reducer, initializerArg, initializer, delay) =>
  useDebouncedUpdates(useReducer(reducer, initializerArg, initializer), delay);

export const useDebouncedState = (initialValue, delay) => useDebouncedUpdates(useState(initialValue), delay);
