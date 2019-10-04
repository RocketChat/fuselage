import { useState } from 'react';

import { useDebouncedUpdates, useDebouncedReducer, useDebouncedState } from './useDebouncedUpdates';
import { testHook } from '../../.jest/helpers';

describe('useDebouncedUpdates hook', () => {
  let delay;
  beforeEach(() => {
    jest.useFakeTimers();
    delay = Math.round(100 * Math.random());
  });

  it('returns a debounced state updater', () => {
    let valueA;
    let valueB;
    let valueC;
    const [, debouncedSetValue] = testHook(
      () => useDebouncedUpdates(useState(0), delay),
      ([value, debouncedSetValue]) => {
        valueA = value;
        debouncedSetValue((value) => value + 1);
      },
      ([value]) => {
        valueB = value;
        jest.runAllTimers();
      },
      ([value]) => {
        valueC = value;
      }
    );

    expect(debouncedSetValue).toBeInstanceOf(Function);
    expect(debouncedSetValue.flush).toBeInstanceOf(Function);
    expect(debouncedSetValue.cancel).toBeInstanceOf(Function);
    expect(valueA).toBe(0);
    expect(valueB).toBe(0);
    expect(valueC).toBe(1);
  });

  describe('useDebouncedReducer hook', () => {
    it('is a debounced state updater', () => {
      const initialState = {};
      const newState = {};
      const reducer = jest.fn(() => newState);
      const initializerArg = initialState;
      const initializer = jest.fn((state) => state);
      let stateA;
      let stateB;
      testHook(
        () => useDebouncedReducer(reducer, initializerArg, initializer, delay),
        ([, dispatch]) => {
          dispatch();
        },
        ([state]) => {
          stateA = state;
          jest.runAllTimers();
        },
        ([state]) => {
          stateB = state;
        }
      );

      expect(reducer).toHaveBeenCalledWith(initialState, undefined);
      expect(initializer).toHaveBeenCalledWith(initializerArg);
      expect(stateA).toBe(initialState);
      expect(stateB).toBe(newState);
    });
  });

  describe('useDebouncedState hook', () => {
    it('is a debounced state updater', () => {
      const initialValue = {};
      const newValue = {};
      let valueA;
      let valueB;
      testHook(
        () => useDebouncedState(initialValue, delay),
        ([, setValue]) => {
          setValue(newValue);
        },
        ([state]) => {
          valueA = state;
          jest.runAllTimers();
        },
        ([state]) => {
          valueB = state;
        }
      );
      expect(valueA).toBe(initialValue);
      expect(valueB).toBe(newValue);
    });
  });
});
