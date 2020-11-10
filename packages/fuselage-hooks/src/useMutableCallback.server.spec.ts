/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useMutableCallback } from '.';

describe('useMutableCallback hook on server', () => {
  it('returns a callback that invokes the mutable one', () => {
    const fn = jest.fn();

    let stableCallback: () => void;

    const TestComponent: FunctionComponent = () => {
      stableCallback = useMutableCallback(fn);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    stableCallback();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
