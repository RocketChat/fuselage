import { useMemo } from 'react';

import { debounce } from '../helpers';

export const useDebouncedCallback = (callback, delay, deps) =>
  useMemo(() => debounce(callback, delay), Array.isArray(deps) ? [callback, delay, ...deps] : undefined);
