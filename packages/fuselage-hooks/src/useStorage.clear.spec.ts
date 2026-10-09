import { act, renderHook } from '@testing-library/react';

import { useStorage } from './useStorage';

afterEach(() => {
  localStorage.clear();
  sessionStorage.clear();
});

it.each(['localStorage', 'sessionStorage'] as const)(
  'resets a %s value when another document clears the storage area',
  (storageName) => {
    const storage = window[storageName];
    const { result } = renderHook(() =>
      useStorage(storage, 'clear-key', 'fallback'),
    );
    act(() => result.current[1]('saved'));
    expect(result.current[0]).toBe('saved');

    act(() => {
      storage.clear();
      window.dispatchEvent(
        new StorageEvent('storage', { key: null, storageArea: storage }),
      );
    });
    expect(result.current[0]).toBe('fallback');
  },
);

it('ignores clear events from another storage area', () => {
  const { result } = renderHook(() =>
    useStorage(localStorage, 'local-key', 'fallback'),
  );
  act(() => result.current[1]('saved'));
  act(() =>
    window.dispatchEvent(
      new StorageEvent('storage', { key: null, storageArea: sessionStorage }),
    ),
  );
  expect(result.current[0]).toBe('saved');
});

it('uses the latest fallback when storage is cleared', () => {
  const { result, rerender } = renderHook(
    ({ fallback }) => useStorage(localStorage, 'fallback-key', fallback),
    { initialProps: { fallback: 'first' } },
  );
  act(() => result.current[1]('saved'));
  rerender({ fallback: 'second' });
  act(() =>
    window.dispatchEvent(
      new StorageEvent('storage', { key: null, storageArea: localStorage }),
    ),
  );
  expect(result.current[0]).toBe('second');
});
