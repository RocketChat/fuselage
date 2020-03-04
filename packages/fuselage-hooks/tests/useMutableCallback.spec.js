import { useRef } from 'react';

import { runHooks } from '../.jest/helpers';
import { useMutableCallback } from '../src';

describe('useMutableCallback hook', () => {
  it('returns a stable callback', () => {
    const fn = jest.fn();
    const [stableCallbackA, stableCallbackB] = runHooks(() => useMutableCallback(fn), [true]);
    expect(stableCallbackA).toBe(stableCallbackB);
  });

  it('returns a callback that invokes the mutable one', () => {
    const fn = jest.fn();
    const [stableCallback] = runHooks(() => useMutableCallback(fn));
    stableCallback();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('handles mutations in callback', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    runHooks(() => {
      const ref = useRef(firstCallback);
      const stableCallback = useMutableCallback(ref.current);
      ref.current = secondCallback;
      return stableCallback;
    }, [true, (stableCallback) => stableCallback()]);

    expect(firstCallback).toHaveBeenCalledTimes(0);
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
