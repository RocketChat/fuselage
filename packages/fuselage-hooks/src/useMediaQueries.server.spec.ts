/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useMediaQueries } from '.';

it('returns empty array for undefined media query', () => {
  let matches: boolean[];
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQueries();
    return null;
  };

  renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

  expect(matches).toStrictEqual([]);
});

it('returns false for defined media query', () => {
  let matches: boolean[];
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQueries('(max-width: 1024)');
    return null;
  };

  renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

  expect(matches).toStrictEqual([false]);
});
