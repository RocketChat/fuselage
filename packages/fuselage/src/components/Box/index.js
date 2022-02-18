import React, { createElement, forwardRef, memo } from 'react';

import { useArrayLikeClassNameProp } from '../../hooks/useArrayLikeClassNameProp';
import { useBoxOnlyProps } from '../../hooks/useBoxOnlyProps';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import { useBoxTransform, BoxTransforms } from './BoxTransforms';
import { useStylingProps } from './stylingProps';

export const Box = memo(
  forwardRef(function Box({ is = 'div', children, ...props }, ref) {
    useStyleSheet();

    if (ref) {
      props.ref = ref;
    }

    props = useArrayLikeClassNameProp(props);

    const transformFn = useBoxTransform();
    if (transformFn) {
      props = transformFn(props);
    }

    props = useBoxOnlyProps(props);
    props = useStylingProps(props);

    const element = createElement(is, props, children);

    if (transformFn) {
      return <BoxTransforms.Provider children={element} value={null} />;
    }

    return element;
  })
);

Box.displayName = 'Box';
