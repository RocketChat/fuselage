import { useState, FunctionComponent, createElement, StrictMode } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useSafely } from '.';

describe('useSafely hook', () => {
  it('returns a new dispatcher that invokes the previous one', () => {
    const state = Symbol();
    const dispatcher = jest.fn();
    let newDispatcher: () => void;

    const TestComponent: FunctionComponent = () => {
      [, newDispatcher] = useSafely([state, dispatcher]);
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });

    act(() => {
      newDispatcher();
    });

    expect(dispatcher).toHaveBeenCalledTimes(1);
  });

  it('returns a new dispatcher that can be called after unmount', () => {
    const state = Symbol();
    const dispatcher = jest.fn();
    let newDispatcher: () => void;

    const TestComponent: FunctionComponent = () => {
      [, newDispatcher] = useSafely([state, dispatcher]);
      return null;
    };

    const root = document.createElement('div');

    act(() => {
      render(createElement(StrictMode, {}, createElement(TestComponent)), root);
    });

    act(() => {
      unmountComponentAtNode(root);
    });

    newDispatcher();

    expect(dispatcher).toHaveBeenCalledTimes(0);
  });

  it('returns a new dispatcher that mutates the state', () => {
    const initialState = Symbol();
    const newState = Symbol();
    let value: symbol;
    let newDispatcher: (state: symbol) => void;

    const TestComponent: FunctionComponent = () => {
      [value, newDispatcher] = useSafely(useState<symbol>(initialState));
      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div')
      );
    });
    const valueA = value;

    act(() => {
      newDispatcher(newState);
    });
    const valueB = value;

    expect(valueA).toBe(initialState);
    expect(valueB).toBe(newState);
  });
});
