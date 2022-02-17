import type { RefObject } from 'react';
import { useEffect } from 'react';

import { useMutableCallback } from './useMutableCallback';

/**
 * Hook to verify if the user clicked outside the element.
 * @param elements - array of ref elements
 * @param cb - the callback to call when the user clicked outside
 * @public
 */

export function useOutsideClick<T extends HTMLElement>(
  elements: RefObject<T>[],
  cb: (e: MouseEvent) => void
): void {
  const handleClickOutside = useMutableCallback(function handleClickOutside(
    event: MouseEvent
  ): void {
    if (
      elements.every(
        (ref) =>
          event && ref.current && !ref.current.contains(event.target as Node)
      )
    )
      return cb(event);
  });
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
}
