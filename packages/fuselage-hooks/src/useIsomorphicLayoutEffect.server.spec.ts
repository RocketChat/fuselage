/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useIsomorphicLayoutEffect } from '.';

describe('useIsomorphicLayoutEffect hook on server', () => {
  it('performs a useEffect', () => {
    const watcher = jest.fn();

    const TestComponent: FunctionComponent = () => {
      useIsomorphicLayoutEffect(() => {
        watcher();
      });

      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(watcher).toBeCalledTimes(0);
  });
});
