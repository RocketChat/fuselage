import { runHooks } from '../.jest/helpers';
import { useLazyRef } from '../src';

describe('useLazyRef hook', () => {
  it('returns the computed value immediately', () => {
    const computedValue = Symbol();
    const [value] = runHooks(() => useLazyRef(() => computedValue));

    expect(value.current).toBe(computedValue);
  });

  it('runs the initializer once', () => {
    const initializer = jest.fn();
    runHooks(() => useLazyRef(initializer), [true]);

    expect(initializer).toHaveBeenCalledTimes(1);
  });
});
