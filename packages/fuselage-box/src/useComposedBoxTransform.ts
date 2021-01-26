import { useContext, useMemo } from 'react';

import { BoxTransforms, BoxTransform } from './BoxTransforms';

export const useComposedBoxTransform = (fn: BoxTransform): BoxTransform => {
  const parentFn = useContext(BoxTransforms);

  return useMemo(() => {
    if (!parentFn) {
      return fn;
    }

    if (!fn) {
      return parentFn;
    }

    return (...args) => fn(parentFn(...args));
  }, [fn, parentFn]);
};
