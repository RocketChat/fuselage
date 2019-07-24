import { useMemo } from 'react';


export const useUniqueId = (deps = []) => useMemo(() => Math.random().toString(36), deps);
