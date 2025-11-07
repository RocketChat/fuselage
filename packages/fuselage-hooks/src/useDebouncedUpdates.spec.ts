import { useState } from 'react';
import { it, expect, vi, beforeAll } from 'vitest';

import { renderHook, act } from './testing.ts';
import { useDebouncedUpdates } from './useDebouncedUpdates';

beforeAll(() => {
  vi.useFakeTimers();
});

const delay = 100;

it('returns a debounced state dispatcher', () => {
  const initialState = Symbol('initial');
  const newState = Symbol('new');

  const { result } = renderHook(() =>
    useDebouncedUpdates(useState<symbol>(initialState), delay),
  );

  const [, dispatch] = result.current;

  expect(dispatch).toBeInstanceOf(Function);
  expect(dispatch.flush).toBeInstanceOf(Function);
  expect(dispatch.cancel).toBeInstanceOf(Function);

  act(() => {
    const [, setState] = result.current;
    setState(newState);
  });

  expect(result.current[0]).toBe(initialState);

  act(() => {
    vi.advanceTimersByTime(delay);
  });

  expect(result.current[0]).toBe(newState);
});
