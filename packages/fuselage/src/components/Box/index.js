import PropTypes from 'prop-types';
import React, { createElement, forwardRef, memo } from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import { useStylingProps } from './stylingProps';
import { useBoxTransform, BoxTransforms } from './transforms';
import { useArrayLikeClassNameProp } from './useArrayLikeClassNameProp';
import { useBoxOnlyProps } from './useBoxOnlyProps';

export const Box = memo(forwardRef(function Box({
  is = 'div',
  children,
  ...props
}, ref) {
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
    return <BoxTransforms.Provider children={element} />;
  }

  return element;
}));

if (process.env.NODE_ENV !== 'production') {
  Box.displayName = 'Box';

  Box.propTypes = {
    is: PropTypes.elementType,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.array,
    ]),
  };
}

Box.defaultProps = {
  is: 'div',
};

export { default as AnimatedVisibility } from './AnimatedVisibility';
export { default as Flex } from './Flex';
export { default as Position, PositionAnimated } from './Position';
export { default as Scrollable } from './Scrollable';
