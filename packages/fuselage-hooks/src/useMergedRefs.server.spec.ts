/**
 * @jest-environment node
 */

import React, {
  FunctionComponent,
  createElement,
  StrictMode,
  RefCallback,
} from 'react';
import { renderToString } from 'react-dom/server';

import { useMergedRefs } from '.';

describe('useMergedRefs hook on server', () => {
  it('returns a callback ref', () => {
    let mergedRef: RefCallback<any>;

    const TestComponent: FunctionComponent = () => {
      mergedRef = useMergedRefs();
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    expect(mergedRef).toStrictEqual(expect.any(Function));
  });

  it('works without any arguments', () => {
    let mergedRef: RefCallback<any>;

    const TestComponent: FunctionComponent = () => {
      mergedRef = jest.fn(useMergedRefs());
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    const value = Symbol();
    mergedRef(value);
    expect(mergedRef).toHaveBeenCalledWith(value);
  });

  it('works with one ref', () => {
    const ref = React.createRef();

    let mergedRef: RefCallback<any>;

    const TestComponent: FunctionComponent = () => {
      mergedRef = useMergedRefs(ref);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    const value = Symbol();
    mergedRef(value);
    expect(ref.current).toBe(value);
  });

  it('works with many refs', () => {
    const refs = new Array(10).fill(undefined).map(() => React.createRef());

    let mergedRef: RefCallback<any>;

    const TestComponent: FunctionComponent = () => {
      mergedRef = useMergedRefs(...refs);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    const value = Symbol();
    mergedRef(value);
    refs.forEach((ref) => expect(ref.current).toBe(value));
  });

  it('works with callback ref', () => {
    const callbackRef = jest.fn();

    let mergedRef: RefCallback<any>;

    const TestComponent: FunctionComponent = () => {
      mergedRef = useMergedRefs(callbackRef);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    const value = Symbol();
    mergedRef(value);
    expect(callbackRef).toHaveBeenCalledWith(value);
  });

  it('works with refs and callback refs', () => {
    const refs = new Array(5).fill(undefined).map(() => React.createRef());
    const callbackRefs = new Array(5).fill(undefined).map(() => jest.fn());

    let mergedRef: RefCallback<any>;

    const TestComponent: FunctionComponent = () => {
      mergedRef = useMergedRefs(...refs, ...callbackRefs);
      return null;
    };

    renderToString(createElement(StrictMode, {}, createElement(TestComponent)));

    const value = Symbol();
    mergedRef(value);
    refs.forEach((ref) => expect(ref.current).toBe(value));
    callbackRefs.forEach((callbackRef) =>
      expect(callbackRef).toHaveBeenCalledWith(value)
    );
  });
});
