import flattenChildren from 'react-keyed-flatten-children';
import { cloneElement } from 'react';

import { mergeProps } from './mergeProps';
import { shallowEqual } from './shallowEqual';

export const patchChildren = (children, props, transforms) => {
  let dirty = false;

  const newChildren = flattenChildren(children).map((child) => {
    const mergedProps = mergeProps(child.props, props, transforms);

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
