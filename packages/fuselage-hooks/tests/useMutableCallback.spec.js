import { useState } from 'react';

import { testHook } from '../.jest/helpers';
import { useMutableCallback } from '../src';

describe('useMutableCallback hook', () => {
  it('returns a stable callback', () => {
    const fn = () => {};
    let stableCallbackA;
    let stableCallbackB;
    testHook(
      () => useMutableCallback(fn),
      (returnedValue) => {
        stableCallbackA = returnedValue;
      },
      (returnedValue) => {
        stableCallbackB = returnedValue;
      },
    );

    expect(stableCallbackA).toBe(stableCallbackB);
  });

  it('returns a callback that invokes the mutable one', () => {
    const fn = jest.fn();
    let stableCallback;
    testHook(
      () => useMutableCallback(fn),
      (returnedValue) => {
        stableCallback = returnedValue;
      },
    );
    stableCallback();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('handles mutations in callback', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();
    testHook(
      () => {
        const [mutableCallback, setMutableCallback] = useState(() => firstCallback);
        const stableCallback = useMutableCallback(mutableCallback);
        return [stableCallback, setMutableCallback];
      },
      ([, setMutableCallback]) => {
        setMutableCallback(() => secondCallback);
      },
      ([stableCallback]) => {
        stableCallback();
      },
    );
    expect(firstCallback).toHaveBeenCalledTimes(0);
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
