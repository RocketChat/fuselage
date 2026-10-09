import { useState } from 'react';

import { renderHook, act } from './testing';
import { useDebouncedCallback } from './useDebouncedCallback';

beforeAll(() => {
  jest.useFakeTimers();
});

it('returns a debounced callback', () => {
  const halfDelay = 50;
  const delay = 2 * halfDelay;
  const fn = jest.fn();

  const { result } = renderHook(() => useDebouncedCallback(fn, delay));

  const debouncedCallback = result.current;
  expect(debouncedCallback).toBeInstanceOf(Function);
  expect(debouncedCallback.flush).toBeInstanceOf(Function);
  expect(debouncedCallback.cancel).toBeInstanceOf(Function);

  debouncedCallback();

  jest.advanceTimersByTime(halfDelay);

  expect(fn).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(halfDelay);

  expect(fn).toHaveBeenCalledTimes(1);
});

it("returns the same callback if deps don't change", () => {
  const delay = 100;
  const { result, rerender } = renderHook(() =>
    useDebouncedCallback(() => undefined, delay, []),
  );

  const initialCallback = result.current;

  act(() => {
    rerender();
  });

  expect(result.current).toBe(initialCallback);
});

it('returns another callback if deps change', () => {
  const delay = 100;
  const initialDep = Symbol('initial');
  const newDep = Symbol('new');

  const { result } = renderHook(() => {
    const [dep, setDep] = useState<symbol>(initialDep);
    const debouncedCallback = useDebouncedCallback(() => undefined, delay, [
      dep,
    ]);

    return { setDep, debouncedCallback };
  });

  const initialCallback = result.current.debouncedCallback;

  act(() => {
    const { setDep } = result.current;
    setDep(newDep);
  });

  expect(result.current.debouncedCallback).not.toBe(initialCallback);
});

it('returns another callback if delay change', () => {
  const initialDelay = 100;
  const newDelay = 150;

  const { result } = renderHook(() => {
    const [delay, setDelay] = useState(initialDelay);
    const debouncedCallback = useDebouncedCallback(() => undefined, delay, []);

    return { setDelay, debouncedCallback };
  });

  const initialCallback = result.current.debouncedCallback;

  act(() => {
    const { setDelay } = result.current;
    setDelay(newDelay);
  });

  expect(result.current.debouncedCallback).not.toBe(initialCallback);
});

it('invokes the pending call once when flushed', () => {
  const delay = 100;
  const fn = jest.fn();

  const { result } = renderHook(() => useDebouncedCallback(fn, delay));

  result.current('value');
  result.current.flush();

  expect(fn).toHaveBeenCalledTimes(1);
  expect(fn).toHaveBeenLastCalledWith('value');

  jest.advanceTimersByTime(delay);

  expect(fn).toHaveBeenCalledTimes(1);
});

it('does not invoke the callback again when flushed after the delay', () => {
  const delay = 100;
  const fn = jest.fn();

  const { result } = renderHook(() => useDebouncedCallback(fn, delay));

  result.current();
  jest.advanceTimersByTime(delay);

  expect(fn).toHaveBeenCalledTimes(1);

  result.current.flush();

  expect(fn).toHaveBeenCalledTimes(1);
});

it('does not invoke a cancelled call when flushed', () => {
  const delay = 100;
  const fn = jest.fn();

  const { result } = renderHook(() => useDebouncedCallback(fn, delay));

  result.current();
  result.current.cancel();
  result.current.flush();
  jest.advanceTimersByTime(delay);

  expect(fn).not.toHaveBeenCalled();
});
