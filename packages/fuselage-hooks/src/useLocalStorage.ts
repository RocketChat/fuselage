import { useState, useEffect, useCallback, useRef } from 'react';

const makeStorage = (storage: Storage, name: string): <T>(key: string, initialValue: T) => [T, any] => {
  const getKey = (key: string): string => `fuselage-hooks-${ name }-${ key }`;
  return function useGenericStorage<T>(key: string, initialValue: T): [T, any] {
    const [storedValue, setStoredValue] = useState<T>(() => {
      try {
        const item = storage.getItem(getKey(key));
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log('useLocalStorage Error ->', error);
        return initialValue;
      }
    });

    const currentValue = useRef<T>();

    currentValue.current = storedValue;

    const setValue = useCallback((value: T): void => {
      try {
        const valueToStore = value instanceof Function ? value(currentValue.current) : value;

        setStoredValue(valueToStore);

        storage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log('useLocalStorage setValue Error ->', error);
      }
    }, [key]);

    useEffect(() => {
      function handleEvent(e: StorageEvent): void {
        if (e.key !== getKey(key)) {
          return;
        }
        setStoredValue(JSON.parse(e.newValue));
      }
      window.addEventListener('storage', handleEvent);
      return () => window.removeEventListener('storage', handleEvent);
    }, [key]);

    return [storedValue, setValue];
  };
};
/**
 * Hook to deal with localStorage
 * @param key
 * @param initialValue
 * @return a state and a setter function
 */
export const useLocalStorage = makeStorage(window.localStorage, 'localStorage');

/**
 * Hook to deal with sessionStorage
 * @param key
 * @param initialValue
 * @return a state and a setter function
 */
export const useSessionStorage = makeStorage(window.sessionStorage, 'sessionStorage');
