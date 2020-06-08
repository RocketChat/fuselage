import { runHooksOnServer } from './jestHelpers';
import { useLazyRef } from '.';

describe('useLazyRef hook on server', () => {
  it('returns the computed value immediately', () => {
    const computedValue = Symbol();
    const value = runHooksOnServer(() => useLazyRef(() => computedValue));

    expect(value.current).toBe(computedValue);
  });
});
