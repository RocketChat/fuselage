/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useDebouncedValue } from '.';

describe('useDebouncedValue hook', () => {
  let delay: number;
  beforeEach(() => {
    jest.useFakeTimers();
    delay = Math.round(100 * Math.random());
  });

  it('returns the initial value', () => {
    const initialValue = Symbol();

    let value: symbol;

    const TestComponent: FunctionComponent = () => {
      value = useDebouncedValue(initialValue, delay);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toBe(initialValue);
  });
});
