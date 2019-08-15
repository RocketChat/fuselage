import { useMemo } from 'react';


export const useUniqueId = () => useMemo(() => Math.random().toString(36).slice(2), []);
