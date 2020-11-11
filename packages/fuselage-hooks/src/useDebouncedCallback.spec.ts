import {
  FunctionComponent,
  createElement,
  StrictMode,
  useReducer,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useDebouncedCallback } from '.';

describe('useDebouncedCallback hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('returns a debounced callback', () => {
    const fn = jest.fn();
    const delay = 100 + Math.round(100 * Math.random());
    const delayBeforeUpdate = Math.round(delay * 0.75);

    let debouncedCallback: (() => void) & {
      flush: () => void;
      cancel: () => void;
    };

    const TestComponent: FunctionComponent = () => {
      debouncedCallback = useDebouncedCallback(fn, delay);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(debouncedCallback).toBeInstanceOf(Function);
    expect(debouncedCallback.flush).toBeInstanceOf(Function);
    expect(debouncedCallback.cancel).toBeInstanceOf(Function);

    debouncedCallback();

    jest.advanceTimersByTime(delayBeforeUpdate);

    expect(fn).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(delay - delayBeforeUpdate);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("returns the same callback if deps don't change", () => {
    const delay = 100 + Math.round(100 * Math.random());

    let debouncedCallback: (() => void) & {
      flush: () => void;
      cancel: () => void;
    };
    let forceUpdate: () => void;

    const TestComponent: FunctionComponent = () => {
      debouncedCallback = useDebouncedCallback(() => undefined, delay, []);
      [, forceUpdate] = useReducer((state) => !state, false);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    const initialCallback = debouncedCallback;

    act(() => {
      forceUpdate();
    });

    expect(debouncedCallback).toBe(initialCallback);
  });

  it('returns another callback if deps change', () => {
    const delay = 100 + Math.round(100 * Math.random());
    const initialDep = Symbol('initial');
    const newDep = Symbol('new');

    let setDep: Dispatch<SetStateAction<symbol>>;
    let debouncedCallback: (() => void) & {
      flush: () => void;
      cancel: () => void;
    };

    const TestComponent: FunctionComponent = () => {
      let dep: symbol;
      [dep, setDep] = useState<symbol>(initialDep);
      debouncedCallback = useDebouncedCallback(() => undefined, delay, [dep]);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    const initialCallback = debouncedCallback;

    act(() => {
      setDep(newDep);
    });

    expect(debouncedCallback).not.toBe(initialCallback);
  });

  it('returns another callback if delay change', () => {
    const initialDelay = 100 + Math.round(100 * Math.random());
    const newDelay = initialDelay + Math.round(100 * Math.random());

    let setDelay: Dispatch<SetStateAction<number>>;
    let debouncedCallback: (() => void) & {
      flush: () => void;
      cancel: () => void;
    };

    const TestComponent: FunctionComponent = () => {
      let delay: number;
      [delay, setDelay] = useState(initialDelay);
      debouncedCallback = useDebouncedCallback(() => undefined, delay, []);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    const initialCallback = debouncedCallback;

    act(() => {
      setDelay(newDelay);
    });

    expect(initialCallback).not.toBe(debouncedCallback);
  });
});
