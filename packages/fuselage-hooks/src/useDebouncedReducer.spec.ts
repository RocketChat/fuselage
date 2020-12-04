import {
  FunctionComponent,
  DispatchWithoutAction,
  createElement,
  StrictMode,
  ReducerWithoutAction,
} from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useDebouncedReducer } from '.';

describe('useDebouncedReducer hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('is a debounced state updater', () => {
    const delay = Math.round(100 * Math.random());
    const initialState = Symbol('initial');
    const newState = Symbol('new');
    const reducer: ReducerWithoutAction<symbol> = jest.fn(() => newState);
    const initialArg = initialState;
    const init = jest.fn((state) => state);

    let state: symbol;
    let dispatch: DispatchWithoutAction;

    const TestComponent: FunctionComponent = () => {
      [state, dispatch] = useDebouncedReducer(reducer, initialArg, init, delay);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    expect(state).toBe(initialState);

    act(() => {
      dispatch();
    });

    expect(state).toBe(initialState);

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(reducer).toHaveBeenCalledWith(initialState, undefined);
    expect(init).toHaveBeenCalledWith(initialArg);

    expect(state).toBe(newState);
  });
});
