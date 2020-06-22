import { MutableRefObject } from 'react';

import { runHooks } from './jestHelpers';
import { useResizeObserver } from '.';

class ResizeObserverMock implements ResizeObserver {
  static callback: ResizeObserverCallback = () => undefined

  static contentRect: DOMRectReadOnly = {
    bottom: undefined,
    left: undefined,
    right: undefined,
    top: undefined,
    x: undefined,
    y: undefined,
    width: undefined,
    height: undefined,
    toJSON() {
      return ResizeObserverMock.contentRect;
    },
  }

  static borderBoxSize: ResizeObserverSize = {
    inlineSize: undefined,
    blockSize: undefined,
  }

  static contentBoxSize: ResizeObserverSize = {
    inlineSize: undefined,
    blockSize: undefined,
  }

  static resize = (): {
    contentRect: DOMRectReadOnly,
    borderBoxSize: ResizeObserverSize,
    contentBoxSize: ResizeObserverSize
  } => {
    ResizeObserverMock.callback([{
      target: null,
      contentRect: {
        bottom: undefined,
        left: undefined,
        right: undefined,
        top: undefined,
        x: undefined,
        y: undefined,
        width: Math.round(1000 * Math.random()),
        height: Math.round(1000 * Math.random()),
        toJSON() { return {}; },
      },
      borderBoxSize: ResizeObserverMock.borderBoxSize,
      contentBoxSize: ResizeObserverMock.contentBoxSize,
    }], null);
    return {
      contentRect: ResizeObserverMock.contentRect,
      borderBoxSize: ResizeObserverMock.borderBoxSize,
      contentBoxSize: ResizeObserverMock.contentBoxSize,
    };
  }

  constructor(callback: ResizeObserverCallback) {
    ResizeObserverMock.callback = callback;
  }

  disconnect = jest.fn((): void => {
    ResizeObserverMock.callback = () => undefined;
  })

  observe = jest.fn((target: Element) => {
    ResizeObserverMock.callback([{
      target,
      contentRect: ResizeObserverMock.contentRect,
      borderBoxSize: ResizeObserverMock.borderBoxSize,
      contentBoxSize: ResizeObserverMock.contentBoxSize,
    }], this);
    jest.runAllTimers();
  })

  unobserve = jest.fn(() => undefined)
}

describe('useResizeObserver hook', () => {
  beforeAll(() => {
    jest.useFakeTimers();

    window.ResizeObserver = ResizeObserverMock;
  });

  beforeEach(() => {
    ResizeObserverMock.contentRect = {
      ...ResizeObserverMock.contentRect,
      width: Math.round(1000 * Math.random()),
    };
  });

  it('immediately returns undefined size', () => {
    ResizeObserverMock.resize();
    const [{ contentBoxSize, borderBoxSize }] = runHooks(() => useResizeObserver());
    expect(contentBoxSize).toBe(undefined);
    expect(borderBoxSize).toBe(undefined);
  });

  it('gets the observed element size', () => {
    const {
      contentBoxSize: expectedContentBoxSize,
      borderBoxSize: expectedBorderBoxSize,
    } = ResizeObserverMock.resize();

    const [, { contentBoxSize, borderBoxSize }] = runHooks<ReturnType<typeof useResizeObserver>>(() => useResizeObserver(), [
      ({ ref }: { ref: MutableRefObject<Element> }) => {
        ref.current = document.createElement('div');
      },
    ]);
    expect(contentBoxSize).toStrictEqual(expectedContentBoxSize);
    expect(borderBoxSize).toStrictEqual(expectedBorderBoxSize);
  });

  it('gets the observed element size after resize', () => {
    const {
      contentBoxSize: expectedContentBoxSizeA,
      borderBoxSize: expectedBorderBoxSizeA,
    } = ResizeObserverMock.resize();
    let expectedContentBoxSizeB;
    let expectedBorderBoxSizeB;
    const [
      ,
      {
        contentBoxSize: contentBoxSizeA,
        borderBoxSize: borderBoxSizeA,
      },
      {
        contentBoxSize: contentBoxSizeB,
        borderBoxSize: borderBoxSizeB,
      },
    ] = runHooks<ReturnType<typeof useResizeObserver>>(() => useResizeObserver(), [
      ({ ref }: { ref: MutableRefObject<Element> }) => {
        ref.current = document.createElement('div');
      },
      () => {
        ({
          contentBoxSize: expectedContentBoxSizeB,
          borderBoxSize: expectedBorderBoxSizeB,
        } = ResizeObserverMock.resize());
      },
    ]);

    expect(contentBoxSizeA).toStrictEqual(expectedContentBoxSizeA);
    expect(borderBoxSizeA).toStrictEqual(expectedBorderBoxSizeA);
    expect(contentBoxSizeB).toStrictEqual(expectedContentBoxSizeB);
    expect(borderBoxSizeB).toStrictEqual(expectedBorderBoxSizeB);
  });
});
