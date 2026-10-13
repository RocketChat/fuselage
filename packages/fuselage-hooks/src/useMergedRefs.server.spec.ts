import type { RefCallback } from 'react';
import { createRef } from 'react';

import { renderHook } from './testing';
import { useMergedRefs } from './useMergedRefs';

it('returns a callback ref', () => {
  const { result } = renderHook(() => useMergedRefs());

  expect(result.current).toEqual(expect.any(Function));
});

it('works without any arguments', () => {
  const { result } = renderHook(() => jest.fn(useMergedRefs()));

  const value = Symbol();
  result.current(value);

  expect(result.current).toHaveBeenCalledWith(value);
});

it('works with one ref', () => {
  const ref = createRef();

  const { result } = renderHook(() => useMergedRefs(ref));

  const value = Symbol();
  result.current(value);

  expect(ref.current).toBe(value);
});

it('works with many refs', () => {
  const refs = Array.from({ length: 10 }).map(() => createRef());

  const { result } = renderHook(() => useMergedRefs(...refs));

  const value = Symbol();
  result.current(value);

  refs.forEach((ref) => expect(ref.current).toBe(value));
});

it('works with callback ref', () => {
  const callbackRef = jest.fn();

  const { result } = renderHook(() => useMergedRefs(callbackRef));

  const value = Symbol();
  result.current(value);

  expect(callbackRef).toHaveBeenCalledWith(value);
});

it('works with refs and callback refs', () => {
  const refs = Array.from({ length: 5 }).map(() => createRef());
  const callbackRefs = Array.from({ length: 5 }).map(() => jest.fn());

  const { result } = renderHook(() => useMergedRefs(...refs, ...callbackRefs));

  const value = Symbol();
  result.current(value);

  refs.forEach((ref) => expect(ref.current).toBe(value));
  callbackRefs.forEach((callbackRef) =>
    expect(callbackRef).toHaveBeenCalledWith(value),
  );
});

it('sets a ref object back to null when unmounted', () => {
  const ref = createRef();

  const { result } = renderHook(() => useMergedRefs(ref));

  const value = Symbol();
  const cleanup = result.current(value);
  expect(ref.current).toBe(value);

  cleanup?.();

  expect(ref.current).toBe(null);
});

it('calls a callback ref with null when unmounted, if it has no cleanup', () => {
  const callbackRef = jest.fn();

  const { result } = renderHook(() => useMergedRefs(callbackRef));

  const value = Symbol();
  const cleanup = result.current(value);
  expect(callbackRef).toHaveBeenCalledTimes(1);
  expect(callbackRef).toHaveBeenLastCalledWith(value);

  cleanup?.();

  expect(callbackRef).toHaveBeenCalledTimes(2);
  expect(callbackRef).toHaveBeenLastCalledWith(null);
});

it('calls the returned cleanup instead of the callback ref again when unmounted', () => {
  const refCleanup = jest.fn();
  const callbackRef = jest.fn(() => refCleanup);

  const { result } = renderHook(() => useMergedRefs(callbackRef));

  const value = Symbol();
  const cleanup = result.current(value);
  expect(callbackRef).toHaveBeenCalledTimes(1);
  expect(callbackRef).toHaveBeenCalledWith(value);

  cleanup?.();

  expect(callbackRef).toHaveBeenCalledTimes(1);
  expect(refCleanup).toHaveBeenCalledTimes(1);
});

it('ignores null and undefined refs without affecting other refs', () => {
  const ref = createRef();
  const callbackRef = jest.fn();

  const { result } = renderHook(() =>
    useMergedRefs(null, undefined, ref, undefined, callbackRef, null),
  );

  const value = Symbol();
  let cleanup: (() => void) | void;
  expect(() => {
    cleanup = result.current(value);
  }).not.toThrow();

  expect(ref.current).toBe(value);
  expect(callbackRef).toHaveBeenLastCalledWith(value);

  expect(() => cleanup?.()).not.toThrow();

  expect(ref.current).toBe(null);
  expect(callbackRef).toHaveBeenLastCalledWith(null);
});

describe('callback ref return values', () => {
  it.each([
    ['undefined', undefined],
    ['null', null],
    ['a number', 42],
    ['a string', 'not a cleanup function'],
    ['an object', {}],
  ])(
    'treats a callback ref that returns %s as having no cleanup',
    (_description, returnValue) => {
      const callbackRef = jest.fn(() => returnValue);

      const { result } = renderHook(() =>
        useMergedRefs(callbackRef as unknown as RefCallback<unknown>),
      );

      const value = Symbol();
      const cleanup = result.current(value);
      expect(callbackRef).toHaveBeenCalledTimes(1);

      cleanup?.();

      expect(callbackRef).toHaveBeenCalledTimes(2);
      expect(callbackRef).toHaveBeenLastCalledWith(null);
    },
  );

  it('treats a callback ref that returns a function as a cleanup', () => {
    const refCleanup = jest.fn();
    const callbackRef = jest.fn(() => refCleanup);

    const { result } = renderHook(() => useMergedRefs(callbackRef));

    const value = Symbol();
    const cleanup = result.current(value);
    expect(callbackRef).toHaveBeenCalledTimes(1);

    cleanup?.();

    expect(callbackRef).toHaveBeenCalledTimes(1);
    expect(refCleanup).toHaveBeenCalledTimes(1);
  });
});

it('runs every ref on unmount, each respecting its own cleanup rules', () => {
  const refObject = createRef();
  const callbackWithoutCleanup = jest.fn();
  const refCleanup = jest.fn();
  const callbackWithCleanup = jest.fn(() => refCleanup);

  const { result } = renderHook(() =>
    useMergedRefs(
      null,
      refObject,
      undefined,
      callbackWithoutCleanup,
      callbackWithCleanup,
    ),
  );

  const value = Symbol();
  const cleanup = result.current(value);

  expect(refObject.current).toBe(value);
  expect(callbackWithoutCleanup).toHaveBeenLastCalledWith(value);
  expect(callbackWithCleanup).toHaveBeenCalledTimes(1);
  expect(callbackWithCleanup).toHaveBeenCalledWith(value);

  cleanup?.();

  expect(refObject.current).toBe(null);
  expect(callbackWithoutCleanup).toHaveBeenCalledTimes(2);
  expect(callbackWithoutCleanup).toHaveBeenLastCalledWith(null);
  expect(callbackWithCleanup).toHaveBeenCalledTimes(1);
  expect(refCleanup).toHaveBeenCalledTimes(1);
});
