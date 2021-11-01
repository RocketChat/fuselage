import { renderHook, act } from '@testing-library/react-hooks';
import { useState, DispatchWithoutAction, Dispatch } from 'react';

import { useSafely } from './useSafely';

it('returns a new dispatcher that invokes the previous one', () => {
  const state = Symbol();
  const dispatcher = jest.fn();

  const { result } = renderHook(() =>
    useSafely<typeof state, never, DispatchWithoutAction>([state, dispatcher])
  );
  const [, newDispatcher] = result.current;

  act(() => {
    newDispatcher();
  });

  expect(dispatcher).toHaveBeenCalledTimes(1);
});

it('returns a new dispatcher that can be called after unmount', () => {
  const state = Symbol();
  const dispatcher = jest.fn();

  const { result, unmount } = renderHook(() =>
    useSafely<typeof state, never, DispatchWithoutAction>([state, dispatcher])
  );
  const [, newDispatcher] = result.current;

  unmount();
  newDispatcher();

  expect(dispatcher).toHaveBeenCalledTimes(0);
});

it('returns a new dispatcher that mutates the state', () => {
  const initialState = Symbol();
  const newState = Symbol();

  const { result } = renderHook(() =>
    useSafely(useState<symbol>(initialState))
  );
  const [, newDispatcher] = result.current;

  act(() => {
    newDispatcher(newState);
  });

  const [[valueA], [valueB]] = result.all as [symbol, Dispatch<any>][];
  expect(valueA).toBe(initialState);
  expect(valueB).toBe(newState);
});
