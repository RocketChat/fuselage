import { createElement, FunctionComponent, StrictMode } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { useClipboard, UseClipboardReturn } from './useClipboard';

describe('useClipboard hook', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container.remove();
    container = null;
  });

  it('has hasCopied and copy properties', () => {
    let hookObject: UseClipboardReturn;

    const TestComponent: FunctionComponent = () => {
      hookObject = useClipboard('Lorem Ipsum Indolor Dolor');

      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        container
      );
    });

    expect(hookObject).toHaveProperty('copy');
    expect(hookObject).toHaveProperty('hasCopied');
  });

  it('updates hasCopied to true', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => Promise.resolve(),
      },
    });

    let hookObject: UseClipboardReturn;

    const TestComponent: FunctionComponent = () => {
      hookObject = useClipboard('Lorem Ipsum Indolor Dolor');

      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        container
      );
    });

    await act(async () => {
      hookObject.copy();
    });

    expect(hookObject.hasCopied).toBe(true);
  });

  it('reverts hasCopied to false', async () => {
    jest.useFakeTimers();

    const delay = 100 + Math.round(100 * Math.random());
    const delayBeforeUpdate = Math.round(delay * 0.75);

    Object.assign(navigator, {
      clipboard: {
        writeText: () =>
          new Promise<void>((resolve) => {
            return resolve();
          }),
      },
    });

    let hookObject: UseClipboardReturn;

    const TestComponent: FunctionComponent = () => {
      hookObject = useClipboard('Lorem Ipsum Indolor Dolor', {
        clearTime: delay,
      });

      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        container
      );
    });

    await act(async () => {
      hookObject.copy();
    });

    expect(hookObject.hasCopied).toBe(true);

    act(() => {
      jest.advanceTimersByTime(delayBeforeUpdate);
    });

    expect(hookObject.hasCopied).toBe(true);

    act(() => {
      jest.advanceTimersByTime(delay - delayBeforeUpdate);
    });

    expect(hookObject.hasCopied).toBe(false);
  });

  it('runs only success function receiving event object', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => Promise.resolve(),
      },
    });

    const onCopySuccess = jest.fn();
    const onCopyError = jest.fn();

    let hookObject: UseClipboardReturn;

    const TestComponent: FunctionComponent = () => {
      hookObject = useClipboard('Lorem Ipsum Indolor Dolor', {
        onCopySuccess,
        onCopyError,
      });

      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        container
      );
    });

    const event = new MouseEvent('click');
    await act(async () => {
      hookObject.copy(event);
    });

    expect(onCopySuccess).toBeCalledWith(
      expect.objectContaining({ type: 'click' })
    );
    expect(onCopyError).toBeCalledTimes(0);
  });

  it('runs only error function receiving error object', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: () => Promise.reject(new Error('rejected')),
      },
    });

    const onCopyError = jest.fn();
    const onCopySuccess = jest.fn();

    let hookObject: UseClipboardReturn;

    const TestComponent: FunctionComponent = () => {
      hookObject = useClipboard('Lorem Ipsum Indolor Dolor', {
        onCopySuccess,
        onCopyError,
      });

      return null;
    };

    act(() => {
      render(
        createElement(StrictMode, {}, createElement(TestComponent)),
        container
      );
    });

    const event = new MouseEvent('click');
    await act(async () => {
      hookObject.copy(event);
    });

    expect(onCopyError).toBeCalledWith(
      expect.objectContaining({ message: 'rejected' })
    );
    expect(onCopySuccess).toBeCalledTimes(0);
  });
});
