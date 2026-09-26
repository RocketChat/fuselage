import { withClipboardMock } from 'testing-utils/mocks/withClipboardMock';

import { renderHook, act } from './testing';
import { useClipboard } from './useClipboard';

let container: Element | undefined;

beforeAll(() => {
  jest.useFakeTimers();
});

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container?.remove();
  container = undefined;
});

const withWriteText = withClipboardMock();

it('has hasCopied and copy properties', () => {
  const { result } = renderHook(() => useClipboard('Lorem Ipsum'));

  const { copy, hasCopied } = result.current;

  expect(copy).toBeInstanceOf(Function);
  expect(hasCopied).toBe(false);
});

it('updates hasCopied to true', async () => {
  const { result } = renderHook(() => useClipboard('Lorem Ipsum'));

  await act(async () => {
    const { copy } = result.current;
    await copy();
  });

  expect(result.current.hasCopied).toBe(true);
});

it('reverts hasCopied to false', async () => {
  const halfDelay = 50;
  const delay = 2 * halfDelay;

  const { result } = renderHook(() =>
    useClipboard('Lorem Ipsum', { clearTime: delay }),
  );

  await act(async () => {
    const { copy } = result.current;
    await copy();
  });

  expect(result.current.hasCopied).toBe(true);

  act(() => {
    jest.advanceTimersByTime(halfDelay);
  });

  expect(result.current.hasCopied).toBe(true);

  act(() => {
    jest.advanceTimersByTime(halfDelay);
  });

  expect(result.current.hasCopied).toBe(false);
});

it('runs only success function receiving event object', async () => {
  const onCopySuccess = jest.fn();
  const onCopyError = jest.fn();

  const { result } = renderHook(() =>
    useClipboard('Lorem Ipsum', {
      onCopySuccess,
      onCopyError,
    }),
  );

  const event = new MouseEvent('click');

  await act(async () => {
    const { copy } = result.current;
    await copy(event);
  });

  expect(onCopySuccess).toHaveBeenCalledWith(event);
  expect(onCopyError).toHaveBeenCalledTimes(0);
});

it('keeps feedback visible for the full delay after the latest copy', async () => {
  const { result } = renderHook(() =>
    useClipboard('Lorem Ipsum', { clearTime: 100 }),
  );

  await act(async () => result.current.copy());
  act(() => jest.advanceTimersByTime(75));
  await act(async () => result.current.copy());

  act(() => jest.advanceTimersByTime(25));
  expect(result.current.hasCopied).toBe(true);

  act(() => jest.advanceTimersByTime(74));
  expect(result.current.hasCopied).toBe(true);

  act(() => jest.advanceTimersByTime(1));
  expect(result.current.hasCopied).toBe(false);
});

it('clears the feedback timer when unmounted after repeated copies', async () => {
  const { result, unmount } = renderHook(() => useClipboard('Lorem Ipsum'));
  jest.runAllTicks();
  const initialTimerCount = jest.getTimerCount();

  await act(async () => result.current.copy());
  await act(async () => result.current.copy());
  jest.runAllTicks();
  expect(jest.getTimerCount()).toBe(initialTimerCount + 1);

  unmount();
  expect(jest.getTimerCount()).toBe(initialTimerCount);
});

it('does not extend feedback when a subsequent copy fails', async () => {
  const onCopyError = jest.fn();
  const { result } = renderHook(() =>
    useClipboard('Lorem Ipsum', { clearTime: 100, onCopyError }),
  );

  await act(async () => result.current.copy());
  act(() => jest.advanceTimersByTime(75));

  const error = new Error('Clipboard unavailable');
  withWriteText(() => Promise.reject(error));
  await act(async () => result.current.copy());
  expect(onCopyError).toHaveBeenCalledWith(error);

  act(() => jest.advanceTimersByTime(25));
  expect(result.current.hasCopied).toBe(false);
});

it('runs only error function receiving error object', async () => {
  const rejection = new Error('rejected');
  withWriteText(() => Promise.reject(rejection));

  const onCopyError = jest.fn();
  const onCopySuccess = jest.fn();

  const { result } = renderHook(() =>
    useClipboard('Lorem Ipsum', {
      onCopySuccess,
      onCopyError,
    }),
  );

  const event = new MouseEvent('click');

  await act(async () => {
    const { copy } = result.current;
    await copy(event);
  });

  expect(onCopySuccess).toHaveBeenCalledTimes(0);
  expect(onCopyError).toHaveBeenCalledWith(rejection);
});
