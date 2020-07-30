import { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';

const makeStorage = (
  storageFactory: Storage | (() => Storage),
  name: string,
): <T>(key: string, initialValue: T) => [T, Dispatch<SetStateAction<T>>] => {
  let storage: Storage = null;

  if (typeof window !== 'undefined') {
    storage = typeof storageFactory === 'function' ? storageFactory() : storageFactory;
  }

  const getKey = (key: string): string => `fuselage-${ name }-${ key }`;

  return function useGenericStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [storedValue, setStoredValue] = useState<T>(() => {
      if (!storage) {
        return initialValue;
      }

      const item = storage.getItem(getKey(key));
      return item ? JSON.parse(item) : initialValue;
    });

    const setValue: Dispatch<SetStateAction<T>> = useCallback((value: T extends unknown ? SetStateAction<T> : never): void => {
      setStoredValue((prevValue: T) => {
        const valueToStore: T = typeof value === 'function' ? value(prevValue) : value;
        storage.setItem(getKey(key), JSON.stringify(valueToStore));
        return valueToStore;
      });
    }, [key]);

    useEffect(() => {
      const handleEvent = (event: StorageEvent): void => {
        if (event.key !== getKey(key)) {
          return;
        }

        setStoredValue(JSON.parse(event.newValue));
      };

      window.addEventListener('storage', handleEvent);
      return () => {
        window.removeEventListener('storage', handleEvent);
      };
    }, [key]);

    return [storedValue, setValue];
  };
};

/**
 * Hook to deal with localStorage
 * @param key - the key associated to the value in the storage
 * @param initialValue - the value returned when the key is not found at the storage
 * @returns a state and a setter function
 * @public
 */
export const useLocalStorage = makeStorage(() => window.localStorage, 'localStorage');

/**
 * Hook to deal with sessionStorage
 * @param key - the key associated to the value in the storage
 * @param initialValue - the value returned when the key is not found at the storage
 * @returns a state and a setter function
 * @public
 */
export const useSessionStorage = makeStorage(() => window.sessionStorage, 'sessionStorage');
