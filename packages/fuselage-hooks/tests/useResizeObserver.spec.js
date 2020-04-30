import { runHooks } from '../.jest/helpers';
import { useResizeObserver } from '../src';

describe('useResizeObserver hook', () => {
  let ro;

  beforeEach(() => {
    ro = {
      width: Math.round(1000 * Math.random()),
      height: Math.round(1000 * Math.random()),
      cb: () => {},
      observe: jest.fn(() => {
        ro.cb([{
          contentRect: {
            width: ro.width,
            height: ro.height,
          },
        }]);
      }),
      unobserve: jest.fn(),
      resize: () => {
        ro.width = Math.round(1000 * Math.random());
        ro.height = Math.round(1000 * Math.random());
        ro.cb([{
          contentRect: {
            width: ro.width,
            height: ro.height,
          },
        }]);
        return [ro.width, ro.height];
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
    const [{ width, height }] = runHooks(() => useResizeObserver());
    expect(width).toBe(undefined);
    expect(height).toBe(undefined);
  });

  it('gets the observed element size', () => {
    const [expectedWidth, expectedHeight] = ro.resize();
    const [, { width, height }] = runHooks(() => useResizeObserver(), [
      ({ ref }) => {
        ref.current = document.createElement('div');
      },
    ]);
    expect(width).toBe(expectedWidth);
    expect(height).toBe(expectedHeight);
  });

  it('gets the observed element size after resize', () => {
    const [expectedWidthA, expectedHeightA] = ro.resize();
    let expectedWidthB;
    let expectedHeightB;
    const [,
      { width: widthA, height: heightA },
      { width: widthB, height: heightB },
    ] = runHooks(() => useResizeObserver(), [
      ({ ref }) => {
        ref.current = document.createElement('div');
      },
      () => {
        [expectedWidthB, expectedHeightB] = ro.resize();
      },
    ]);

    expect(widthA).toBe(expectedWidthA);
    expect(heightA).toBe(expectedHeightA);
    expect(widthB).toBe(expectedWidthB);
    expect(heightB).toBe(expectedHeightB);
  });
});
