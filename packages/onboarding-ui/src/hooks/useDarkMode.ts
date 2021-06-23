import { useMediaQuery } from '@rocket.chat/fuselage-hooks';

export const useDarkMode = (forced?: boolean): boolean => {
  const systemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  if (forced !== undefined) {
    return forced;
  }

  return systemDarkMode;
};
