import React, { useReducer, Component, createElement } from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

export const runHooks = (fn, mutations = []) => {
  let returnedValue;
  let forceUpdate;

  function FunctionalComponent() {
    [, forceUpdate] = useReducer((state) => !state, false);
    returnedValue = fn();
    return null;
  }

  let errorThrown;

  class ComponentWithErrorBoundary extends Component {
    state = { errored: false }

    static getDerivedStateFromError = () => ({ errored: true })

    componentDidCatch = (error) => {
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
