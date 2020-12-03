/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { usePrefersReducedMotion } from '.';

describe('usePrefersReducedMotion hook on server', () => {
  it('should return false without matchMedia mocked', () => {
    let matches: boolean;
    const TestComponent: FunctionComponent = () => {
      matches = usePrefersReducedMotion();
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(matches).toBe(false);
  });

  it('should return false with matchMedia mocked', () => {
    let matches: boolean;
    const TestComponent: FunctionComponent = () => {
      matches = usePrefersReducedMotion();
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(matches).toBe(false);
  });
});
