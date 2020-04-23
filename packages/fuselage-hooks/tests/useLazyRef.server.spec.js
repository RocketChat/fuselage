import { runHooksOnServer } from '../.jest/helpers';
import { useLazyRef } from '../src';

describe('useLazyRef hook on server', () => {
  it('returns the computed value immediately', () => {
    const computedValue = Symbol();
    const value = runHooksOnServer(() => useLazyRef(() => computedValue));

    expect(value.current).toBe(computedValue);
  });
});
