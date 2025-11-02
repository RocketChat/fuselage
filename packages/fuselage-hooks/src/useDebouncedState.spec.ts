import { it, expect, vi, beforeAll } from 'vitest';

import { renderHook, act } from './testing.ts';
import { useDebouncedState } from './useDebouncedState';

beforeAll(() => {
  vi.useFakeTimers();
});

const delay = 100;

it('is a debounced state updater', () => {
  const initialState = Symbol('initial');
  const newState = Symbol('new');

  const { result } = renderHook(() =>
    useDebouncedState<symbol>(initialState, delay),
  );

  expect(result.current[0]).toBe(initialState);

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
