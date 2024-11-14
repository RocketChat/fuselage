import { useState } from 'react';

import { act, renderHook } from './testing';
import { useEffectEvent } from './useEffectEvent';

it('returns a stable callback', () => {
  const fn = jest.fn();

  const { result, rerender } = renderHook(() => useEffectEvent(fn));

  const stableCallbackA = result.current;

  rerender();

  const stableCallbackB = result.current;

  expect(stableCallbackB).toBe(stableCallbackA);
});

it('returns a callback that invokes the mutable one', () => {
  const fn = jest.fn();

  const { result } = renderHook(() => useEffectEvent(fn));

  result.current();

  expect(fn).toHaveBeenCalledTimes(1);
});

it('handles mutations in callback', () => {
  const firstCallback = jest.fn();
  const secondCallback = jest.fn();

  const { result } = renderHook(() => {
    const [callback, setCallback] = useState(() => firstCallback);
    const stableCallback = useEffectEvent(callback);

    return { setCallback, stableCallback };
  });

  act(() => {
    result.current.setCallback(() => secondCallback);
  });

  result.current.stableCallback();

  expect(firstCallback).toHaveBeenCalledTimes(0);
  expect(secondCallback).toHaveBeenCalledTimes(1);
});
