import { MutableRefObject } from 'react';

import { runHooks } from '../jestHelpers';

import { useResizeObserver } from '..';

describe('useResizeObserver hook', () => {
  let ro;
  const contentRect = {
    width: 0,
    height: 0,
  };
  const contentBoxSize = {};
  const borderBoxSize = {};

  beforeAll(() => {
    window.ResizeObserver = class {
      constructor(callback: ResizeObserverCallback) {
        ro.cb = callback;
      }

      disconnect: () => void;

      observe = jest.fn(() => {
        ro.cb([{
          borderBoxSize,
          contentBoxSize,
          contentRect: {
            width: ro.width,
            height: ro.height,
          },
        }]);
        jest.runAllTimers();
      })

      unobserve = jest.fn(() => undefined)
    };
  });

  beforeEach(() => {
    jest.useFakeTimers();

    contentRect.width = Math.round(1000 * Math.random());

    ro = {
      width: Math.round(1000 * Math.random()),
      height: Math.round(1000 * Math.random()),
      cb: () => undefined,
      resize: () => {
        ro.width = Math.round(1000 * Math.random());
        ro.height = Math.round(1000 * Math.random());
        ro.cb([{
          borderBoxSize,
          contentBoxSize,
          contentRect: {
            width: ro.width,
            height: ro.height,
          },
        }]);
        return { contentBoxSize, borderBoxSize };
      },
    };
  });

  it('immediately returns undefined size', () => {
    ro.resize();
    const [{ contentBoxSize, borderBoxSize }] = runHooks(() => useResizeObserver());
    expect(contentBoxSize).toBe(undefined);
    expect(borderBoxSize).toBe(undefined);
  });

  it('gets the observed element size', () => {
    const {
      contentBoxSize: expectedContentBoxSize,
      borderBoxSize: expectedBorderBoxSize,
    } = ro.resize();

    const [, { contentBoxSize, borderBoxSize }] = runHooks<ReturnType<typeof useResizeObserver>>(() => useResizeObserver(), [
      ({ ref }: { ref: MutableRefObject<Element> }) => {
        ref.current = document.createElement('div');
      },
    ]);
    expect(contentBoxSize.blockSize).toBe(expectedContentBoxSize.blockSize);
    expect(contentBoxSize.inlineSize).toBe(expectedContentBoxSize.inlineSize);
    expect(borderBoxSize.blockSize).toBe(expectedBorderBoxSize.blockSize);
    expect(borderBoxSize.inlineSize).toBe(expectedBorderBoxSize.inlineSize);
  });

  it('gets the observed element size after resize', () => {
    const {
      contentBoxSize: expectedContentBoxSizeA,
      borderBoxSize: expectedBorderBoxSizeA,
    } = ro.resize();
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
        } = ro.resize());
      },
    ]);

    expect(contentBoxSizeA.blockSize).toBe(expectedContentBoxSizeA.blockSize);
    expect(contentBoxSizeA.inlineSize).toBe(expectedContentBoxSizeA.inlineSize);
    expect(borderBoxSizeA.blockSize).toBe(expectedBorderBoxSizeA.blockSize);
    expect(borderBoxSizeA.inlineSize).toBe(expectedBorderBoxSizeA.inlineSize);
    expect(contentBoxSizeB.blockSize).toBe(expectedContentBoxSizeB.blockSize);
    expect(contentBoxSizeB.inlineSize).toBe(expectedContentBoxSizeB.inlineSize);
    expect(borderBoxSizeB.blockSize).toBe(expectedBorderBoxSizeB.blockSize);
    expect(borderBoxSizeB.inlineSize).toBe(expectedBorderBoxSizeB.inlineSize);
  });
});
