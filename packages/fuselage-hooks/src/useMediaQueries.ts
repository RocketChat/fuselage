import { useMemo } from 'react';
import { useSyncExternalStore } from 'use-sync-external-store/shim';

import { useStableArray } from './useStableArray';

const createStore = (queries: string[]) => {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    const snapshot = Array.from({ length: queries.length }, () => false);
    return [() => () => undefined, () => snapshot] as const;
  }

  const mediaQueryLists = queries.map((query) => window.matchMedia(query));
  let snapshot = mediaQueryLists.map(
    (mediaQueryList) => mediaQueryList.matches
  );

  return [
    (onStoreChange: () => void) => {
      const callback = () => {
        snapshot = mediaQueryLists.map(
          (mediaQueryList) => mediaQueryList.matches
        );
        onStoreChange();
      };

      mediaQueryLists.forEach((mediaQueryList) => {
        if (typeof mediaQueryList.addEventListener === 'function') {
          mediaQueryList.addEventListener('change', callback);
          return;
        }

        mediaQueryList.addListener(callback);
      });

      return () => {
        mediaQueryLists.forEach((mediaQueryList) => {
          if (typeof mediaQueryList.removeEventListener === 'function') {
            mediaQueryList.removeEventListener('change', callback);
            return;
          }

          mediaQueryList.removeListener(callback);
        });
      };
    },
    () => snapshot,
  ] as const;
};

/**
 * Hook to listen to a set of media queries.
 *
 * @param queries - the CSS3 expressions of media queries
 * @returns a set of booleans expressing if the media queries match or not
 * @public
 */
export const useMediaQueries = (...queries: string[]): boolean[] => {
  const stableQueries = useStableArray(queries);
  const [subscribe, getSnapshot] = useMemo(
    () => createStore(stableQueries),
    [stableQueries]
  );

  return useSyncExternalStore(subscribe, getSnapshot);
};
