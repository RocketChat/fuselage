import { useLayoutEffect, useState } from 'react';

/**
 * Hook to listen to a media query.
 *
 * @param {string} [query] - the CSS3 media query expression
 * @return {bool} - `true` if the media query matches; `false` is it does not match or the query is not defined
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (!query) {
      return false;
    }

    const { matches } = window.matchMedia(query);
    return !!matches;
  });

  useLayoutEffect(() => {
    if (!query) {
      return;
    }

    let mounted = true;
    const mql = window.matchMedia(query);

    const handleChange = () => {
      if (!mounted) {
        return;
      }

      setMatches(!!mql.matches);
    };

    mql.addListener(handleChange);
    setMatches(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(handleChange);
    };
  }, [query]);

  return matches;
};
