import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { useSafeRefCallback } from './useSafeRefCallback';

const TestComponent = ({
  callback,
  renderSpan,
}: {
  callback: any;
  renderSpan?: boolean;
}) => {
  const cbRef = useSafeRefCallback(callback);

  if (renderSpan) {
    return <span ref={cbRef} />;
  }
  return <div ref={cbRef} />;
};

describe('useSafeRefCallback', () => {
  it('should work as a regular callbackRef if cleanup is not provided', () => {
    const callback = vi.fn();

    const { rerender, unmount } = render(<TestComponent callback={callback} />);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));

    rerender(<TestComponent callback={callback} renderSpan />);

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith(expect.any(HTMLSpanElement));

    unmount();

    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should run again when callback reference changes', () => {
    const callback = vi.fn();

    const { rerender, unmount } = render(<TestComponent callback={callback} />);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));

    const callback2 = vi.fn();

    rerender(<TestComponent callback={callback2} />);

    expect(callback).toHaveBeenCalledTimes(1);

    expect(callback2).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));

    rerender(<TestComponent callback={callback2} renderSpan />);

    expect(callback2).toHaveBeenCalledTimes(2);
    expect(callback2).toHaveBeenLastCalledWith(expect.any(HTMLSpanElement));

    unmount();

    expect(callback2).toHaveBeenCalledTimes(2);
  });

  it('should call cleanup if callback changes', () => {
    const cleanup = vi.fn();
    const callback = vi.fn<() => void>(() => cleanup);

    const { rerender, unmount } = render(<TestComponent callback={callback} />);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));
    expect(cleanup).not.toHaveBeenCalled();

    const cleanup2 = vi.fn();
    const callback2 = vi.fn<() => void>(() => cleanup2);

    rerender(<TestComponent callback={callback2} />);

    // Ensure first callback has been properly unmounted
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));

    expect(cleanup).toHaveBeenCalledTimes(1);

    expect(callback2).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));
    expect(cleanup2).not.toHaveBeenCalled();

    rerender(<TestComponent callback={callback2} renderSpan />);

    expect(callback2).toHaveBeenCalledTimes(2);
    expect(callback2).toHaveBeenLastCalledWith(expect.any(HTMLSpanElement));

    expect(cleanup2).toHaveBeenCalledTimes(1);

    unmount();

    expect(callback2).toHaveBeenCalledTimes(2);

    expect(cleanup2).toHaveBeenCalledTimes(2);
  });

  it('should call cleanup with previous value on rerender', () => {
    const cleanup = vi.fn();
    const callback = vi.fn<() => void>(() => cleanup);

    const { rerender, unmount } = render(<TestComponent callback={callback} />);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));

    expect(cleanup).not.toHaveBeenCalled();

    rerender(<TestComponent callback={callback} renderSpan />);

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenLastCalledWith(expect.any(HTMLSpanElement));

    expect(cleanup).toHaveBeenCalledTimes(1);

    const cleanup2 = vi.fn();
    const callback2 = vi.fn<() => void>(() => cleanup2);

    rerender(<TestComponent callback={callback2} renderSpan />);

    expect(callback).toHaveBeenCalledTimes(2);
    expect(cleanup).toHaveBeenCalledTimes(2);

    expect(callback2).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenLastCalledWith(expect.any(HTMLSpanElement));

    expect(cleanup2).not.toHaveBeenCalled();

    rerender(<TestComponent callback={callback2} />);

    expect(callback2).toHaveBeenCalledTimes(2);
    expect(callback2).toHaveBeenLastCalledWith(expect.any(HTMLDivElement));

    expect(cleanup2).toHaveBeenCalledTimes(1);

    unmount();

    expect(callback2).toHaveBeenCalledTimes(2);
    expect(cleanup2).toHaveBeenCalledTimes(2);
  });
});
