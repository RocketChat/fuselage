/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useResizeObserver } from '.';

it('immediately returns undefined sizes', () => {
  let borderBoxSize: unknown;
  let contentBoxSize: unknown;
  const TestComponent: FunctionComponent = () => {
    ({ borderBoxSize, contentBoxSize } = useResizeObserver());
    return null;
  };

  renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

  expect(borderBoxSize).toStrictEqual({
    inlineSize: undefined,
    blockSize: undefined,
  });
  expect(contentBoxSize).toStrictEqual({
    inlineSize: undefined,
    blockSize: undefined,
  });
});
