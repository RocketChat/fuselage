import type { cssFn } from '@rocket.chat/css-in-js';
import { createElement, forwardRef, memo } from 'react';
import type {
  AllHTMLAttributes,
  ElementType,
  ForwardedRef,
  RefAttributes,
  SVGAttributes,
} from 'react';

import { useArrayLikeClassNameProp } from '../../hooks/useArrayLikeClassNameProp';
import { useBoxOnlyProps } from '../../hooks/useBoxOnlyProps';
import type { Falsy } from '../../types/Falsy';
import { useBoxTransform, BoxTransforms } from './BoxTransforms';
import type { StylingProps } from './stylingProps';
import { useStylingProps } from './useStylingProps';

/** @public */
export interface BoxProps
  extends Partial<StylingProps>,
    Omit<
      AllHTMLAttributes<HTMLElement>,
      'ref' | 'is' | 'className' | keyof StylingProps
    >,
    Omit<
      SVGAttributes<SVGElement>,
      keyof AllHTMLAttributes<HTMLElement> | keyof StylingProps
    > {
  is?: ElementType;
  className?: string | cssFn | (string | cssFn | Falsy)[];
  animated?: boolean;
  withRichContent?: boolean | 'inlineWithoutBreaks';
  htmlSize?: AllHTMLAttributes<HTMLElement>['size'];
  color?: string; // FIXME: it was `(Color | Var) & string` by mistake
}

/** @public */
const Box = forwardRef(function Box(
  { is = 'div', children, ...props }: BoxProps,
  ref: ForwardedRef<any>
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
