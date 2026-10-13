import { render } from '@testing-library/react';
import type { Ref, RefCallback } from 'react';
import { createRef } from 'react';

import { useMergedRefs } from './useMergedRefs';

type TestComponentProps = {
  refs: (Ref<HTMLDivElement> | null | undefined)[];
};

const TestComponent = ({ refs }: TestComponentProps) => {
  const mergedRef = useMergedRefs(...refs);
  return <div ref={mergedRef} />;
};

it('renders without throwing when no refs are provided', () => {
  expect(() => render(<TestComponent refs={[]} />)).not.toThrow();
});

it('attaches the DOM node to a single ref object', () => {
  const ref = createRef<HTMLDivElement>();

  render(<TestComponent refs={[ref]} />);

  expect(ref.current).toBeInstanceOf(HTMLDivElement);
});

it('attaches the same DOM node to many ref objects', () => {
  const refs = Array.from({ length: 10 }, () => createRef<HTMLDivElement>());

  render(<TestComponent refs={refs} />);

  const node = refs[0].current;
  expect(node).toBeInstanceOf(HTMLDivElement);
  refs.forEach((ref) => expect(ref.current).toBe(node));
});

it('attaches the DOM node to a callback ref', () => {
  const callbackRef = jest.fn();

  render(<TestComponent refs={[callbackRef]} />);

  expect(
    callbackRef.mock.calls.some(([node]) => node instanceof HTMLDivElement),
  ).toBe(true);
});

it('attaches the same DOM node to ref objects and callback refs together', () => {
  const refs = Array.from({ length: 5 }, () => createRef<HTMLDivElement>());
  const callbackRefs = Array.from({ length: 5 }, () => jest.fn());

  render(<TestComponent refs={[...refs, ...callbackRefs]} />);

  const node = refs[0].current;
  expect(node).toBeInstanceOf(HTMLDivElement);
  refs.forEach((ref) => expect(ref.current).toBe(node));
  callbackRefs.forEach((callbackRef) =>
    expect(callbackRef.mock.calls.some(([arg]) => arg === node)).toBe(true),
  );
});

it('sets a ref object back to null when the component unmounts', () => {
  const ref = createRef<HTMLDivElement>();

  const { unmount } = render(<TestComponent refs={[ref]} />);
  expect(ref.current).toBeInstanceOf(HTMLDivElement);

  unmount();

  expect(ref.current).toBe(null);
});

it('calls a callback ref with null when the component unmounts, if it has no cleanup', () => {
  const callbackRef = jest.fn();

  const { unmount } = render(<TestComponent refs={[callbackRef]} />);
  expect(
    callbackRef.mock.calls.some(([node]) => node instanceof HTMLDivElement),
  ).toBe(true);

  unmount();

  expect(callbackRef).toHaveBeenLastCalledWith(null);
});

it('calls the returned cleanup, not the callback ref again, when the component unmounts', () => {
  const refCleanup = jest.fn();
  const callbackRef = jest.fn((_node: HTMLDivElement | null) => refCleanup);

  const { unmount } = render(<TestComponent refs={[callbackRef]} />);
  expect(callbackRef.mock.calls.every(([node]) => node !== null)).toBe(true);

  const callsBeforeUnmount = callbackRef.mock.calls.length;

  unmount();

  expect(callbackRef).toHaveBeenCalledTimes(callsBeforeUnmount);
  expect(refCleanup).toHaveBeenCalled();
});

it('ignores null and undefined refs without affecting other refs', () => {
  const ref = createRef<HTMLDivElement>();
  const callbackRef = jest.fn();

  let renderResult: ReturnType<typeof render> | undefined;
  expect(() => {
    renderResult = render(
      <TestComponent
        refs={[null, undefined, ref, undefined, callbackRef, null]}
      />,
    );
  }).not.toThrow();

  expect(ref.current).toBeInstanceOf(HTMLDivElement);
  expect(
    callbackRef.mock.calls.some(([node]) => node instanceof HTMLDivElement),
  ).toBe(true);

  expect(() => renderResult?.unmount()).not.toThrow();

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
      const callbackRef = jest.fn(
        () => returnValue,
      ) as unknown as RefCallback<HTMLDivElement>;

      const { unmount } = render(<TestComponent refs={[callbackRef]} />);

      unmount();

      expect(callbackRef).toHaveBeenLastCalledWith(null);
    },
  );

  it('treats a callback ref that returns a function as a cleanup', () => {
    const refCleanup = jest.fn();
    const callbackRef = jest.fn(() => refCleanup);

    const { unmount } = render(<TestComponent refs={[callbackRef]} />);
    const callsBeforeUnmount = callbackRef.mock.calls.length;

    unmount();

    expect(callbackRef).toHaveBeenCalledTimes(callsBeforeUnmount);
    expect(refCleanup).toHaveBeenCalled();
  });
});

it('runs every ref on unmount, each respecting its own cleanup rules', () => {
  const refObject = createRef<HTMLDivElement>();
  const callbackWithoutCleanup = jest.fn();
  const refCleanup = jest.fn();
  const callbackWithCleanup = jest.fn(
    (_node: HTMLDivElement | null) => refCleanup,
  );

  const { unmount } = render(
    <TestComponent
      refs={[
        null,
        refObject,
        undefined,
        callbackWithoutCleanup,
        callbackWithCleanup,
      ]}
    />,
  );

  expect(refObject.current).toBeInstanceOf(HTMLDivElement);
  expect(
    callbackWithoutCleanup.mock.calls.some(
      ([node]) => node === refObject.current,
    ),
  ).toBe(true);
  expect(callbackWithCleanup.mock.calls.every(([node]) => node !== null)).toBe(
    true,
  );

  const callsBeforeUnmount = callbackWithCleanup.mock.calls.length;

  unmount();

  expect(refObject.current).toBe(null);
  expect(callbackWithoutCleanup).toHaveBeenLastCalledWith(null);
  expect(callbackWithCleanup).toHaveBeenCalledTimes(callsBeforeUnmount);
  expect(refCleanup).toHaveBeenCalled();
});
