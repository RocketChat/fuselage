import { Emitter } from '@rocket.chat/emitter';
import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { useRef, useCallback, useSyncExternalStore, useState } from 'react';

const getStorageItem = (
  key: string,
  initialValue: any,
  storage?: Storage,
): any => {
  if (!storage) {
    return initialValue;
  }

  const item = storage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

function makeStorageHook(
  storageFactory: Storage | (() => Storage),
  name: string,
): <T>(key: string, initialValue: T) => [T, Dispatch<SetStateAction<T>>] {
  let storage: Storage | undefined = undefined;

  if (typeof window !== 'undefined') {
    storage =
      typeof storageFactory === 'function' ? storageFactory() : storageFactory;
  }

  const getKey = (key: string): string => `fuselage-${name}-${key}`;

  const ee = new Emitter();

  return <T>(
    key: string,
    initialValue: T,
  ): [T, Dispatch<SetStateAction<T>>] => {
    const initialValueRef = useRef(initialValue);
    initialValueRef.current = initialValue;

    const [valueRef] = useState<MutableRefObject<T>>(() => ({
      current: getStorageItem(getKey(key), initialValue, storage),
    }));

    const getSnapshot = useCallback(() => valueRef.current, [valueRef]);

    const getServerSnapshot = useCallback(() => initialValueRef.current, []);

    const subscribe = useCallback(
      (cb: () => void) => {
        const handleEvent = (event: StorageEvent): void => {
          if (event.key !== getKey(key)) {
            return;
          }
          ee.emit(
            key,
            event.newValue
              ? JSON.parse(event.newValue)
              : initialValueRef.current,
          );
        };

        const offCb = ee.on(key, (value: T): void => {
          valueRef.current = value;
          cb();
        });

        window.addEventListener('storage', handleEvent);
        return () => {
          offCb();
          window.removeEventListener('storage', handleEvent);
        };
      },
      [key, valueRef],
    );

    const storedValue = useSyncExternalStore(
      subscribe,
      getSnapshot,
      getServerSnapshot,
    );

    const setValue: Dispatch<SetStateAction<T>> = useCallback(
      (value) => {
        const valueToStore: T =
          value instanceof Function ? value(valueRef.current) : value;
        storage?.setItem(getKey(key), JSON.stringify(valueToStore));
        ee.emit(key, valueToStore);
        return valueToStore;
      },
      [key, valueRef],
    );

    return [storedValue, setValue];
  };
}

/**
 * Hook to deal with localStorage
 * @param key - the key associated to the value in the storage
 * @param initialValue - the value returned when the key is not found at the storage
 * @returns a state and a setter function
 * @public
 */
export const useLocalStorage = makeStorageHook(
  () => window.localStorage,
  'localStorage',
);

/**
 * Hook to deal with sessionStorage
 * @param key - the key associated to the value in the storage
 * @param initialValue - the value returned when the key is not found at the storage
 * @returns a state and a setter function
 * @public
 */
export const useSessionStorage = makeStorageHook(
  () => window.sessionStorage,
  'sessionStorage',
);
