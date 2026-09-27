import { act, cleanup, render, screen } from '@testing-library/react';

import { useElementIsVisible } from './useElementIsVisible';

const observers: {
  callback: IntersectionObserverCallback;
  observer: IntersectionObserver;
}[] = [];
const originalObserver = globalThis.IntersectionObserver;

beforeEach(() => {
  jest.useFakeTimers();
  observers.length = 0;
  globalThis.IntersectionObserver = jest.fn((callback) => {
    const observer: IntersectionObserver = {
      root: null,
      rootMargin: '0px',
      thresholds: [0],
      takeRecords: jest.fn(() => []),
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    };
    observers.push({ callback, observer });
    return observer;
  });
});

afterEach(() => {
  cleanup();
  jest.useRealTimers();
  globalThis.IntersectionObserver = originalObserver;
});

const TestComponent = ({ id = 'first', attached = true }) => {
  const [ref, visible] = useElementIsVisible<HTMLDivElement>();
  return (
    <>
      {attached && <div key={id} ref={ref} data-testid={id} />}
      <output data-testid='visibility'>{String(visible)}</output>
    </>
  );
};

const activeObserver = () =>
  [...observers]
    .reverse()
    .find(
      ({ observer }) => jest.mocked(observer.observe).mock.calls.length > 0,
    )!;

const entry = (
  target: Element,
  isIntersecting: boolean,
): IntersectionObserverEntry => ({
  target,
  isIntersecting,
  boundingClientRect: target.getBoundingClientRect(),
  intersectionRect: target.getBoundingClientRect(),
  intersectionRatio: isIntersecting ? 1 : 0,
  rootBounds: null,
  time: 0,
});

const notify = (target: Element, isIntersecting: boolean) => {
  const { callback, observer } = activeObserver();
  act(() => {
    callback([entry(target, isIntersecting)], observer);
    jest.advanceTimersByTime(100);
  });
};

it('observes the attached element and debounces visibility updates', () => {
  render(<TestComponent />);
  const element = screen.getByTestId('first');
  const { callback, observer } = activeObserver();
  expect(observer.observe).toHaveBeenCalledWith(element);
  act(() => callback([entry(element, true)], observer));
  expect(screen.getByTestId('visibility').textContent).toBe('false');
  act(() => jest.advanceTimersByTime(100));
  expect(screen.getByTestId('visibility').textContent).toBe('true');
});

it('stops observing replaced elements and ignores their queued entries', () => {
  const { rerender } = render(<TestComponent />);
  const previous = screen.getByTestId('first');
  notify(previous, true);

  rerender(<TestComponent id='second' />);
  const current = screen.getByTestId('second');
  const { observer } = activeObserver();
  expect(observer.unobserve).toHaveBeenCalledWith(previous);
  expect(observer.observe).toHaveBeenCalledWith(current);

  notify(current, false);
  notify(previous, true);
  expect(screen.getByTestId('visibility').textContent).toBe('false');
  notify(current, true);
  expect(screen.getByTestId('visibility').textContent).toBe('true');
});

it('clears visibility and ignores entries after the element is detached', () => {
  const { rerender } = render(<TestComponent />);
  const previous = screen.getByTestId('first');
  notify(previous, true);

  rerender(<TestComponent attached={false} />);
  notify(previous, true);
  expect(screen.getByTestId('visibility').textContent).toBe('false');
  expect(activeObserver().observer.unobserve).toHaveBeenCalledWith(previous);
});

it('disconnects every created observer on unmount, including StrictMode setup', () => {
  const { unmount } = render(<TestComponent />);
  unmount();
  for (const { observer } of observers) {
    expect(observer.disconnect).toHaveBeenCalled();
  }
});

it('observes an element attached after the initial render', () => {
  const { rerender } = render(<TestComponent attached={false} />);
  rerender(<TestComponent />);
  const element = screen.getByTestId('first');

  expect(activeObserver().observer.observe).toHaveBeenCalledWith(element);
  notify(element, true);
  expect(screen.getByTestId('visibility').textContent).toBe('true');
});

it('ignores queued entries from a disconnected StrictMode observer', () => {
  render(<TestComponent />);
  const element = screen.getByTestId('first');
  const disconnected = observers.filter(
    ({ observer }) => jest.mocked(observer.disconnect).mock.calls.length > 0,
  );
  expect(disconnected.length).toBeGreaterThan(0);

  act(() => {
    for (const { callback, observer } of disconnected) {
      callback([entry(element, true)], observer);
    }
    jest.advanceTimersByTime(100);
  });
  expect(screen.getByTestId('visibility').textContent).toBe('false');
});
