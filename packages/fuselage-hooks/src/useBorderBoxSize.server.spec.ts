/**
 * @jest-environment node
 */

import { useRef, FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useBorderBoxSize } from '.';

describe('useBorderBoxSize hook on server', () => {
  it('immediately returns zero sizes', () => {
    let inlineSize: unknown;
    let blockSize: unknown;
    const TestComponent: FunctionComponent = () => {
      const ref = useRef<HTMLElement>(null);
      ({ inlineSize, blockSize } = useBorderBoxSize(ref));
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(inlineSize).toStrictEqual(0);
    expect(blockSize).toStrictEqual(0);
  });
});
