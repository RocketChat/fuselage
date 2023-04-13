import { Emitter } from '@rocket.chat/emitter';
import type { Dispatch, SetStateAction } from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';

function makeStorageHook(
  storageFactory: Storage | (() => Storage),
  name: string
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
    initialValue: T
  ): [T, Dispatch<SetStateAction<T>>] => {
    const initialValueRef = useRef(initialValue);
    initialValueRef.current = initialValue;

    const [storedValue, setStoredValue] = useState<T>(() => {
      if (!storage) {
        return initialValue;
      }

      const item = storage.getItem(getKey(key));
      return item ? JSON.parse(item) : initialValue;
    });

    const setValue: Dispatch<SetStateAction<T>> = useCallback(
      (value) => {
        setStoredValue((prevValue: T) => {
          const valueToStore: T =
            value instanceof Function ? value(prevValue) : value;
          storage?.setItem(getKey(key), JSON.stringify(valueToStore));
          ee.emit(key, valueToStore);
          return valueToStore;
        });
      },
      [key]
    );

    useEffect(() => {
      const handleEvent = (event: StorageEvent): void => {
        if (event.key !== getKey(key)) {
          return;
        }

        setStoredValue(
          event.newValue ? JSON.parse(event.newValue) : initialValueRef.current
        );
      };

      const handleSyntheticEvent = (value: T): void => {
        setStoredValue(value);
      };
      ee.on(key, handleSyntheticEvent);
      window.addEventListener('storage', handleEvent);
      return () => {
        ee.off(key, handleSyntheticEvent);
        window.removeEventListener('storage', handleEvent);
      };
    }, [key]);

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
  'localStorage'
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
  'sessionStorage'
);
