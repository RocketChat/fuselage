/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useDebouncedCallback } from '.';

describe('useDebouncedCallback hook on server', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('returns a debounced callback', () => {
    const fn = jest.fn();
    const delay = 100 + Math.round(100 * Math.random());
    const delayBeforeUpdate = Math.round(delay * 0.75);

    let debouncedCallback: (() => void) & {
      flush: () => void;
      cancel: () => void;
    };

    const TestComponent: FunctionComponent = () => {
      debouncedCallback = useDebouncedCallback(fn, delay);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(debouncedCallback).toBeInstanceOf(Function);
    expect(debouncedCallback.flush).toBeInstanceOf(Function);
    expect(debouncedCallback.cancel).toBeInstanceOf(Function);

    debouncedCallback();

    jest.advanceTimersByTime(delayBeforeUpdate);

    expect(fn).toHaveBeenCalledTimes(0);

    jest.advanceTimersByTime(delay - delayBeforeUpdate);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
