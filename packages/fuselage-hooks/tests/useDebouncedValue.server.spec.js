/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../.jest/helpers';
import { useDebouncedValue } from '../src';

describe('useDebouncedValue hook', () => {
  let delay;
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
