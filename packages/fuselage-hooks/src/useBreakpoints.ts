import breakpointsDefinitions from '@rocket.chat/fuselage-tokens/breakpoints.json';
import { useMemo } from 'react';

import { useMediaQueries } from './useMediaQueries';

/**
 * Hook to catch which responsive design' breakpoints are active.
 *
 * @returns an array of the active breakpoint names
 * @public
 */
export const useBreakpoints = (unit: 'px' | 'em' = 'em'): string[] => {
  const matches = useMediaQueries(
    ...useMemo(
      () =>
        breakpointsDefinitions
          .slice(1)
          .map(
            (breakpoint) =>
              `(min-width: ${
                unit === 'px'
                  ? `${breakpoint.minViewportWidth}px`
                  : `${breakpoint.minViewportWidth! / 16}em`
              })`
          ),
      [unit]
    )
  );

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
