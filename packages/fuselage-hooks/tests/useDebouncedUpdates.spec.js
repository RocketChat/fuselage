import { useState } from 'react';

import { runHooks } from '../.jest/helpers';
import { useDebouncedUpdates, useDebouncedReducer, useDebouncedState } from '../src';

describe('useDebouncedUpdates hook', () => {
  let delay;
  beforeEach(() => {
    jest.useFakeTimers();
    delay = Math.round(100 * Math.random());
  });

  it('returns a debounced state updater', () => {
    const [[valueA, debouncedSetValue], [valueB], [valueC]] = runHooks(() => useDebouncedUpdates(useState(0), delay), [
      ([, setValue]) => setValue((value) => value + 1),
      () => jest.runAllTimers(),
    ]);

    expect(debouncedSetValue).toBeInstanceOf(Function);
    expect(debouncedSetValue.flush).toBeInstanceOf(Function);
    expect(debouncedSetValue.cancel).toBeInstanceOf(Function);
    expect(valueA).toBe(0);
    expect(valueB).toBe(0);
    expect(valueC).toBe(1);
  });

  describe('useDebouncedReducer hook', () => {
    it('is a debounced state updater', () => {
      const initialState = Symbol();
      const newState = Symbol();
      const reducer = jest.fn(() => newState);
      const initializerArg = initialState;
      const initializer = jest.fn((state) => state);

      const [
        [stateA], [stateB], [stateC],
      ] = runHooks(() => useDebouncedReducer(reducer, initializerArg, initializer, delay), [
        ([, dispatch]) => dispatch(),
        () => jest.runAllTimers(),
      ]);

      expect(reducer).toHaveBeenCalledWith(initialState, undefined);
      expect(initializer).toHaveBeenCalledWith(initializerArg);
      expect(stateA).toBe(initialState);
      expect(stateB).toBe(initialState);
      expect(stateC).toBe(newState);
    });
  });

  describe('useDebouncedState hook', () => {
    it('is a debounced state updater', () => {
      const initialValue = Symbol();
      const newValue = Symbol();

      const [
        [valueA], [valueB], [valueC],
      ] = runHooks(() => useDebouncedState(initialValue, delay), [
        ([, setValue]) => {
          setValue(newValue);
        },
        () => {
          jest.runAllTimers();
        },
      ]);

      expect(valueA).toBe(initialValue);
      expect(valueB).toBe(initialValue);
      expect(valueC).toBe(newValue);
    });
  });
});
