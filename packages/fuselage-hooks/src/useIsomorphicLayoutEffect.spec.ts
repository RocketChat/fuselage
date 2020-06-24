import { FunctionComponent, createElement, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useIsomorphicLayoutEffect } from '.';

describe('useIsomorphicLayoutEffect hook', () => {
  it('performs a useLayoutEffect', () => {
    const watcher = jest.fn();

    const TestComponent: FunctionComponent = () => {
      useIsomorphicLayoutEffect(() => {
        watcher();
      });

      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div'),
      );
    });

    expect(watcher).toBeCalledTimes(1);
  });
});
