/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { usePrefersReducedMotion } from '.';

it('returns false for undefined media query', () => {
  let matches: boolean;
  const TestComponent: FunctionComponent = () => {
    matches = usePrefersReducedMotion();
    return null;
  };

  renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

  expect(matches).toBe(false);
});

it('returns false for defined media query', () => {
  let matches: boolean;
  const TestComponent: FunctionComponent = () => {
    matches = usePrefersReducedMotion();
    return null;
  };

  renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

  expect(matches).toBe(false);
});
