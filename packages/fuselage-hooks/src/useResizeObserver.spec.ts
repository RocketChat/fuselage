import { FunctionComponent, createElement, StrictMode, RefObject, CSSProperties, useState } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import ResizeObserverMock, { createBoxSizes } from './__mocks__/ResizeObserver';
import { useResizeObserver } from '.';

describe('useResizeObserver hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    window.ResizeObserver = ResizeObserverMock;
  });

  const createRandomStyle = (): CSSProperties => ({
    boxSizing: Math.random() < 0.5 ? 'border-box' : 'content-box',
    inlineSize: Math.round(Math.random() * 1000),
    blockSize: Math.round(Math.random() * 1000),
    borderInlineStartWidth: Math.round(Math.random() * 10),
    borderInlineEndWidth: Math.round(Math.random() * 10),
    borderBlockStartWidth: Math.round(Math.random() * 10),
    borderBlockEndWidth: Math.round(Math.random() * 10),
    paddingInlineStart: Math.round(Math.random() * 50),
    paddingInlineEnd: Math.round(Math.random() * 50),
    paddingBlockStart: Math.round(Math.random() * 50),
    paddingBlockEnd: Math.round(Math.random() * 50),
  });

  it('immediately returns undefined sizes', async () => {
    let ref: RefObject<Element>;
    let borderBoxSize: ResizeObserverSize;
    let contentBoxSize: ResizeObserverSize;
    const TestComponent: FunctionComponent = () => {
      ({ ref, borderBoxSize, contentBoxSize } = useResizeObserver());
      return createElement('div', { ref });
    };

    await act(async () => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div'),
      );
    });

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(borderBoxSize).toStrictEqual({
      inlineSize: undefined,
      blockSize: undefined,
    });
    expect(contentBoxSize).toStrictEqual({
      inlineSize: undefined,
      blockSize: undefined,
    });
  });

  it('gets the observed element size', async () => {
    const initialStyle = createRandomStyle();

    let borderBoxSize: ResizeObserverSize;
    let contentBoxSize: ResizeObserverSize;

    const TestComponent: FunctionComponent = () => {
      let ref: RefObject<Element>;
      ({ ref, borderBoxSize, contentBoxSize } = useResizeObserver());
      return createElement('div', { ref, style: initialStyle });
    };

    const {
      borderBoxSize: expectedBorderBoxSize,
      contentBoxSize: expectedContentBoxSize,
    } = createBoxSizes(initialStyle);

    await act(async () => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div'),
      );
    });

    // wait the callback trigger from ResizeObserver
    await act(async () => {
      jest.advanceTimersByTime(0);
    });

    expect(borderBoxSize).toStrictEqual(expectedBorderBoxSize);
    expect(contentBoxSize).toStrictEqual(expectedContentBoxSize);
  });

  it('gets the observed element size after resize', async () => {
    const initialStyle = createRandomStyle();

    const {
      borderBoxSize: expectedBorderBoxSizeA,
      contentBoxSize: expectedContentBoxSizeA,
    } = createBoxSizes(initialStyle);

    const newStyle = createRandomStyle();

    const {
      borderBoxSize: expectedBorderBoxSizeB,
      contentBoxSize: expectedContentBoxSizeB,
    } = createBoxSizes(newStyle);

    let borderBoxSize: ResizeObserverSize;
    let contentBoxSize: ResizeObserverSize;
    let setStyle: (style: CSSProperties) => void;

    const TestComponent: FunctionComponent = () => {
      let ref: RefObject<Element>;
      ({ ref, borderBoxSize, contentBoxSize } = useResizeObserver());
      let style: CSSProperties;
      [style, setStyle] = useState(initialStyle);
      return createElement('div', { ref, style });
    };

    await act(async () => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div'),
      );
    });

    // wait the callback trigger from ResizeObserver
    await act(async () => {
      jest.advanceTimersByTime(0);
    });

    const borderBoxSizeA = borderBoxSize;
    const contentBoxSizeA = contentBoxSize;

    await act(async () => {
      setStyle(newStyle);
    });

    // wait the callback trigger from ResizeObserver
    await act(async () => {
      jest.advanceTimersByTime(0);
    });

    const borderBoxSizeB = borderBoxSize;
    const contentBoxSizeB = contentBoxSize;

    expect(borderBoxSizeA).toStrictEqual(expectedBorderBoxSizeA);
    expect(contentBoxSizeA).toStrictEqual(expectedContentBoxSizeA);
    expect(borderBoxSizeB).toStrictEqual(expectedBorderBoxSizeB);
    expect(contentBoxSizeB).toStrictEqual(expectedContentBoxSizeB);
  });

  it('debounces the observed element size', async () => {
    const initialStyle = createRandomStyle();
    const debounceDelay = 150;
    let borderBoxSize: ResizeObserverSize;
    let contentBoxSize: ResizeObserverSize;

    const TestComponent: FunctionComponent = () => {
      let ref: RefObject<Element>;
      ({ ref, borderBoxSize, contentBoxSize } = useResizeObserver({ debounceDelay }));
      return createElement('div', { ref, style: initialStyle });
    };

    const {
      borderBoxSize: expectedBorderBoxSize,
      contentBoxSize: expectedContentBoxSize,
    } = createBoxSizes(initialStyle);

    await act(async () => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        document.createElement('div'),
      );
    });

    const delayBeforeUpdate = Math.round(debounceDelay * 0.75);

    // don't wait long enough to receive a update
    await act(async () => {
      jest.advanceTimersByTime(delayBeforeUpdate);
    });

    const borderBoxSizeA = borderBoxSize;
    const contentBoxSizeA = contentBoxSize;

    // wait the callback trigger from ResizeObserver
    await act(async () => {
      jest.advanceTimersByTime(debounceDelay - delayBeforeUpdate);
    });

    const borderBoxSizeB = borderBoxSize;
    const contentBoxSizeB = contentBoxSize;

    expect(borderBoxSizeA).toStrictEqual({ inlineSize: undefined, blockSize: undefined });
    expect(contentBoxSizeA).toStrictEqual({ inlineSize: undefined, blockSize: undefined });
    expect(borderBoxSizeB).toStrictEqual(expectedBorderBoxSize);
    expect(contentBoxSizeB).toStrictEqual(expectedContentBoxSize);
  });
});
