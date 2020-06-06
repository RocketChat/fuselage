import { useMemo } from 'react';

export const useUniqueId = (): string =>
  useMemo(() => Math.random().toString(36).slice(2), []);
