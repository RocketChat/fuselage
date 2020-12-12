import { createElement, useState, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useDebouncedUpdates } from '.';

describe('useDebouncedUpdates hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('returns a debounced state dispatcher', () => {
    const initialState = Symbol('initial');
    const newState = Symbol('new');
    const delay = Math.round(100 * Math.random());

    let state: symbol;
    let dispatch: ReturnType<typeof useDebouncedUpdates>[1];

    const TestComponent: FunctionComponent = () => {
      [state, dispatch] = useDebouncedUpdates(useState(initialState), delay);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(dispatch).toBeInstanceOf(Function);
    expect(dispatch.flush).toBeInstanceOf(Function);
    expect(dispatch.cancel).toBeInstanceOf(Function);

    expect(state).toBe(initialState);

    act(() => {
      dispatch(newState);
    });

    expect(state).toBe(initialState);

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(state).toBe(newState);
  });
});
