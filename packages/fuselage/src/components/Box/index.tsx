import type { cssFn } from '@rocket.chat/css-in-js';
import React, { createElement, forwardRef, memo } from 'react';
import type {
  AllHTMLAttributes,
  CSSProperties,
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
import { useStylingProps } from './stylingProps';

type Size = '1' | '2' | '4' | '8' | '12' | '16' | '20' | '24' | '32' | '40';

type FontScale =
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'p1'
  | 'p1m'
  | 'p1b'
  | 'p2'
  | 'p2m'
  | 'p2b'
  | 'c1'
  | 'c2'
  | 'micro';

type BoxStylingProps = {
  border?: CSSProperties['border'];
  borderBlock?: CSSProperties['borderBlock'];
  borderBlockStart?: CSSProperties['borderBlockStart'];
  borderBlockEnd?: CSSProperties['borderBlockEnd'];
  borderInline?: CSSProperties['borderInline'];
  borderInlineStart?: CSSProperties['borderInlineStart'];
  borderInlineEnd?: CSSProperties['borderInlineEnd'];
  borderWidth?: CSSProperties['borderWidth'];
  borderBlockWidth?: CSSProperties['borderBlockWidth'];
  borderBlockStartWidth?: CSSProperties['borderBlockStartWidth'];
  borderBlockEndWidth?: CSSProperties['borderBlockEndWidth'];
  borderInlineWidth?: CSSProperties['borderInlineWidth'];
  borderInlineStartWidth?: CSSProperties['borderInlineStartWidth'];
  borderInlineEndWidth?: CSSProperties['borderInlineEndWidth'];
  borderStyle?: CSSProperties['borderStyle'];
  borderBlockStyle?: CSSProperties['borderBlockStyle'];
  borderBlockStartStyle?: CSSProperties['borderBlockStartStyle'];
  borderBlockEndStyle?: CSSProperties['borderBlockEndStyle'];
  borderInlineStyle?: CSSProperties['borderInlineStyle'];
  borderInlineStartStyle?: CSSProperties['borderInlineStartStyle'];
  borderInlineEndStyle?: CSSProperties['borderInlineEndStyle'];
  borderColor?: CSSProperties['borderColor'];
  borderBlockColor?: CSSProperties['borderBlockColor'];
  borderBlockStartColor?: CSSProperties['borderBlockStartColor'];
  borderBlockEndColor?: CSSProperties['borderBlockEndColor'];
  borderInlineColor?: CSSProperties['borderInlineColor'];
  borderInlineStartColor?: CSSProperties['borderInlineStartColor'];
  borderInlineEndColor?: CSSProperties['borderInlineEndColor'];
  borderRadius?: CSSProperties['borderRadius'];
  borderStartStartRadius?: CSSProperties['borderStartStartRadius'];
  borderStartEndRadius?: CSSProperties['borderStartEndRadius'];
  borderEndStartRadius?: CSSProperties['borderEndStartRadius'];
  borderEndEndRadius?: CSSProperties['borderEndEndRadius'];

  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  bg?: CSSProperties['backgroundColor'];
  opacity?: CSSProperties['opacity'];

  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  justifyItems?: CSSProperties['justifyItems'];
  justifyContent?: CSSProperties['justifyContent'];
  flexWrap?: CSSProperties['flexWrap'];
  flexDirection?: CSSProperties['flexDirection'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
  justifySelf?: CSSProperties['justifySelf'];
  alignSelf?: CSSProperties['alignSelf'];
  order?: CSSProperties['order'];

  w?: CSSProperties['width'];
  width?: CSSProperties['width'];
  minWidth?: CSSProperties['minWidth'];
  maxWidth?: CSSProperties['maxWidth'];
  h?: CSSProperties['height'];
  height?: CSSProperties['height'];
  minHeight?: CSSProperties['minHeight'];
  maxHeight?: CSSProperties['maxHeight'];
  display?: CSSProperties['display'];
  verticalAlign?: CSSProperties['verticalAlign'];
  overflow?: CSSProperties['overflow'];
  overflowX?: CSSProperties['overflowX'];
  overflowY?: CSSProperties['overflowY'];

  position?: CSSProperties['position'];
  zIndex?: CSSProperties['zIndex'];
  inset?: CSSProperties['inset'];
  insetBlock?: CSSProperties['insetBlock'];
  insetBlockStart?: CSSProperties['insetBlockStart'];
  insetBlockEnd?: CSSProperties['insetBlockEnd'];
  insetInline?: CSSProperties['insetInline'];
  insetInlineStart?: CSSProperties['insetInlineStart'];
  insetInlineEnd?: CSSProperties['insetInlineEnd'];

  m?: CSSProperties['margin'];
  margin?: CSSProperties['margin'];
  mb?: CSSProperties['marginBlock'];
  marginBlock?: CSSProperties['marginBlock'];
  mbs?: CSSProperties['marginBlockStart'];
  marginBlockStart?: CSSProperties['marginBlockStart'];
  mbe?: CSSProperties['marginBlockEnd'];
  marginBlockEnd?: CSSProperties['marginBlockEnd'];
  mi?: CSSProperties['marginInline'];
  marginInline?: CSSProperties['marginInline'];
  mis?: CSSProperties['marginInlineStart'];
  marginInlineStart?: CSSProperties['marginInlineStart'];
  mie?: CSSProperties['marginInlineEnd'];
  marginInlineEnd?: CSSProperties['marginInlineEnd'];
  p?: CSSProperties['padding'];
  padding?: CSSProperties['padding'];
  pb?: CSSProperties['paddingBlock'];
  paddingBlock?: CSSProperties['paddingBlock'];
  pbs?: CSSProperties['paddingBlockStart'];
  paddingBlockStart?: CSSProperties['paddingBlockStart'];
  pbe?: CSSProperties['paddingBlockEnd'];
  paddingBlockEnd?: CSSProperties['paddingBlockEnd'];
  pi?: CSSProperties['paddingInline'];
  paddingInline?: CSSProperties['paddingInline'];
  pis?: CSSProperties['paddingInlineStart'];
  paddingInlineStart?: CSSProperties['paddingInlineStart'];
  pie?: CSSProperties['paddingInlineEnd'];
  paddingInlineEnd?: CSSProperties['paddingInlineEnd'];

  fontFamily?: CSSProperties['fontFamily'] | FontScale;
  fontSize?: CSSProperties['fontSize'] | FontScale;
  fontStyle?: CSSProperties['fontStyle'];
  fontWeight?: CSSProperties['fontWeight'] | FontScale;
  letterSpacing?: CSSProperties['letterSpacing'] | FontScale;
  lineHeight?: CSSProperties['lineHeight'] | FontScale;
  textAlign?: CSSProperties['textAlign'];
  textTransform?: CSSProperties['textTransform'];
  textDecorationLine?: CSSProperties['textDecorationLine'];

  animated?: boolean;
  elevation?: '0' | '1' | '2';
  invisible?: boolean;
  withRichContent?: boolean | 'inlineWithoutBreaks';
  withTruncatedText?: boolean;
  size?: `x${Size}` | `neg-x${Size}` | CSSProperties['blockSize'];
  minSize?: CSSProperties['blockSize'];
  maxSize?: CSSProperties['blockSize'];
  fontScale?: FontScale;

  className?: string | cssFn | (string | cssFn | Falsy)[];
};

type BoxProps = {
  is?: ElementType;
  htmlSize?: AllHTMLAttributes<HTMLElement>['size'];
} & BoxStylingProps &
  Omit<AllHTMLAttributes<HTMLElement>, 'ref' | 'is' | 'className' | 'size'> &
  Omit<SVGAttributes<SVGElement>, keyof AllHTMLAttributes<HTMLElement>>;

export const Box = memo(
  forwardRef(function Box(
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

    const propsWithoutBoxOnlyProps = useBoxOnlyProps(propsWithStringClassName);
    const propsWithoutStylingProps = useStylingProps(propsWithoutBoxOnlyProps);

    const element = createElement(is, propsWithoutStylingProps, children);

    if (transformFn) {
      return <BoxTransforms.Provider children={element} value={null} />;
    }

    return element;
  })
);

// Box.displayName = 'Box';
