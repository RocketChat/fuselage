import { useEffect, useState, useRef, useCallback } from 'react';

/**
 * Hook to listen to a media query.
 *
 * @param query - the CSS3 media query expression
 * @return `true` if the media query matches; `false` is it does not match or the query is not defined
 */
export const useMediaQuery = (query?: string): boolean => {
  const mediaQueryListRef = useRef<MediaQueryList>();

  const getMediaQueryList = useCallback((): MediaQueryList | undefined => {
    if (!mediaQueryListRef.current && typeof window !== 'undefined' && query) {
      mediaQueryListRef.current = window.matchMedia(query);
    }

    return mediaQueryListRef.current;
  }, [query]);

  const [matches, setMatches] = useState(() => getMediaQueryList()?.matches ?? false);

  useEffect(() => {
    const mediaQueryList = getMediaQueryList();

    if (!mediaQueryList) {
      return;
    }

    setMatches(mediaQueryList.matches);

    const handleChange = (): void => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener('change', handleChange);

    return (): void => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [getMediaQueryList]);

  return matches;
};
