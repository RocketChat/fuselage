import { it, expect, vi, beforeAll } from 'vitest';

import { renderHook } from './testing.ts';
import { useDebouncedCallback } from './useDebouncedCallback';

beforeAll(() => {
  vi.useFakeTimers();
});

it('returns a debounced callback', () => {
  const halfDelay = 50;
  const delay = 2 * halfDelay;
  const fn = vi.fn();

  const { result } = renderHook(() => useDebouncedCallback(fn, delay));

  const debouncedCallback = result.current;
  expect(debouncedCallback).toBeInstanceOf(Function);
  expect(debouncedCallback.flush).toBeInstanceOf(Function);
  expect(debouncedCallback.cancel).toBeInstanceOf(Function);

  debouncedCallback();

  vi.advanceTimersByTime(halfDelay);

  expect(fn).toHaveBeenCalledTimes(0);

  vi.advanceTimersByTime(halfDelay);

  expect(fn).toHaveBeenCalledTimes(1);
});
