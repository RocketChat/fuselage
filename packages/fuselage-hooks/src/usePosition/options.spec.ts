import { act, renderHook } from '@testing-library/react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import type { UsePositionOptions } from '.';
import { usePosition } from '.';

withResizeObserverMock();

let anchor: HTMLDivElement;
let target: HTMLDivElement;
let container: HTMLDivElement;
const observe = jest.fn();

beforeEach(() => {
  jest.useFakeTimers();
  observe.mockClear();
  jest.spyOn(window, 'ResizeObserver').mockImplementation(() => ({
    observe,
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
  anchor = document.createElement('div');
  target = document.createElement('div');
  container = document.createElement('div');
  anchor.dataset['kind'] = 'anchor';
  target.dataset['kind'] = 'target';
  container.append(anchor, target);
  document.body.append(container);
  jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(function (this: HTMLElement) {
      if (this.dataset['kind'] === 'anchor')
        return new DOMRect(100, 100, 40, 20);
      if (this.dataset['kind'] === 'target') return new DOMRect(0, 0, 50, 30);
      return new DOMRect(0, 0, 500, 500);
    });
});

afterEach(() => {
  container.remove();
  jest.restoreAllMocks();
  jest.useRealTimers();
});

it.each([
  [{ placement: 'top-start' }, 62],
  [{ margin: 20 }, 140],
] satisfies [UsePositionOptions, number][])(
  'repositions when options change to %j without a resize event',
  (options, expectedTop) => {
    const anchorRef = { current: anchor };
    const targetRef = { current: target };
    const { result, rerender } = renderHook(
      (options: UsePositionOptions) =>
        usePosition(anchorRef, targetRef, { container, ...options }),
      { initialProps: {} as UsePositionOptions },
    );
    act(() => jest.advanceTimersByTime(30));
    expect(result.current.style.top).toBe(128);
    rerender(options);
    act(() => jest.advanceTimersByTime(30));
    expect(result.current.style.top).toBe(expectedTop);
  },
);

it('observes the replacement container', () => {
  const anchorRef = { current: anchor };
  const targetRef = { current: target };
  const { rerender } = renderHook(
    (container: Element) => usePosition(anchorRef, targetRef, { container }),
    { initialProps: container as Element },
  );
  expect(observe).toHaveBeenCalledWith(container);
  rerender(document.body);
  expect(observe).toHaveBeenCalledWith(document.body);
});
