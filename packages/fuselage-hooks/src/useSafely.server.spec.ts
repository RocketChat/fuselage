/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { useSafely } from './useSafely';

it('returns the initial state', () => {
  const initialState = Symbol();
  const dispatcher = jest.fn();

  const { result } = renderHook(() => useSafely([initialState, dispatcher]));
  const [state] = result.current;

  expect(state).toBe(initialState);
});
