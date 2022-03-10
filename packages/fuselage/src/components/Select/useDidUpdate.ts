import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import type { DependencyList } from 'react';
import { useRef, useEffect } from 'react';

export const useDidUpdate = (
  func: () => void,
  deps: DependencyList | undefined
) => {
  const didMount = useRef(false);
  const fn = useMutableCallback(func);

  useEffect(() => {
    if (didMount.current) {
      fn();
    }
    didMount.current = true;
  }, deps || []);
};
