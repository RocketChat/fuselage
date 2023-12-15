import { renderHook, act } from '@testing-library/react-hooks';
import type { RefCallback, MutableRefObject } from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { useResizeObserver } from './useResizeObserver';

withResizeObserverMock();

beforeAll(() => {
  jest.useFakeTimers();
});

let element: HTMLElement;

beforeEach(() => {
  element = document.createElement('div');
  document.body.append(element);
});

afterEach(() => {
  element.remove();
});

const isRefCallback = <T>(x: unknown): x is RefCallback<T> =>
  typeof x === 'function';
const isMutableRefObject = <T>(x: unknown): x is MutableRefObject<T> =>
  typeof x === 'object';

const wrapRef = (ret: ReturnType<typeof useResizeObserver>) => {
  const { ref } = ret;

  if (isRefCallback(ref)) {
    ref(element);
  }

  if (isMutableRefObject(ref)) {
    Object.assign(ret.ref, { current: element });
  }
  return ret;
};

it('immediately returns undefined sizes', () => {
  const { result } = renderHook(() => useResizeObserver());

  expect(result.current.borderBoxSize).toEqual({
    inlineSize: undefined,
    blockSize: undefined,
  });
  expect(result.current.contentBoxSize).toEqual({
    inlineSize: undefined,
    blockSize: undefined,
  });
});

it('gets the observed element size', async () => {
  const { result } = renderHook(() => wrapRef(useResizeObserver()));

  // triggers MutationObserver
  await act(async () => {
    element.style.width = '10px';
    element.style.height = '10px';
    element.style.padding = '5px';
  });

  // waits for debounced state mutation
  await act(async () => {
    jest.advanceTimersByTime(0);
  });

  expect(result.current.borderBoxSize).toEqual({
    inlineSize: 20,
    blockSize: 20,
  });
  expect(result.current.contentBoxSize).toEqual({
    inlineSize: 10,
    blockSize: 10,
  });
});

it('gets the observed element size after resize', async () => {
  const { result } = renderHook(() => wrapRef(useResizeObserver()));

  // triggers MutationObserver
  await act(async () => {
    element.style.width = '10px';
    element.style.height = '10px';
    element.style.padding = '5px';
  });

  // waits for debounced state mutation
  await act(async () => {
    jest.advanceTimersByTime(0);
  });

  expect(result.current.borderBoxSize).toEqual({
    inlineSize: 20,
    blockSize: 20,
  });
  expect(result.current.contentBoxSize).toEqual({
    inlineSize: 10,
    blockSize: 10,
  });

  // triggers MutationObserver
  await act(async () => {
    element.style.boxSizing = 'border-box';
  });

  // waits for debounced state mutation
  await act(async () => {
    jest.advanceTimersByTime(0);
  });

  expect(result.current.borderBoxSize).toEqual({
    inlineSize: 10,
    blockSize: 10,
  });
  expect(result.current.contentBoxSize).toEqual({
    inlineSize: 0,
    blockSize: 0,
  });
});

it('debounces the observed element size', async () => {
  const halfDelay = 50;
  const delay = 2 * halfDelay;

  const { result } = renderHook(() =>
    wrapRef(useResizeObserver({ debounceDelay: delay }))
  );

  // triggers MutationObserver
  await act(async () => {
    element.style.width = '10px';
    element.style.height = '10px';
    element.style.padding = '5px';
  });

  await act(async () => {
    jest.advanceTimersByTime(halfDelay);
  });

  expect(result.current.borderBoxSize).toEqual({
    inlineSize: undefined,
    blockSize: undefined,
  });
  expect(result.current.contentBoxSize).toEqual({
    inlineSize: undefined,
    blockSize: undefined,
  });

  // waits for debounced state mutation
  await act(async () => {
    jest.advanceTimersByTime(halfDelay);
  });

  expect(result.current.borderBoxSize).toEqual({
    inlineSize: 20,
    blockSize: 20,
  });
  expect(result.current.contentBoxSize).toEqual({
    inlineSize: 10,
    blockSize: 10,
  });
});
