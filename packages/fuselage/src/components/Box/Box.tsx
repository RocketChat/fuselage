import React, {
  createElement,
  forwardRef,
  ForwardRefExoticComponent,
  memo,
} from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import { BoxProps } from './BoxTypes';
import { useBoxTransform, BoxTransforms } from './hooks/BoxTransforms';
import {
  useArrayLikeClassNameProp,
  useBoxOnlyProps,
} from './hooks/useBoxHooks';
import { useStylingProps } from './stylingProps';

export const Box: ForwardRefExoticComponent<BoxProps<HTMLElement>> = memo(
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
