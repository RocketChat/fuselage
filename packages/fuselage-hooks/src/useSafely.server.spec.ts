/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useSafely } from '.';

describe('useSafely hook on server', () => {
  it('returns the initial state', () => {
    const initialState = Symbol();
    const dispatcher = jest.fn();
    let state: symbol;

    const TestComponent: FunctionComponent = () => {
      [state] = useSafely([initialState, dispatcher]);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(state).toBe(initialState);
  });
});
