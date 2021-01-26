import { createContext } from 'react';

export type BoxTransform = (v: unknown) => unknown;

export const BoxTransforms = createContext<undefined | BoxTransform>(undefined);
