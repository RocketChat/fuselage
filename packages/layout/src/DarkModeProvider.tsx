import { useDarkMode as useDarkModeFuselage } from '@rocket.chat/fuselage-hooks';
import type { ReactElement, ReactNode } from 'react';
import { createContext, useContext } from 'react';

const DarkModeContext = createContext(true);

type DarkModeProviderProps = {
  children?: ReactNode;
  forcedDarkMode?: boolean;
};

export const Provider = ({
  children,
  forcedDarkMode,
}: DarkModeProviderProps): ReactElement => {
  const value = useDarkModeFuselage(forcedDarkMode);
  return <DarkModeContext.Provider children={children} value={value} />;
};

export const useDarkMode = (): boolean => useContext(DarkModeContext);

// TODO: remove
export default Provider;
