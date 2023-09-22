import { useEffect, useState } from 'react';

/**
 * Hook to replace the document title.
 *
 * @param title - the desired document title
 * @param keepDefaultTitle - if true, the default title will be added following the title
 * @param customDefaultTitle - option to set a custom default title
 * @returns the document title value and a function to set the document title
 * @public
 */

export const useDocumentTitle = (
  title: string,
  {
    keepDefaultTitle = true,
    customDefaultTitle,
  }: {
    keepDefaultTitle?: boolean;
    customDefaultTitle?: string;
  } = {}
) => {
  const [defaultTitle] = useState(
    (keepDefaultTitle && customDefaultTitle) || document.title
  );
  const [documentTitle, setDocumentTitle] = useState(
    keepDefaultTitle ? `${title} - ${defaultTitle}` : title
  );

  useEffect(() => {
    document.title = documentTitle;

    return () => {
      document.title = defaultTitle;
    };
  }, [documentTitle, defaultTitle]);

  return [documentTitle, setDocumentTitle];
};
