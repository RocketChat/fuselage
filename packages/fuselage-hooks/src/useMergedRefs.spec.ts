import React from 'react';

import { runHooks } from './jestHelpers';
import { useMergedRefs } from '.';

describe('useMergedRefs hook', () => {
  it('returns a callback ref', () => {
    const [mergedRef] = runHooks(() => useMergedRefs());
    expect(mergedRef).toStrictEqual(expect.any(Function));
  });

  it('works without any arguments', () => {
    const [mergedRef] = runHooks(() => jest.fn(useMergedRefs()));

    const value = Symbol();
    mergedRef(value);
    expect(mergedRef).toHaveBeenCalledWith(value);
  });

  it('works with one ref', () => {
    const ref = React.createRef();
    const [mergedRef] = runHooks(() => useMergedRefs(ref));

    const value = Symbol();
    mergedRef(value);
    expect(ref.current).toBe(value);
  });

  it('works with many refs', () => {
    const refs = new Array(10).fill(undefined).map(() => React.createRef());
    const [mergedRef] = runHooks(() => useMergedRefs(...refs));

    const value = Symbol();
    mergedRef(value);
    refs.forEach((ref) => expect(ref.current).toBe(value));
  });

  it('works with callback ref', () => {
    const callbackRef = jest.fn();
    const [mergedRef] = runHooks(() => useMergedRefs(callbackRef));

    const value = Symbol();
    mergedRef(value);
    expect(callbackRef).toHaveBeenCalledWith(value);
  });

  it('works with refs and callback refs', () => {
    const refs = new Array(5).fill(undefined).map(() => React.createRef());
    const callbackRefs = new Array(5).fill(undefined).map(() => jest.fn());
    const [mergedRef] = runHooks(() => useMergedRefs(...refs, ...callbackRefs));

    const value = Symbol();
    mergedRef(value);
    refs.forEach((ref) => expect(ref.current).toBe(value));
    callbackRefs.forEach((callbackRef) => expect(callbackRef).toHaveBeenCalledWith(value));
  });
});
