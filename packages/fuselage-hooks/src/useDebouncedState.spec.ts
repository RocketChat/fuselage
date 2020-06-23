import { createElement, Dispatch, FunctionComponent, SetStateAction, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useDebouncedState } from '.';

describe('useDebouncedState hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('is a debounced state updater', () => {
    const delay = Math.round(100 * Math.random());
    const initialState = Symbol('initial');
    const newState = Symbol('new');

    let state: symbol;
    let setState: Dispatch<SetStateAction<symbol>>;

    const TestComponent: FunctionComponent = () => {
      [state, setState] = useDebouncedState(initialState, delay);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div'),
      );
    });

    expect(state).toBe(initialState);

    act(() => {
      setState(newState);
    });

    expect(state).toBe(initialState);

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(state).toBe(newState);
  });
});
