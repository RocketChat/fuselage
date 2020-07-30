import { useMemo } from 'react';
import { useSubscription, Subscription } from 'use-subscription';

import { useStableArray } from './useStableArray';

/**
 * Hook to listen to a set of media queries.
 *
 * @param queries - the CSS3 expressions of media queries
 * @returns a set of booleans expressing if the media queries match or not
 * @public
 */
export const useMediaQueries = (...queries: string[]): boolean[] => {
  const stableQueries = useStableArray(queries);

  const subscription = useMemo<Subscription<boolean[]>>(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return {
        getCurrentValue: () => Array.from({ length: stableQueries.length }, () => false),
        subscribe: () => () => undefined,
      };
    }

    const mediaQueryLists = stableQueries.map((query) => window.matchMedia(query));

    return {
      getCurrentValue: () => {
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
          return Array.from({ length: stableQueries.length }, () => false);
        }

        return mediaQueryLists.map((mediaQueryList) => mediaQueryList.matches);
      },
      subscribe: (cb: () => void) => {
        mediaQueryLists.forEach((mediaQueryList) => {
          if (typeof mediaQueryList.addEventListener === 'function') {
            mediaQueryList.addEventListener('change', cb);
            return;
          }

          mediaQueryList.addListener(cb);
        });

        return () => {
          mediaQueryLists.forEach((mediaQueryList) => {
            if (typeof mediaQueryList.removeEventListener === 'function') {
              mediaQueryList.removeEventListener('change', cb);
              return;
            }

            mediaQueryList.removeListener(cb);
          });
        };
      },
    };
  }, [stableQueries]);

  return useSubscription(subscription);
};
