import { useState } from 'react';

import { testHook } from '../helpers/jest';
import { useDebouncedCallback } from './useDebouncedCallback';

describe('useDebouncedCallback hook', () => {
  let fn;
  let delay;
  beforeEach(() => {
    jest.useFakeTimers();
    fn = jest.fn();
    delay = Math.round(100 * Math.random());
  });

  it('returns a debounced callback', () => {
    const debouncedCallback = testHook(() => useDebouncedCallback(fn, delay));
    expect(debouncedCallback).toBeInstanceOf(Function);
    expect(debouncedCallback.flush).toBeInstanceOf(Function);
    expect(debouncedCallback.cancel).toBeInstanceOf(Function);

    debouncedCallback();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), delay);
  });

  it('returns the same callback if deps don\'t change', () => {
    let callbackA;
    let callbackB;
    let setDummy;

    testHook(
      () => {
        [, setDummy] = useState(0);
        return useDebouncedCallback(fn, delay, []);
      },
      (returnedValue) => {
        callbackA = returnedValue;
        setDummy((dep) => dep + 1);
      },
      (returnedValue) => {
        callbackB = returnedValue;
      }
    );

    expect(callbackA).toBe(callbackB);
  });

  it('returns another callback if deps change', () => {
    let callbackA;
    let callbackB;
    let dep;
    let setDep;

    testHook(
      () => {
        [dep, setDep] = useState(0);
        return useDebouncedCallback(fn, delay, [dep]);
      },
      (returnedValue) => {
        callbackA = returnedValue;
        setDep((dep) => dep + 1);
      },
      (returnedValue) => {
        callbackB = returnedValue;
      }
    );

    expect(callbackA).not.toBe(callbackB);
  });

  it('returns another callback if delay change', () => {
    let callbackA;
    let callbackB;
    let delay;
    let setDelay;

    testHook(
      () => {
        [delay, setDelay] = useState(0);
        return useDebouncedCallback(fn, delay, []);
      },
      (returnedValue) => {
        callbackA = returnedValue;
        setDelay((delay) => delay + 1);
      },
      (returnedValue) => {
        callbackB = returnedValue;
      }
    );

    expect(callbackA).not.toBe(callbackB);
  });
});
