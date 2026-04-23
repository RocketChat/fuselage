import { useMemo } from 'react';

import { useTargetDocument } from '../../../contexts';

export const useCreateStyleContainer = (id: string) => {
  const { document: targetDocument } = useTargetDocument();
  return useMemo(() => {
    const refElement =
      targetDocument.getElementById('rcx-styles') ||
      targetDocument.head.lastChild;

    const el = targetDocument.getElementById(id);

    if (el) {
      return el;
    }

    const styleElement = targetDocument.createElement('style');
    styleElement.setAttribute('id', id);

    targetDocument.head.insertBefore(styleElement, refElement);
    targetDocument.head.appendChild(targetDocument.createElement('style'));
    return styleElement;
  }, [id, targetDocument]);
};
