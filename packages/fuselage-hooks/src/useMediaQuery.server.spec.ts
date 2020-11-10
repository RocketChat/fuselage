/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useMediaQuery } from '.';

it('returns false for undefined media query', () => {
  let matches: boolean;
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQuery();
    return null;
  };

  renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

  expect(matches).toBe(false);
});

it('returns false for defined media query', () => {
  let matches: boolean;
  const TestComponent: FunctionComponent = () => {
    matches = useMediaQuery('(max-width: 1024)');
    return null;
  };

  renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

  expect(matches).toBe(false);
});
