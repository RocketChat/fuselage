/**
 * @jest-environment node
 */

import {
  MutableRefObject,
  FunctionComponent,
  createElement,
  StrictMode,
} from 'react';
import { renderToString } from 'react-dom/server';

import { useLazyRef } from '.';

describe('useLazyRef hook on server', () => {
  it('returns the computed value immediately', () => {
    const computedValue = Symbol('computed');

    let ref: MutableRefObject<symbol>;

    const TestComponent: FunctionComponent = () => {
      ref = useLazyRef(() => computedValue);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(ref.current).toBe(computedValue);
  });
});
