import { createContext, useContext, useMemo } from 'react';

export const BoxTransforms = createContext();

export const useBoxTransform = () => useContext(BoxTransforms);

export const useComposedBoxTransform = (fn) => {
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
