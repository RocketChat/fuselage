import React, {
  HTMLAttributes,
  createElement,
  forwardRef,
  memo,
  Ref,
  DetailedHTMLProps,
  SVGProps,
  ComponentType,
} from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import { useBoxTransform, BoxTransforms } from './BoxTransforms';
import { BoxProps, useBoxProps } from './props';

export const Box = memo(
  forwardRef(function Box<
    E = HTMLOrSVGElement,
    P = DetailedHTMLProps<HTMLAttributes<E>, E> | SVGProps<E>
  >({ is, children, ...props }: BoxProps<P>, ref: Ref<E>) {
    useStyleSheet();

    const transformFn = useBoxTransform();
    const mappedProps = useBoxProps<P>(
      transformFn ? transformFn(props) : props
    );

    const element = createElement(
      is,
      Object.assign(mappedProps, { ref }),
      children
    );

    return transformFn ? (
      <BoxTransforms.Provider children={element} value={undefined} />
    ) : (
      element
    );
  })
);

Box.displayName = 'Box';

(Box as ComponentType).defaultProps = {
  is: 'div',
};

export { default as AnimatedVisibility } from './AnimatedVisibility';
export { default as Flex } from './Flex';
export { default as Position, PositionAnimated } from './Position';
export { default as Scrollable } from './Scrollable';
