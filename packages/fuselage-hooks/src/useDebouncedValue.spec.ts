import { useState } from 'react';

import { runHooks } from './jestHelpers';
import { useDebouncedValue } from '.';

describe('useDebouncedValue hook', () => {
  let delay: number;
  beforeEach(() => {
    jest.useFakeTimers();
    delay = Math.round(100 * Math.random());
  });

  it('returns the initial value immediately', () => {
    const mutableValue = Symbol();
    const [value] = runHooks(() => useDebouncedValue(mutableValue, delay));
    expect(value).toBe(mutableValue);
  });

  it('returns the newest value after timeout', () => {
    const [[valueA], [valueB], [valueC]] = runHooks(
      () => {
        const [mutableValue, setMutableValue] = useState(0);
        return [useDebouncedValue(mutableValue, delay), setMutableValue];
      },
      [
        ([, setMutableValue]) => setMutableValue((mutableValue) => mutableValue + 1),
        () => jest.runAllTimers(),
      ],
    );

    expect(valueA).toBe(0);
    expect(valueB).toBe(0);
    expect(valueC).toBe(1);
  });
});
