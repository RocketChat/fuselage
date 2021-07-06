/**
 * @jest-environment node
 */

import { createElement, StrictMode, FunctionComponent } from 'react';
import { renderToString } from 'react-dom/server';

import { useToggle } from '.';

describe('useToggle hook on server', () => {
  it('has false value when an initial value is undefined', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle();
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toBe(false);
  });

  it('has false value when an initial value is false', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(false);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toBe(false);
  });

  it('has false value when an initial value is falsy', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(0 as unknown as boolean);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toBe(false);
  });

  it('has false value when an initial value is a function returning false', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(() => false);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toBe(false);
  });

  it('has true value when an initial value is true', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(true);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toBe(true);
  });

  it('has true value when an initial value is truthy', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(1 as unknown as boolean);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toBe(true);
  });

  it('has true value when an initial value is a function returning true', () => {
    let value: boolean;
    const TestComponent: FunctionComponent = () => {
      [value] = useToggle(() => true);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(value).toBe(true);
  });
});
