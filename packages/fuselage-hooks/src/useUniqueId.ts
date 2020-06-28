import { useDebugValue, useRef, useMemo } from 'react';

/**
 * Hook to keep a unique ID string.
 *
 * @return the unique ID string
 */
export const useUniqueId = (): string => {
  const ref = useRef<string>();

  const uniqueId = useMemo<string>(() => {
    if (!ref.current) {
      ref.current = Math.random().toString(36).slice(2);
    }
    return ref.current;
  }, []);

  useDebugValue(uniqueId);

  return uniqueId;
};
