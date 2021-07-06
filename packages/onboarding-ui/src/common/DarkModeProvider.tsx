import { usePrefersColorScheme } from '@rocket.chat/fuselage-hooks';
import { createContext, ReactElement, ReactNode, useContext } from 'react';

const DarkModeContext = createContext(true);

const useDarkModeQuery = (forced?: boolean) => {
  const systemDarkMode = usePrefersColorScheme('dark');

  if (forced !== undefined) {
    return forced;
  }

  return systemDarkMode;
};

type DarkModeProviderProps = {
  children?: ReactNode;
  forcedDarkMode?: boolean;
};

const DarkModeProvider = ({
  children,
  forcedDarkMode,
}: DarkModeProviderProps): ReactElement => {
  const value = useDarkModeQuery(forcedDarkMode);
  return <DarkModeContext.Provider children={children} value={value} />;
};

export default DarkModeProvider;

export const useDarkMode = (): boolean => useContext(DarkModeContext);
