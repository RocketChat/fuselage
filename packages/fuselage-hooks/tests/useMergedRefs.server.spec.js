/**
 * @jest-environment node
 */

import React from 'react';

import { runHooksOnServer } from '../.jest/helpers';
import { useMergedRefs } from '../src';

describe('useMergedRefs hook on server', () => {
  it('returns a callback ref', () => {
    const mergedRef = runHooksOnServer(() => useMergedRefs());
    expect(mergedRef).toStrictEqual(expect.any(Function));
  });

  it('works without any arguments', () => {
    const mergedRef = runHooksOnServer(() => jest.fn(useMergedRefs()));

    const value = Symbol();
    mergedRef(value);
    expect(mergedRef).toHaveBeenCalledWith(value);
  });

  it('works with one ref', () => {
    const ref = React.createRef();
    const mergedRef = runHooksOnServer(() => useMergedRefs(ref));

    const value = Symbol();
    mergedRef(value);
    expect(ref.current).toBe(value);
  });

  it('works with many refs', () => {
    const refs = new Array(10).fill(undefined).map(() => React.createRef());
    const mergedRef = runHooksOnServer(() => useMergedRefs(...refs));

    const value = Symbol();
    mergedRef(value);
    refs.forEach((ref) => expect(ref.current).toBe(value));
  });

  it('works with callback ref', () => {
    const callbackRef = jest.fn();
    const mergedRef = runHooksOnServer(() => useMergedRefs(callbackRef));

    const value = Symbol();
    mergedRef(value);
    expect(callbackRef).toHaveBeenCalledWith(value);
  });

  it('works with refs and callback refs', () => {
    const refs = new Array(5).fill(undefined).map(() => React.createRef());
    const callbackRefs = new Array(5).fill(undefined).map(() => jest.fn());
    const mergedRef = runHooksOnServer(() => useMergedRefs(...refs, ...callbackRefs));

    const value = Symbol();
    mergedRef(value);
    refs.forEach((ref) => expect(ref.current).toBe(value));
    callbackRefs.forEach((callbackRef) => expect(callbackRef).toHaveBeenCalledWith(value));
  });
});
