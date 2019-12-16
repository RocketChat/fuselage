import { testHook } from '@rocket.chat/jest-utils/helpers';
import React from 'react';

import { useMergedRefs } from '../src';

describe('useMergedRefs hook', () => {
  it('returns a callback ref', () => {
    const mergedRef = testHook(() => useMergedRefs());
    expect(mergedRef).toStrictEqual(expect.any(Function));
  });

  it('works without any arguments', () => {
    const value = {};
    const mergedRef = testHook(
      () => jest.fn(useMergedRefs()),
      (mergedRef) => {
        mergedRef(value);
      },
    );
    expect(mergedRef).toHaveBeenCalledWith(value);
  });

  it('works with one ref', () => {
    const ref = React.createRef();
    const value = {};
    testHook(
      () => useMergedRefs(ref),
      (mergedRef) => {
        mergedRef(value);
      },
    );
    expect(ref.current).toBe(value);
  });

  it('works with many refs', () => {
    const refs = new Array(10).fill(undefined).map(() => React.createRef());
    const value = {};
    testHook(
      () => useMergedRefs(...refs),
      (mergedRef) => {
        mergedRef(value);
      },
    );
    refs.forEach((ref) => expect(ref.current).toBe(value));
  });

  it('works with callback ref', () => {
    const callbackRef = jest.fn();
    const value = {};
    testHook(
      () => useMergedRefs(callbackRef),
      (mergedRef) => {
        mergedRef(value);
      },
    );
    expect(callbackRef).toHaveBeenCalledWith(value);
  });

  it('works with refs and callback refs', () => {
    const refs = new Array(5).fill(undefined).map(() => React.createRef());
    const callbackRefs = new Array(5).fill(undefined).map(() => jest.fn());

    const value = {};
    testHook(
      () => useMergedRefs(...refs, ...callbackRefs),
      (mergedRef) => {
        mergedRef(value);
      },
    );
    refs.forEach((ref) => expect(ref.current).toBe(value));
    callbackRefs.forEach((callbackRef) => expect(callbackRef).toHaveBeenCalledWith(value));
  });
});
