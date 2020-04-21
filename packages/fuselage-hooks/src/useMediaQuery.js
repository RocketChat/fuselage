// @flow

import { useEffect, useState } from 'react';

/**
 * Hook to listen to a media query.
 *
 * @param [query] - the CSS3 media query expression
 * @return `true` if the media query matches; `false` is it does not match or the query is not defined
 */
export const useMediaQuery = (query: string): bool => {
  const [matches, setMatches] = useState(() => {
    if (!query || typeof window === 'undefined' || !window.matchMedia) {
      return false;
    }

    const { matches } = window.matchMedia(query);
    return !!matches;
  });

  useEffect(() => {
    if (!query || typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQueryListener = window.matchMedia(query);
    setMatches(mediaQueryListener.matches);

    const handleChange = () => {
      setMatches(!!mediaQueryListener.matches);
    };

    mediaQueryListener.addListener(handleChange);

    return () => {
      mediaQueryListener.removeListener(handleChange);
    };
  }, [query]);

  return matches;
};
