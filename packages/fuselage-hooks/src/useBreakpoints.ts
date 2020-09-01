import breakpointTokens from '@rocket.chat/fuselage-tokens/breakpoints.json';
import { useMemo } from 'react';

import { useMediaQueries } from './useMediaQueries';

const sortedBreakpoints = Object.entries(breakpointTokens)
  .map(([name, params]) => ({ name, ...params }))
  .sort((a, b) => (a.minViewportWidth ?? 0) - (b.minViewportWidth ?? 0));

const mediaQueries = sortedBreakpoints
  .slice(1)
  .map((breakpoint) => `(min-width: ${ breakpoint.minViewportWidth }px)`);

/**
 * Hook to catch which responsive design' breakpoints are active.
 *
 * @returns an array of the active breakpoint names
 * @public
 */
export const useBreakpoints = (): string[] => {
  const matches = useMediaQueries(...mediaQueries);

  return useMemo(() => matches.reduce<string[]>((names, matches, i) => {
    if (matches) {
      return [...names, sortedBreakpoints[i + 1].name];
    }

    return names;
  }, [sortedBreakpoints[0].name]), [matches]);
};
