import breakpointsDefinitions from '@rocket.chat/fuselage-tokens/dist/breakpoints.json';
import { useMemo } from 'react';

import { useMediaQueries } from './useMediaQueries';

const mediaQueries = breakpointsDefinitions
  .slice(1)
  .map((breakpoint) => `(min-width: ${breakpoint.minViewportWidth}px)`);

/**
 * Hook to catch which responsive design' breakpoints are active.
 *
 * @returns an array of the active breakpoint names
 * @public
 */
export const useBreakpoints = (): string[] => {
  const matches = useMediaQueries(...mediaQueries);

  return useMemo(
    () =>
      matches.reduce<string[]>(
        (names, matches, i) => {
          if (matches) {
            return [...names, breakpointsDefinitions[i + 1].name];
          }

          return names;
        },
        [breakpointsDefinitions[0].name]
      ),
    [matches]
  );
};
