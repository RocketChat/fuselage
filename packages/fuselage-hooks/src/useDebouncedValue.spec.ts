import {
  createElement,
  useReducer,
  FunctionComponent,
  StrictMode,
} from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useDebouncedValue } from '.';

describe('useDebouncedValue hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  let delay: number;

  beforeEach(() => {
    delay = Math.round(100 * Math.random());
  });

  it('returns the initial value', () => {
    const initialValue = Symbol();

    let value: symbol;

    const TestComponent: FunctionComponent = () => {
      value = useDebouncedValue(initialValue, delay);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(value).toBe(initialValue);
  });

  it('returns the newest value after timeout', () => {
    let value: number;
    let incrementValue: () => void;

    const TestComponent: FunctionComponent = () => {
      let mutableValue: number;
      [mutableValue, incrementValue] = useReducer((state) => state + 1, 0);
      value = useDebouncedValue(mutableValue, delay);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(value).toBe(0);

    act(() => {
      incrementValue();
    });

    expect(value).toBe(0);

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(value).toBe(1);
  });
});
