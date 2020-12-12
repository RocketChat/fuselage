/**
 * @jest-environment node
 */

import { FunctionComponent, createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { useClipboard, UseClipboardReturn } from './useClipboard';

describe('useClipboard hook on server', () => {
  it('has hasCopied and copy properties', () => {
    let hookObject: UseClipboardReturn;

    const TestComponent: FunctionComponent = () => {
      hookObject = useClipboard('Lorem Ipsum Indolor Dolor');
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(hookObject).toHaveProperty('copy');
    expect(hookObject).toHaveProperty('hasCopied');
  });
});
