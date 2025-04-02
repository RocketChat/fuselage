import type { cssFn } from '@rocket.chat/css-in-js';
import type {
  AllHTMLAttributes,
  ElementType,
  RefAttributes,
  SVGAttributes,
  Ref,
} from 'react';
import { createElement, forwardRef, memo } from 'react';

import { useArrayLikeClassNameProp } from '../../hooks/useArrayLikeClassNameProp';
import { useBoxOnlyProps } from '../../hooks/useBoxOnlyProps';
import type { Falsy } from '../../types/Falsy';

import { useBoxTransform, BoxTransforms } from './BoxTransforms';
import type { StylingProps } from './stylingProps';
import { useStylingProps } from './useStylingProps';

export interface BoxProps
  extends Partial<StylingProps>,
    Omit<
      AllHTMLAttributes<HTMLElement>,
      'ref' | 'is' | 'className' | 'size' | 'elevation' | keyof StylingProps
    >,
    Omit<
      SVGAttributes<SVGElement>,
      keyof AllHTMLAttributes<HTMLElement> | 'elevation' | keyof StylingProps
    > {
  /**
   * The `is` prop is used to render the Box as a different HTML tag. It can also be used to render a different fuselage component.
   */
  is?: ElementType;
  className?: string | cssFn | (string | cssFn | Falsy)[];
  animated?: boolean;
  withRichContent?: boolean | 'inlineWithoutBreaks';
  htmlSize?: AllHTMLAttributes<HTMLElement>['size'];
  focusable?: boolean;
}

export const Box = forwardRef(function Box(
  { is = 'div', children, ...props }: BoxProps,
  ref: Ref<any>,
) {
  const propsWithRef: BoxProps & RefAttributes<any> = props;

  if (ref) {
    propsWithRef.ref = ref;
  }

  let propsWithStringClassName = useArrayLikeClassNameProp(propsWithRef);

  const transformFn = useBoxTransform();
  if (transformFn) {
    propsWithStringClassName = transformFn(propsWithStringClassName);
  }

  const propsWithoutStylingProps = useStylingProps(propsWithStringClassName);
  const propsWithoutBoxOnlyProps = useBoxOnlyProps(propsWithoutStylingProps);

  const element = createElement(is, propsWithoutBoxOnlyProps, children);

  if (transformFn) {
    return <BoxTransforms.Provider children={element} value={null} />;
  }

  return element;
});

export default memo(Box);
