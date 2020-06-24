import { createElement, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';

import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage hook', () => {
  it('returns a string', () => {
    let value: string;
    const TestComponent: FunctionComponent = () => {
      [value] = useLocalStorage('value-key', 'value-default');
      return null;
    };

    render(
      createElement(StrictMode, {}, createElement(TestComponent)),
      document.createElement('div'),
    );
    expect(value).toStrictEqual('value-default');
  });
});
