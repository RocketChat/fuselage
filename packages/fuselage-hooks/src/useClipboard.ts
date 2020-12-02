import { useEffect, useState } from 'react';

import { useMutableCallback } from './useMutableCallback';

/**
 * Hook to copy the passed content to the clipboard.
 *
 * @returns an object with the copy function and the hasCopied state
 * @public
 */

type UseClipboardParams = {
  clearTime?: number;
  onCopySuccess?: (e?: Event) => void;
  onCopyError?: (e?: Event) => void;
};

export type UseClipboardReturn = {
  copy: (e?: Event) => Promise<void>;
  hasCopied: boolean;
};

export const useClipboard = (
  text: string,
  {
    clearTime = 2000,
    onCopySuccess = (): void => undefined,
    onCopyError = (): void => undefined,
  }: UseClipboardParams = {}
): UseClipboardReturn => {
  const [hasCopied, setHasCopied] = useState(false);

  const copy = useMutableCallback(async (e?: Event) => {
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
    }, clearTime);

    return () => clearTimeout(timeout);
  }, [hasCopied, clearTime]);

  return { copy, hasCopied };
};
