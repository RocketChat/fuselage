import type { cssFn } from '@rocket.chat/css-in-js';
import React, { createElement, forwardRef, memo } from 'react';
import type {
  AllHTMLAttributes,
  ElementType,
  RefAttributes,
  SVGAttributes,
  Ref,
} from 'react';

import { useArrayLikeClassNameProp } from '../../hooks/useArrayLikeClassNameProp';
import { useBoxOnlyProps } from '../../hooks/useBoxOnlyProps';
import { useStyleSheet } from '../../hooks/useStyleSheet';
import type { Falsy } from '../../types/Falsy';
import { useBoxTransform, BoxTransforms } from './BoxTransforms';
import type { StylingProps } from './stylingProps';
import { useStylingProps } from './useStylingProps';

type BoxProps = {
  is?: ElementType;
  className?: string | cssFn | (string | cssFn | Falsy)[];
  animated?: boolean;
  withRichContent?: boolean | 'inlineWithoutBreaks';
  htmlSize?: AllHTMLAttributes<HTMLElement>['size'];
} & Partial<StylingProps> &
  Omit<
    AllHTMLAttributes<HTMLElement>,
    'ref' | 'is' | 'className' | 'size' | 'elevation'
  > &
  Omit<
    SVGAttributes<SVGElement>,
    keyof AllHTMLAttributes<HTMLElement> | 'elevation'
  >;

export const Box = forwardRef(function Box(
  { is = 'div', children, ...props }: BoxProps,
  ref: Ref<any>
) {
  useStyleSheet();

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
