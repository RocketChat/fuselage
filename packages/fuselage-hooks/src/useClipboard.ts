import { useEffect, useState } from 'react';

import { useMutableCallback } from './useMutableCallback';

/**
 * Hook to copy the passed content to the clipboard.
 *
 * @returns an object with the copy function and the hasCopied state
 * @public
 */

export const useClipboard = (
  text: string,
  time = 2000,
  onCopySuccess = (e?) => e,
  onCopyError = (e?) => e
): unknown => {
  const [hasCopied, setHasCopied] = useState(false);

  const copy = useMutableCallback(async (e) => {
    e?.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
      onCopySuccess(e);
      setHasCopied(true);
    } catch (e) {
      onCopyError(e);
    }
  });

  useEffect(() => {
    if (!hasCopied) {
      return;
    }

    const timeout = setTimeout(() => {
      setHasCopied(false);
    }, time);

    return () => clearTimeout(timeout);
  }, [hasCopied]);

  return { copy, hasCopied };
};
