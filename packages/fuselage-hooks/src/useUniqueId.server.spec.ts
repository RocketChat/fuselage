/**
 * @jest-environment node
 */

import { createElement, FunctionComponent, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useUniqueId } from '.';

describe('useUniqueId hook on server', () => {
  it('returns a string', () => {
    let uniqueId: string;
    const TestComponent: FunctionComponent = () => {
      uniqueId = useUniqueId();
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));
    expect(uniqueId).toStrictEqual(expect.any(String));
  });

  it('returns a unique ID', () => {
    let uniqueId: string;
    const TestComponent: FunctionComponent = () => {
      uniqueId = useUniqueId();
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));
    const uniqueIdA = uniqueId;

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));
    const uniqueIdB = uniqueId;

    expect(uniqueIdA).not.toBe(uniqueIdB);
  });
});
