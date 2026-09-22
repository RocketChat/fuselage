/* eslint-disable react/no-multi-comp */
import { render } from '@testing-library/react';
import type { Ref, RefCallback } from 'react';
import { createElement, createRef, useCallback } from 'react';

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

const useTrackedRef = (
  events: string[],
  name: string,
): RefCallback<HTMLElement> =>
  useCallback(
    (node: HTMLElement) => {
      events.push(`${name}:attach:${node.tagName}`);
      return () => {
        events.push(`${name}:detach`);
      };
    },
    [events, name],
  );

// Strict mode attaches every ref twice, so each attach must be followed by its own detach
const expectBalanced = (events: string[], attached: boolean) => {
  events.forEach((event, index) =>
    expect(event).toMatch(index % 2 === 0 ? /:attach:DIV$/ : /:detach$/),
  );
  expect(events.length % 2).toBe(attached ? 1 : 0);
};

it('forwards the cleanup returned by callback refs', () => {
  const events: string[] = [];
  const callbackRef = jest.fn();
  const objectRef = createRef<HTMLElement>();

  const TestComponent = () =>
    createElement('div', {
      ref: useMergedRefs(
        useTrackedRef(events, 'a'),
        callbackRef as Ref<HTMLElement>,
        objectRef,
      ),
    });

  const { unmount } = render(createElement(TestComponent));

  expectBalanced(events, true);
  expect(callbackRef).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));
  expect(objectRef.current).toBeInstanceOf(HTMLDivElement);

  unmount();

  expectBalanced(events, false);
  expect(callbackRef).toHaveBeenLastCalledWith(null);
  expect(objectRef.current).toBeNull();
});

it('runs the cleanups once when called with null', () => {
  const events: string[] = [];

  const TestComponent = () => {
    const innerRef = useMergedRefs(useTrackedRef(events, 'a'));
    const outerRef = useCallback(
      (node: HTMLElement | null) => {
        innerRef(node);
      },
      [innerRef],
    );

    return createElement('div', { ref: outerRef });
  };

  const { unmount } = render(createElement(TestComponent));

  expectBalanced(events, true);

  unmount();

  expectBalanced(events, false);
});

it('keeps its identity while the merged refs change', () => {
  const { result, rerender } = renderHook(({ ref }) => useMergedRefs(ref), {
    initialProps: { ref: createRef() },
  });

  const mergedRef = result.current;
  rerender({ ref: createRef() });

  expect(result.current).toBe(mergedRef);
});
