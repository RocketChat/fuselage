import React, { createElement, forwardRef, memo } from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import { useBoxTransform, BoxTransforms } from './BoxTransforms';
import {
  consumeBoxProps,
  consumeCssPropertiesProps,
  consumePostAliases,
  consumePreAliases,
  consumeRcxProps,
  consumeSpecialStylingProps,
} from './props';
import { useArrayLikeClassNameProp } from './useArrayLikeClassNameProp';

export const Box = memo(
  forwardRef(function Box({ is = 'div', children, ...props }, ref) {
    useStyleSheet();

    const transformFn = useBoxTransform();
    if (transformFn) {
      props = transformFn(props);
    }

    props = consumeRcxProps(props);
    props = consumePreAliases(props);
    props = consumeSpecialStylingProps(props);
    props = consumeCssPropertiesProps(props);
    props = consumePostAliases(props);
    props = consumeBoxProps(props);
    props = useArrayLikeClassNameProp(props);

    if (ref) {
      props.ref = ref;
    }

    const element = createElement(is, props, children);

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
