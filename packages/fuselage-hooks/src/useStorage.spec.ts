import { renderHook, act } from './testing';
import { useStorage } from './useStorage';

describe.each(['localStorage', 'sessionStorage'] as const)(
  '%s key changes',
  (storageName) => {
    const storage = window[storageName];
    const storedKey = (key: string) => `fuselage-${storageName}-${key}`;

    beforeEach(() => storage.clear());
    afterEach(() => storage.clear());

    it('reads the new key and uses its value for functional updates', () => {
      storage.setItem(storedKey('first'), '1');
      storage.setItem(storedKey('second'), '10');
      const { result, rerender } = renderHook(
        ({ key }) => useStorage(storage, key, 0),
        { initialProps: { key: 'first' } },
      );

      expect(result.current[0]).toBe(1);
      rerender({ key: 'second' });
      expect(result.current[0]).toBe(10);

      act(() => result.current[1]((value) => value + 1));
      expect(result.current[0]).toBe(11);
      expect(storage.getItem(storedKey('first'))).toBe('1');
      expect(storage.getItem(storedKey('second'))).toBe('11');
    });

    it('uses the latest fallback when switching to a missing key', () => {
      storage.setItem(storedKey('first'), '1');
      const { result, rerender } = renderHook(
        ({ key, fallback }) => useStorage(storage, key, fallback),
        { initialProps: { key: 'first', fallback: 0 } },
      );

      rerender({ key: 'missing', fallback: 42 });
      expect(result.current[0]).toBe(42);
      expect(storage.getItem(storedKey('missing'))).toBeNull();
    });

    it('keeps object snapshots stable while the key is unchanged', () => {
      storage.setItem(storedKey('object'), JSON.stringify({ count: 1 }));
      const { result, rerender } = renderHook(() =>
        useStorage(storage, 'object', { count: 0 }),
      );
      const snapshot = result.current[0];

      rerender();
      expect(result.current[0]).toBe(snapshot);

      act(() => result.current[1]({ count: 2 }));
      const updatedSnapshot = result.current[0];
      rerender();
      expect(result.current[0]).toBe(updatedSnapshot);
      expect(result.current[0]).toEqual({ count: 2 });
    });

    it('subscribes to the new key and stops listening to the old key', () => {
      const { result, rerender } = renderHook(
        ({ key }) => useStorage(storage, key, 0),
        { initialProps: { key: 'first' } },
      );
      const first = renderHook(() => useStorage(storage, 'first', 0));
      const second = renderHook(() => useStorage(storage, 'second', 0));

      act(() => second.result.current[1](10));
      rerender({ key: 'second' });
      expect(result.current[0]).toBe(10);

      act(() => first.result.current[1](2));
      expect(result.current[0]).toBe(10);
      act(() => second.result.current[1](20));
      expect(result.current[0]).toBe(20);

      rerender({ key: 'first' });
      expect(result.current[0]).toBe(2);
    });
  },
);

it('reads the new storage area when it changes', () => {
  localStorage.setItem('fuselage-localStorage-area-key', '1');
  sessionStorage.setItem('fuselage-sessionStorage-area-key', '2');
  const { result, rerender } = renderHook(
    ({ storage }) => useStorage(storage, 'area-key', 0),
    { initialProps: { storage: localStorage } },
  );

  expect(result.current[0]).toBe(1);
  rerender({ storage: sessionStorage });
  expect(result.current[0]).toBe(2);

  localStorage.removeItem('fuselage-localStorage-area-key');
  sessionStorage.removeItem('fuselage-sessionStorage-area-key');
});
