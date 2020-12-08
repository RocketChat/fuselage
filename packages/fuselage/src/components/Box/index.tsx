import React, { createElement, forwardRef, memo } from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import { useBoxTransform, BoxTransforms } from './BoxTransforms';
import { BoxProps, consumeBoxProps } from './props';
import { useArrayLikeClassNameProp } from './useArrayLikeClassNameProp';

export const Box = memo(
  forwardRef(function Box({ is = 'div', children, ...props }: BoxProps, ref) {
    useStyleSheet();

    let consumedProps = props as Record<string, unknown>;

    const transformFn = useBoxTransform();
    if (transformFn) {
      consumedProps = transformFn(consumedProps);
    }

    consumedProps = consumeBoxProps(consumedProps);
    consumedProps = useArrayLikeClassNameProp(consumedProps);

    if (ref) {
      consumedProps.ref = ref;
    }

    const element = createElement(is, consumedProps, children);

    if (transformFn) {
      return <BoxTransforms.Provider children={element} value={undefined} />;
    }

    return element;
  })
);

Box.displayName = 'Box';

export { default as AnimatedVisibility } from './AnimatedVisibility';
export { default as Flex } from './Flex';
export { default as Position, PositionAnimated } from './Position';
export { default as Scrollable } from './Scrollable';

export default memo(Box);
