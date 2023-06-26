import { useCallback, useRef, useState } from 'react';

import { useBoundingClientRectChanges } from './useBoundingClientRectChanges';

export const getOffsetRect = (el: Element) => {
  const rect = el.getBoundingClientRect();

  // add window scroll position to get the offset position
  const left = rect.left + window.scrollX;
  const top = rect.top + window.scrollY;
  // const right = rect.right + window.scrollX;
  // const bottom = rect.bottom + window.scrollY;

  // polyfill missing 'x' and 'y' rect properties not returned
  // from getBoundingClientRect() by older browsers
  const x = rect.x === undefined ? left : rect.x + window.scrollX;
  const y = rect.y === undefined ? top : rect.y + window.scrollY;

  // width and height are the same
  const { width, height } = rect;

  return new DOMRect(x, y, width, el.scrollHeight ?? height);
};

export const useBoundingClientRect = () => {
  const ref = useRef<HTMLElement>(null);
  const [boundingClientRect, setBoundingClientRect] = useState<DOMRect>(() => {
    if (typeof window === 'undefined' || !ref.current) {
      return new DOMRect();
    }

    return ref.current?.getBoundingClientRect();
  });

  const handleBoundingClientRectChange = useCallback(() => {
    const element = ref.current;
    setBoundingClientRect(element ? getOffsetRect(element) : new DOMRect());
  }, []);

  useBoundingClientRectChanges(ref, handleBoundingClientRectChange);

  return [ref, boundingClientRect] as const;
};
