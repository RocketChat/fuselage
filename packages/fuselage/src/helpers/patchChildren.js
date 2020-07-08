import { cloneElement, isValidElement } from 'react';

import { flattenChildren } from './flattenChildren';
import { shallowEqual } from './shallowEqual';

export const patchChildren = (children, patch) => {
  let dirty = false;

  const newChildren = flattenChildren(children).map((child) => {
    if (!isValidElement(child)) {
      return child;
    }

    const mergedProps = patch(child.props);

    if (shallowEqual(child.props, mergedProps)) {
      return child;
    }

    dirty = true;
    return cloneElement(child, mergedProps);
  });

  if (dirty) {
    return newChildren;
  }

  return children;
};
