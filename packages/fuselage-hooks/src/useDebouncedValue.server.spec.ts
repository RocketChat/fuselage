/**
 * @jest-environment node
 */

import { runHooksOnServer } from './jestHelpers';
import { useDebouncedValue } from '.';

describe('useDebouncedValue hook', () => {
  let delay: number;
  beforeEach(() => {
    jest.useFakeTimers();
    delay = Math.round(100 * Math.random());
  });

  it('returns the initial value', () => {
    const mutableValue = Symbol();
    const value = runHooksOnServer(() => useDebouncedValue(mutableValue, delay));
    expect(value).toBe(mutableValue);
  });
});
