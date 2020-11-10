import {
  createElement,
  StrictMode,
  FunctionComponent,
  useReducer,
  useState,
} from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useMutableCallback } from '.';

describe('useMutableCallback hook', () => {
  it('returns a stable callback', () => {
    const fn = jest.fn();

    let stableCallback: () => void;
    let forceUpdate: () => void;

    const TestComponent: FunctionComponent = () => {
      stableCallback = useMutableCallback(fn);
      [, forceUpdate] = useReducer((state) => !state, false);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    const stableCallbackA = stableCallback;

    act(() => {
      forceUpdate();
    });

    const stableCallbackB = stableCallback;

    expect(stableCallbackA).toBe(stableCallbackB);
  });

  it('returns a callback that invokes the mutable one', () => {
    const fn = jest.fn();

    let stableCallback: () => void;

    const TestComponent: FunctionComponent = () => {
      stableCallback = useMutableCallback(fn);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    stableCallback();

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('handles mutations in callback', () => {
    const firstCallback = jest.fn();
    const secondCallback = jest.fn();

    let stableCallback: () => void;
    let setCallback: (callback: typeof jest.fn) => void;

    const TestComponent: FunctionComponent = () => {
      let callback: typeof jest.fn;
      [callback, setCallback] = useState(() => firstCallback);
      stableCallback = useMutableCallback(callback);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    act(() => {
      setCallback(() => secondCallback);
    });

    act(() => {
      stableCallback();
    });

    expect(firstCallback).toHaveBeenCalledTimes(0);
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});
