import { runHooks } from '../.jest/helpers';
import { useResizeObserver } from '../src';

describe('useResizeObserver hook', () => {
  let ro;

  beforeEach(() => {
    const contentBoxSize = {};
    const borderBoxSize = {};

    const trigger = () => {
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
    };

    ro = {
      width: Math.round(1000 * Math.random()),
      height: Math.round(1000 * Math.random()),
      cb: () => {},
      observe: jest.fn(() => {
        ro.cb([{
          borderBoxSize,
          contentBoxSize,
          contentRect: {
            width: ro.width,
            height: ro.height,
          },
        }]);
      }),
      unobserve: jest.fn(),
      resize: () => {
        trigger();
        return { contentBoxSize, borderBoxSize };
      },
    };

    window.ResizeObserver = function(cb) {
      ro.cb = cb;
      this.observe = ro.observe;
      this.unobserve = ro.unobserve;
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

    const [, { contentBoxSize, borderBoxSize }] = runHooks(() => useResizeObserver(), [
      ({ ref }) => {
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
    ] = runHooks(() => useResizeObserver(), [
      ({ ref }) => {
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
