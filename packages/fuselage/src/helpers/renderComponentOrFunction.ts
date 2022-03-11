import type { ElementType, ReactNode } from 'react';
import { createElement } from 'react';

import { isForwardRefType } from './isForwardRefType';

export const renderComponentOrFunction = <TParams>(
  componentOrFunction: ElementType<TParams> | ((params: TParams) => ReactNode),
  params: TParams
) => {
  if (isForwardRefType(componentOrFunction)) {
    return createElement(componentOrFunction, params);
  }

  if (typeof componentOrFunction === 'function') {
    return (componentOrFunction as (params: TParams) => ReactNode)(params);
  }

  return null;
};
