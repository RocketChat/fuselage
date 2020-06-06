import { useReducer, Component, createElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { renderToString } from 'react-dom/server';
import { act } from 'react-dom/test-utils';

type Mutation<R> = ((returnedValue: R) => void) | boolean;

export const runHooks = <R>(fn: () => R, mutations: Mutation<R>[] = []): R[] => {
  let returnedValue: R;
  let forceUpdate: () => void;

  function FunctionalComponent() {
    [, forceUpdate] = useReducer((state) => !state, false);
    returnedValue = fn();
    return null;
  }

  let errorThrown: Error;

  class ComponentWithErrorBoundary extends Component<{}, { errored: boolean }> {
    state = { errored: false }

    static getDerivedStateFromError = () => ({ errored: true })

    componentDidCatch = (error: Error) => {
      errorThrown = error;
    }

    render = () => (this.state.errored ? null : createElement(FunctionalComponent))
  }

  const spy = jest.spyOn(console, 'error');
  spy.mockImplementation(() => {});

  const div = document.createElement('div');
  render(createElement(ComponentWithErrorBoundary), div);

  const values = [returnedValue];

  for (const mutation of mutations) {
    act(() => {
      if (mutation === false) {
        return;
      }

      forceUpdate();

      if (mutation === true) {
        return;
      }

      mutation(returnedValue);
    });
    values.push(returnedValue);
  }

  unmountComponentAtNode(div);

  if (errorThrown) {
    throw errorThrown;
  }

  return values;
};

export const runHooksOnServer = <R>(fn: () => R): R => {
  let returnedValue: R;

  function FunctionalComponent() {
    returnedValue = fn();
    return null;
  }

  renderToString(createElement(FunctionalComponent));

  return returnedValue;
};
