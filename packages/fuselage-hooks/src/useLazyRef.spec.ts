import { FunctionComponent, createElement, StrictMode, MutableRefObject } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useLazyRef } from '.';

describe('useLazyRef hook', () => {
  it('returns the computed value immediately', () => {
    const computedValue = Symbol('computed');

    let ref: MutableRefObject<symbol>;

    const TestComponent: FunctionComponent = () => {
      ref = useLazyRef(() => computedValue);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div'),
      );
    });

    expect(ref.current).toBe(computedValue);
  });

  it('runs the initializer once', () => {
    const initializer = jest.fn();

    const TestComponent: FunctionComponent = () => {
      useLazyRef(initializer);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div'),
      );
    });

    expect(initializer).toHaveBeenCalledTimes(1);
  });
});
