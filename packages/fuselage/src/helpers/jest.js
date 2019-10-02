import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

export const testHook = (callback, ...acts) => {
  let returnedValue;

  const div = document.createElement('div');
  ReactDOM.render(
    React.createElement(function TestHook() {
      returnedValue = callback();
      return null;
    }),
    div
  );

  acts.forEach((fn) => act(fn.bind(null, returnedValue)));

  ReactDOM.unmountComponentAtNode(div);

  return returnedValue;
};
