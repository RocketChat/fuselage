import { runHooks } from '../jestHelpers';

import { useDebouncedCallback } from '..';

describe('useDebouncedCallback hook', () => {
  let fn: jest.Mock<any, any>;
  let delay: number;
  beforeEach(() => {
    jest.useFakeTimers();
    fn = jest.fn();
    delay = Math.round(100 * Math.random());
  });

  it('returns a debounced callback', () => {
    const [debouncedCallback] = runHooks(() => useDebouncedCallback(fn, delay));
    expect(debouncedCallback).toBeInstanceOf(Function);
    expect(debouncedCallback.flush).toBeInstanceOf(Function);
    expect(debouncedCallback.cancel).toBeInstanceOf(Function);

    debouncedCallback();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), delay);
  });

  it('returns the same callback if deps don\'t change', () => {
    const [callbackA, callbackB] = runHooks(() => useDebouncedCallback(fn, delay, []), [true]);
    expect(callbackA).toBe(callbackB);
  });

  it('returns another callback if deps change', () => {
    let dep = Symbol();

    const [callbackA, , callbackB] = runHooks(() => useDebouncedCallback(fn, delay, [dep]), [
      () => {
        dep = Symbol();
      },
    ]);

    expect(callbackA).not.toBe(callbackB);
  });

  it('returns another callback if delay change', () => {
    let delay = 0;

    const [callbackA, callbackB] = runHooks(() => useDebouncedCallback(fn, delay, []), [
      () => {
        delay = 1;
      },
    ]);

    expect(callbackA).not.toBe(callbackB);
  });
});
