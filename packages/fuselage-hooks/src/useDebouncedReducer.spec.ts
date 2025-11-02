import { it, expect, vi, beforeAll } from 'vitest';

import { renderHook, act } from './testing.ts';
import { useDebouncedReducer } from './useDebouncedReducer';

beforeAll(() => {
  vi.useFakeTimers();
});

const delay = 100;

it('is a debounced state updater', () => {
  const initialState = Symbol('initial');
  const newState = Symbol('new');
  const reducer = vi.fn(() => newState);
  const initialArg = initialState;
  const init = vi.fn((state) => state);

  const { result } = renderHook(() =>
    useDebouncedReducer(reducer, initialArg, init, delay),
  );

  expect(result.current[0]).toBe(initialState);

  act(() => {
    const [, dispatch] = result.current;
    dispatch();
  });

  expect(result.current[0]).toBe(initialState);

  act(() => {
    vi.advanceTimersByTime(delay);
  });

  expect(reducer).toHaveBeenCalledWith(initialState, undefined);
  expect(init).toHaveBeenCalledWith(initialArg);

  expect(result.current[0]).toBe(newState);
});
