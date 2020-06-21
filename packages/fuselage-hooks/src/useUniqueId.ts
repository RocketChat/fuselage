import { useDebugValue } from 'react';

import { useLazyRef } from './useLazyRef';

/**
 * Hook to keep a unique ID string.
 *
 * @return the unique ID string
 */
export const useUniqueId = (): string => {
  const { current } = useLazyRef(() => Math.random().toString(36).slice(2));
  useDebugValue(current);
  return current;
};
