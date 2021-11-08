/**
 * @jest-environment node
 */

import { useRef, FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useContentBoxSize } from '.';

describe('useContentBoxSize hook on server', () => {
  it('immediately returns zero sizes', () => {
    let inlineSize: unknown;
    let blockSize: unknown;
    const TestComponent: FunctionComponent = () => {
      const ref = useRef<HTMLElement>(null);
      ({ inlineSize, blockSize } = useContentBoxSize(ref));
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(inlineSize).toStrictEqual(0);
    expect(blockSize).toStrictEqual(0);
  });
});
