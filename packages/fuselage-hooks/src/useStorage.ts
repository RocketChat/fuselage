import { useState, useEffect, useCallback, useRef } from 'react';

const FakeStorage = new class implements Storage {
  private dict = {};

  /**
 * Returns the number of key/value pairs currently present in the list associated with the object.
 */
  get length(): number {
    return Object.keys(this.dict).length;
  }

  /**
   * Empties the list associated with the object of all key/value pairs, if there are any.
   */
  clear(): void{
    this.dict = {};
  }

  /**
   * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
   */
  getItem(key: string): string | null {
    return this.dict[key];
  }

  /**
   * Returns the name of the nth key in the list, or null if n is greater than or equal to the number of key/value pairs in the object.
   */
  key(index: number): string | null {
    return Object.keys(this.dict)[index];
  }

  /**
   * Removes the key/value pair with the given key from the list associated with the object, if a key/value pair with the given key exists.
   */
  removeItem(key: string): void {
    delete this.dict[key];
  }

  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   *
   * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
   */
  setItem(key: string, value: string) : void {
    this.dict[key] = value;
  }

  [name: string]: any;
}();

const makeStorage = (storageFactory: Storage | (() => Storage), name: string): <T>(key: string, initialValue: T) => [T, any] => {
  let storage: Storage = FakeStorage;
  try {
    storage = storageFactory instanceof Function ? storageFactory() : storageFactory || storage;
  } catch (error) {
    // console.log('useLocalStorage Using Fake Storage ->', error);
  }
  const getKey = (key: string): string => `fuselage-${ name }-${ key }`;
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
 * @param key
 * @param initialValue
 * @return a state and a setter function
 */
export const useLocalStorage = makeStorage(() => window.localStorage, 'localStorage');

/**
 * Hook to deal with sessionStorage
 * @param key
 * @param initialValue
 * @return a state and a setter function
 */
export const useSessionStorage = makeStorage(() => window.sessionStorage, 'sessionStorage');
