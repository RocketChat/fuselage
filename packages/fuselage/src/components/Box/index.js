import { css } from '@rocket.chat/css-in-js';
import React, { createElement, forwardRef, memo } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { prependClassName } from '../../helpers/prependClassName';
import { useStyle } from '../../hooks/useStyle';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import { useBoxTransform, BoxTransforms } from './BoxTransforms';
import { useStylingProps } from './stylingProps';

export const useArrayLikeClassNameProp = (props) => {
  const classNames = [].concat(props.className);

  const cssFns = classNames.filter((value) => typeof value === 'function');
  const stylesClassName = useStyle(
    css`
      ${cssFns}
    `,
    props
  );

  const strings = classNames.filter((value) => typeof value === 'string');

  props.className = strings.reduce(
    (className, string) => appendClassName(className, string),
    stylesClassName || ''
  );

  return props;
};

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
    if (props.withRichContent === 'inlineWithoutBreaks') {
      props.className = prependClassName(
        props.className,
        'rcx-box--with-inline-elements'
      );
    } else {
      props.className = prependClassName(
        props.className,
        'rcx-box--with-inline-elements'
      );

      props.className = prependClassName(
        props.className,
        'rcx-box--with-block-elements'
      );
    }
  }

  delete props.withRichContent;

  props.className = prependClassName(props.className, 'rcx-box rcx-box--full');

  return props;
};

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

export { default as AnimatedVisibility } from './AnimatedVisibility';
export { default as Position, PositionAnimated } from './Position';
