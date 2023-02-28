import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { useRef, useEffect } from 'react';
import type { DependencyList } from 'react';

export function useDidUpdate(
  func: () => void,
  deps: DependencyList | undefined
) {
  const didMount = useRef(false);
  const fn = useMutableCallback(func);

  useEffect(() => {
    if (didMount.current) {
      fn();
    }
    didMount.current = true;
  }, deps ?? []);
}
