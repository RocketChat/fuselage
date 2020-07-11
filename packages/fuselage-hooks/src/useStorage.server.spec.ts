/**
 * @jest-environment node
 */

import { createElement, FunctionComponent, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useLocalStorage } from './useStorage';

it('returns a default value', () => {
  let value: string;
  const TestLocalStorageComponent: FunctionComponent = () => {
    [value] = useLocalStorage('value-key', 'value-default');
    return null;
  };

  renderToString(
    createElement(StrictMode, {}, createElement(TestLocalStorageComponent)),
  );

  expect(value).toStrictEqual('value-default');
});
