import React, { forwardRef, memo, createElement } from 'react';
import PropTypes from 'prop-types';
import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../../helpers/appendClassName';
import { prependClassName } from '../../helpers/prependClassName';
import { useStyle } from '../../hooks/useStyle';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import { /* propTypes as stylingPropsPropTypes,  */useStylingProps } from './stylingProps';
import { useBoxTransform, BoxTransforms } from './transforms';

export const useArrayLikeClassNameProp = (props) => {
  const classNames = [].concat(props.className);

  const cssFns = classNames.filter((value) => typeof value === 'function');
  const stylesClassName = useStyle(css`${ cssFns }`, props);

  if (stylesClassName) {
    props.className = appendClassName(props.className, stylesClassName);
  }

  const strings = classNames.filter((value) => typeof value === 'string');
  if (strings.length) {
    props.className = strings.reduce(
      (className, string) => appendClassName(className, string),
      props.className,
    );
  }

  return props;
};

export const useBoxOnlyProps = (props) => {
  Object.entries(props).forEach(([key, value]) => {
    if (key.slice(0, 4) === 'rcx-') {
      if (!value) {
        delete props[key];
        return;
      }

      const newClassName = value === true ? key : `${ key }-${ value }`;
      props.className = prependClassName(props.className, newClassName);
      delete props[key];
    }
  });

  props.className = prependClassName(props.className, 'rcx-box');

  return props;
};

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

    // ...stylingPropsPropTypes,
  };
}

Box.defaultProps = {
  is: 'div',
};

export const withBoxFeatures = (component) => {
  const EnhancedComponent = memo(forwardRef(({ children, ...props }, ref) => {
    useStyleSheet();

    if (ref) {
      props.ref = ref;
    }

    const transformFn = useBoxTransform();
    if (transformFn) {
      props = transformFn(props);
    }

    props = useStylingProps(props);

    const element = createElement(component, props, children);

    if (transformFn) {
      return <BoxTransforms.Provider children={element} />;
    }

    return element;
  }));

  if (process.env.NODE_ENV !== 'production') {
    EnhancedComponent.displayName = `WithBoxFeatures(${ component.displayName || component.name || 'Component' })`;
  }

  return EnhancedComponent;
};

export { default as AnimatedVisibility } from './AnimatedVisibility';
export { default as Flex } from './Flex';
export { default as Margins } from './Margins';
export { default as Position, PositionAnimated } from './Position';
export { default as Scrollable } from './Scrollable';
