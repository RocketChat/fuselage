import { useMemo } from 'react';
import { Theme, theme as defaultTheme } from '../Theme';

export const useStyle = <T extends Record<string, any>>(
  styleFactory: (theme: Theme) => T,
  deps: any[] = [],
  theme: Theme = defaultTheme
): T => {
  return useMemo(() => styleFactory(theme), [...deps, theme]);
};
