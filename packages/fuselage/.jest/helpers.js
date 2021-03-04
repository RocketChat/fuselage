import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

export const testHook = (callback, ...acts) => {
  let returnedValue;
  let errorThrown;

  class ErrorBoundary extends React.Component {
    state = { errored: false };

    static getDerivedStateFromError = () => ({ errored: true });

    componentDidCatch = (error) => {
      errorThrown = error;
    };

    render = () => (this.state.errored ? null : <>{this.props.children}</>);
  }

  function TestComponent() {
    returnedValue = callback();
    return null;
  }

  const spy = jest.spyOn(console, 'error');
  spy.mockImplementation(() => {});

  const div = document.createElement('div');
  ReactDOM.render(
    <ErrorBoundary>
      <TestComponent />
    </ErrorBoundary>,
    div
  );

  acts.forEach((fn) => act(fn.bind(null, returnedValue)));

  ReactDOM.unmountComponentAtNode(div);

  if (errorThrown) {
    throw errorThrown;
  }

  return returnedValue;
};
