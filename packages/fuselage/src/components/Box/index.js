import {
  useStyleSheet,
  useArrayLikeClassNameProp,
} from '@rocket.chat/fuselage-box';
import PropTypes from 'prop-types';
import React, { createElement, forwardRef, memo } from 'react';

import { prependClassName } from '../../helpers/prependClassName';
import globalStyleSheet from '../../index.scss';
import {
  /* propTypes as stylingPropsPropTypes,  */ useStylingProps,
} from './stylingProps';
import { useBoxTransform, BoxTransforms } from './transforms';

export const useBoxOnlyProps = (props) => {
  Object.entries(props).forEach(([key, value]) => {
    if (key.slice(0, 4) === 'rcx-') {
      if (!value) {
        delete props[key];
        return;
      }

      const newClassName = value === true ? key : `${key}-${value}`;
      props.className = prependClassName(props.className, newClassName);
      delete props[key];
    }
  });

  if (props.animated) {
    props.className = prependClassName(props.className, 'rcx-box--animated');
    delete props.animated;
  }

  if (props.withRichContent) {
    props.className = prependClassName(
      props.className,
      'rcx-box--with-inline-elements'
    );
    props.className = prependClassName(
      props.className,
      'rcx-box--with-block-elements'
    );
    delete props.withRichContent;
  }

  props.className = prependClassName(props.className, 'rcx-box rcx-box--full');

  return props;
};

export const Box = memo(
  forwardRef(function Box({ is = 'div', children, ...props }, ref) {
    useStyleSheet(globalStyleSheet);

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
  })
);

if (process.env.NODE_ENV !== 'production') {
  Box.displayName = 'Box';

  Box.propTypes = {
    is: PropTypes.elementType,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.array,
    ]),

    // ...stylingPropsPropTypes,
  };
}

Box.defaultProps = {
  is: 'div',
};

export { default as AnimatedVisibility } from './AnimatedVisibility';
export { default as Flex } from './Flex';
export { default as Position, PositionAnimated } from './Position';
export { default as Scrollable } from './Scrollable';
