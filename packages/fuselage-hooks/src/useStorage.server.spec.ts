/**
 * @jest-environment node
 */

import { createElement, FunctionComponent, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useLocalStorage, useSessionStorage } from './useStorage';

describe('useLocalStorage hook', () => {
  it('returns a default value', () => {
    let value: string;
    const TestComponent: FunctionComponent = () => {
      [value] = useLocalStorage('value-key', 'value-default');
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toStrictEqual('value-default');
  });
});

describe('useSessionStorage hook', () => {
  it('returns a default value', () => {
    let value: string;
    const TestComponent: FunctionComponent = () => {
      [value] = useSessionStorage('value-key', 'value-default');
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toStrictEqual('value-default');
  });
});
