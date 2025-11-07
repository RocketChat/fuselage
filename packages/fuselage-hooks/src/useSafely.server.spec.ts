import { it, expect, vi } from 'vitest';

import { renderHook } from './testing.ts';
import { useSafely } from './useSafely';

it('returns the initial state', () => {
  const initialState = Symbol();
  const dispatcher = vi.fn();

  const { result } = renderHook(() => useSafely([initialState, dispatcher]));
  const [state] = result.current;

  expect(state).toBe(initialState);
});
