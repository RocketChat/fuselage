import type { ReactElement } from 'react';
import { createContext, useContext } from 'react';

export type LayoutContextValue = {
  logo?: ReactElement;
  logoDark?: ReactElement;
  background?: string;
  backgroundDark?: string;
  forceDarkMode?: boolean;
};

export const LayoutContext = createContext<LayoutContextValue>({});

export const useLayoutContext = () => useContext(LayoutContext);
