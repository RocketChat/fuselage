import type { ReactNode } from 'react';
import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ensureAnchorElement = (id: string): HTMLElement => {
  const existingAnchor = document.getElementById(id);
  if (existingAnchor) return existingAnchor;

  const newAnchor = document.createElement('div');
  newAnchor.id = id;
  document.body.appendChild(newAnchor);
  return newAnchor;
};

const getAnchorRefCount = (anchorElement: HTMLElement): number => {
  const { refCount } = anchorElement.dataset;
  if (refCount) return parseInt(refCount, 10);
  return 0;
};

const setAnchorRefCount = (
  anchorElement: HTMLElement,
  refCount: number,
): void => {
  anchorElement.dataset['refCount'] = String(refCount);
};

const refAnchorElement = (anchorElement: HTMLElement): void => {
  setAnchorRefCount(anchorElement, getAnchorRefCount(anchorElement) + 1);

  if (anchorElement.parentElement !== document.body) {
    document.body.appendChild(anchorElement);
  }
};

const unrefAnchorElement = (anchorElement: HTMLElement): void => {
  const refCount = getAnchorRefCount(anchorElement) - 1;
  setAnchorRefCount(anchorElement, refCount);

  if (refCount <= 0) {
    document.body.removeChild(anchorElement);
  }
};

type ToastBarPortalProps = {
  children?: ReactNode;
};

const ToastBarPortal = ({ children }: ToastBarPortalProps) => {
  const [toastBarRoot, setToastBarRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const anchor = ensureAnchorElement('toastBarRoot');
    refAnchorElement(anchor);
    setToastBarRoot(anchor);

    return () => {
      unrefAnchorElement(anchor);
    };
  }, []);

  return toastBarRoot ? createPortal(children, toastBarRoot) : null;
};

export default memo(ToastBarPortal);
