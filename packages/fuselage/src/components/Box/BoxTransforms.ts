import { createContext, useContext, useMemo } from 'react';

import { BoxProps } from './props';

type BoxTranform = (props: BoxProps) => BoxProps;

export const BoxTransforms = createContext<BoxTranform | undefined>(undefined);

export const useBoxTransform = (): BoxTranform | undefined =>
  useContext(BoxTransforms);

export const useComposedBoxTransform = (fn: BoxTranform): BoxTranform => {
  const parentFn = useContext(BoxTransforms);

  return useMemo(() => {
    if (!parentFn) {
      return fn;
    }

    if (!fn) {
      return parentFn;
    }

    return (props: BoxProps) => fn(parentFn(props));
  }, [fn, parentFn]);
};
