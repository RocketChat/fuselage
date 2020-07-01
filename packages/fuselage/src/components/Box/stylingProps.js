import { css } from '@rocket.chat/css-in-js';
import React, { createContext, useContext, useMemo } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { getBorderWidthValue, getBorderRadiusValue } from '../../styles/props/borders';
import { getColorValue } from '../../styles/props/colors';
import { getSizeValue } from '../../styles/props/layout';
import { getInsetValue } from '../../styles/props/position';
import { getMarginValue, getPaddingValue } from '../../styles/props/spaces';
import { getFontFamilyValue, getFontScaleValue } from '../../styles/props/typography';
import { consumeProps } from './transferProps';
import { useClassNameMapping } from './classNames';

const stylingPropsStyles = {
  // borders
  border: (value) => css`border: ${ value } !important;`,
  borderBlock: (value) => css`border-block: ${ value } !important;`,
  borderBlockStart: (value) => css`border-block-start: ${ value } !important;`,
  borderBlockEnd: (value) => css`border-block-end: ${ value } !important;`,
  borderInline: (value) => css`border-inline: ${ value } !important;`,
  borderInlineStart: (value) => css`border-inline-start: ${ value } !important;`,
  borderInlineEnd: (value) => css`border-inline-end: ${ value } !important;`,
  borderWidth: (value) => css`border-width: ${ getBorderWidthValue(value) || value } !important;`,
  borderBlockWidth: (value) => css`border-block-width: ${ getBorderWidthValue(value) || value } !important;`,
  borderBlockStartWidth: (value) => css`border-block-start-width: ${ getBorderWidthValue(value) || value } !important;`,
  borderBlockEndWidth: (value) => css`border-block-end-width: ${ getBorderWidthValue(value) || value } !important;`,
  borderInlineWidth: (value) => css`border-inline-width: ${ getBorderWidthValue(value) || value } !important;`,
  borderInlineStartWidth: (value) => css`border-inline-start-width: ${ getBorderWidthValue(value) || value } !important;`,
  borderInlineEndWidth: (value) => css`border-inline-end-width: ${ getBorderWidthValue(value) || value } !important;`,
  borderStyle: (value) => css`border-style: ${ value } !important;`,
  borderBlockStyle: (value) => css`border-block-style: ${ value } !important;`,
  borderBlockStartStyle: (value) => css`border-block-start-style: ${ value } !important;`,
  borderBlockEndStyle: (value) => css`border-block-end-style: ${ value } !important;`,
  borderInlineStyle: (value) => css`border-inline-style: ${ value } !important;`,
  borderInlineStartStyle: (value) => css`border-inline-start-style: ${ value } !important;`,
  borderInlineEndStyle: (value) => css`border-inline-end-style: ${ value } !important;`,
  borderColor: (value) => css`border-color: ${ getColorValue(value) || value } !important;`,
  borderBlockColor: (value) => css`border-block-color: ${ getColorValue(value) || value } !important;`,
  borderBlockStartColor: (value) => css`border-block-start-color: ${ getColorValue(value) || value } !important;`,
  borderBlockEndColor: (value) => css`border-block-end-color: ${ getColorValue(value) || value } !important;`,
  borderInlineColor: (value) => css`border-inline-color: ${ getColorValue(value) || value } !important;`,
  borderInlineStartColor: (value) => css`border-inline-start-color: ${ getColorValue(value) || value } !important;`,
  borderInlineEndColor: (value) => css`border-inline-end-color: ${ getColorValue(value) || value } !important;`,
  borderRadius: (value) => css`border-radius: ${ getBorderRadiusValue(value) || value } !important;`,
  borderStartStartRadius: (value) => css`border-start-start-radius: ${ getBorderRadiusValue(value) || value } !important;`,
  borderStartEndRadius: (value) => css`border-start-end-radius: ${ getBorderRadiusValue(value) || value } !important;`,
  borderEndStartRadius: (value) => css`border-end-start-radius: ${ getBorderRadiusValue(value) || value } !important;`,
  borderEndEndRadius: (value) => css`border-end-end-radius: ${ getBorderRadiusValue(value) || value } !important;`,

  // colors
  color: (value) => css`color: ${ getColorValue(value) || value } !important;`,
  backgroundColor: (value) => css`background-color: ${ getColorValue(value) || value } !important;`,
  opacity: (value) => css`opacity: ${ value } !important;`,

  // flexbox
  alignItems: (value) => css`align-items: ${ value } !important;`,
  alignContent: (value) => css`align-content: ${ value } !important;`,
  justifyItems: (value) => css`justify-items: ${ value } !important;`,
  justifyContent: (value) => css`justify-content: ${ value } !important;`,
  flexWrap: (value) => css`flex-wrap: ${ value } !important;`,
  flexDirection: (value) => css`flex-direction: ${ value } !important;`,
  flexGrow: (value) => css`flex-grow: ${ value } !important;`,
  flexShrink: (value) => css`flex-shrink: ${ value } !important;`,
  flexBasis: (value) => css`flex-basis: ${ value } !important;`,
  justifySelf: (value) => css`justify-self: ${ value } !important;`,
  alignSelf: (value) => css`align-self: ${ value } !important;`,
  order: (value) => css`order: ${ value } !important;`,

  // layout
  width: (value) => css`width: ${ getSizeValue(value) || value } !important;`,
  minWidth: (value) => css`min-width: ${ getSizeValue(value) || value } !important;`,
  maxWidth: (value) => css`max-width: ${ getSizeValue(value) || value } !important;`,
  height: (value) => css`height: ${ getSizeValue(value) || value } !important;`,
  minHeight: (value) => css`min-height: ${ getSizeValue(value) || value } !important;`,
  maxHeight: (value) => css`max-height: ${ getSizeValue(value) || value } !important;`,
  display: (value) => css`display: ${ value } !important;`,
  verticalAlign: (value) => css`vertical-align: ${ value } !important;`,
  overflow: (value) => css`overflow: ${ value } !important;`,
  overflowX: (value) => css`overflow-x: ${ value } !important;`,
  overflowY: (value) => css`overflow-y: ${ value } !important;`,

  // position
  position: (value) => css`position: ${ value } !important;`,
  zIndex: (value) => css`z-index: ${ value } !important;`,
  inset: (value) => css`inset: ${ getInsetValue(value) || value } !important;`,
  insetBlock: (value) => css`inset-block: ${ getInsetValue(value) || value } !important;`,
  insetBlockStart: (value) => css`inset-block-start: ${ getInsetValue(value) || value } !important;`,
  insetBlockEnd: (value) => css`inset-block-end: ${ getInsetValue(value) || value } !important;`,
  insetInline: (insetInline) => css`inset-inline: ${ getInsetValue(insetInline) || insetInline } !important;`,
  insetInlineStart: (value) => css`inset-inline-start: ${ getInsetValue(value) || value } !important;`,
  insetInlineEnd: (value) => css`inset-inline-end: ${ getInsetValue(value) || value } !important;`,

  // spacing
  margin: (value) => css`margin: ${ getMarginValue(value) || value } !important;`,
  marginBlock: (value) => css`margin-block: ${ getMarginValue(value) || value } !important;`,
  marginBlockStart: (value) => css`margin-block-start: ${ getMarginValue(value) || value } !important;`,
  marginBlockEnd: (value) => css`margin-block-end: ${ getMarginValue(value) || value } !important;`,
  marginInline: (value) => css`margin-inline: ${ getMarginValue(value) || value } !important;`,
  marginInlineStart: (value) => css`margin-inline-start: ${ getMarginValue(value) || value } !important;`,
  marginInlineEnd: (value) => css`margin-inline-end: ${ getMarginValue(value) || value } !important;`,
  padding: (value) => css`padding: ${ getPaddingValue(value) || value } !important;`,
  paddingBlock: (value) => css`padding-block: ${ getPaddingValue(value) || value } !important;`,
  paddingBlockStart: (value) => css`padding-block-start: ${ getPaddingValue(value) || value } !important;`,
  paddingBlockEnd: (value) => css`padding-block-end: ${ getPaddingValue(value) || value } !important;`,
  paddingInline: (value) => css`padding-inline: ${ getPaddingValue(value) || value } !important;`,
  paddingInlineStart: (value) => css`padding-inline-start: ${ getPaddingValue(value) || value } !important;`,
  paddingInlineEnd: (value) => css`padding-inline-end: ${ getPaddingValue(value) || value } !important;`,

  // typography
  fontFamily: (value) => css`font-family: ${ getFontFamilyValue(value) || value } !important;`,
  fontSize: (value) => css`font-size: ${ getFontScaleValue(value)?.fontSize || getSizeValue(value) || value } !important;`,
  fontWeight: (value) => css`font-weight: ${ getFontScaleValue(value)?.fontWeight || value } !important;`,
  lineHeight: (value) => css`line-height: ${ getFontScaleValue(value)?.lineHeight || getSizeValue(value) || value } !important;`,
  letterSpacing: (value) => css`letter-spacing: ${ getFontScaleValue(value)?.letterSpacing || value } !important;`,
  fontStyle: (value) => css`font-style: ${ value } !important;`,
  textAlign: (value) => css`text-align: ${ value } !important;`,
  textTransform: (value) => css`text-transform: ${ value } !important;`,
  textDecorationLine: (value) => css`text-decoration-line: ${ value } !important;`,

  // special
  elevation: (value) => {
    if (value === '0') {
      return css`box-shadow: none;`;
    }

    if (value === '1') {
      return css`box-shadow: 0px 0px 12px 0px ${ getColorValue('neutral-800-10') };`;
    }

    if (value === '2') {
      return css`
        box-shadow:
          0px 0px 2px 0px ${ getColorValue('neutral-800-8') },
          0px 0px 12px 0px ${ getColorValue('neutral-800-12') };
      `;
    }
  },
  invisible: (value) => (
    value
      ? css`
        visibility: hidden;
        opacity: 0;
      `
      : undefined
  ),
  withRichContent: (value) => (
    value
      ? css`
        strong, em, b, i, a, q, cite, code, time, dfn, abbr, del, ins,
        sup, sub, kbd, var, small, h1, h2, h3, h4, h5, h6, p {
          color: inherit;
          font: inherit;
          letter-spacing: inherit;
        }

        strong, b {
          font-weight: bolder;
        }

        em, i {
          font-style: italic;
        }

        a {
          &:link {
            text-decoration: none;
            color: ${ getColorValue('link') };
          }

          &:visited,
          &.is-visited {
            color: ${ getColorValue('visited-link') };
          }

          &:active,
          &.is-active {
            color: ${ getColorValue('active-link') };
          }

          &:hover,
          &.is-hovered {
            text-decoration: underline;
          }
        }

        q {
          &::before {
            content: open-quote;
          }

          &::after {
            content: close-quote;
          }

          cite {
            font-style: italic;
          }
        }

        code {
          padding:
            ${ getPaddingValue('x4') }
            ${ getPaddingValue('x8') };
          border-radius: ${ getBorderRadiusValue('x2') };
          background-color: ${ getColorValue('neutral-300') };
          font-family: ${ getFontFamilyValue('mono') };
          -webkit-font-smoothing: auto;
        }

        time {
          color: ${ getColorValue('info') };
        }

        dfn {
          color: ${ getColorValue('info') };
          font-style: italic;
        }

        abbr {
          &[title] {
            text-decoration: underline dashed;
            border-block-end-width: ${ getBorderWidthValue('none') };
          }
        }

        del {
          text-decoration: line-through solid;
        }

        ins {
          text-decoration: underline solid;
        }

        sup,
        sub {
          position: relative;
          vertical-align: baseline;
          font-size: 75%;
          line-height: 0;
        }

        sup {
          inset-block-start: -0.5em;
        }

        sub {
          inset-block-start: -0.25em;
        }

        kbd {
          padding:
            ${ getPaddingValue('x4') }
            ${ getPaddingValue('x8') };
          border-width: ${ getBorderWidthValue('x1') };
          border-style: solid;
          border-color: currentColor;
          border-radius: ${ getBorderRadiusValue('x2') };
          font-family: ${ getFontFamilyValue('mono') };
          -webkit-font-smoothing: auto;
        }

        var {
          font-style: italic;
        }

        small {
          font-size: 80%;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol,
        pre {
          display: block;
          margin:
            ${ getMarginValue('x16') }
            ${ getMarginValue('none') };
        }

        h1 {
          font-size: ${ getFontScaleValue('h1')?.fontSize };
          font-weight: ${ getFontScaleValue('h1')?.fontWeight };
          line-height: ${ getFontScaleValue('h1')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('h1')?.letterSpacing };
        }

        h2 {
          font-size: ${ getFontScaleValue('s2')?.fontSize };
          font-weight: ${ getFontScaleValue('s2')?.fontWeight };
          line-height: ${ getFontScaleValue('s2')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('s2')?.letterSpacing };
        }

        h3 {
          font-size: ${ getFontScaleValue('p2')?.fontSize };
          font-weight: ${ getFontScaleValue('p2')?.fontWeight };
          line-height: ${ getFontScaleValue('p2')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('p2')?.letterSpacing };
        }

        h4 {
          font-size: ${ getFontScaleValue('c2')?.fontSize };
          font-weight: ${ getFontScaleValue('c2')?.fontWeight };
          line-height: ${ getFontScaleValue('c2')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('c2')?.letterSpacing };
        }

        h5 {
          font-size: ${ getFontScaleValue('micro')?.fontSize };
          font-weight: ${ getFontScaleValue('micro')?.fontWeight };
          line-height: ${ getFontScaleValue('micro')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('micro')?.letterSpacing };
        }

        h6 {
          font-size: ${ getFontScaleValue('micro')?.fontSize };
          font-weight: ${ getFontScaleValue('micro')?.fontWeight };
          line-height: ${ getFontScaleValue('micro')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('micro')?.letterSpacing };
        }

        p {
          font-size: ${ getFontScaleValue('p1')?.fontSize };
          font-weight: ${ getFontScaleValue('p1')?.fontWeight };
          line-height: ${ getFontScaleValue('p1')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('p1')?.letterSpacing };
        }

        ul,
        ol {
          padding-inline-start: ${ getPaddingValue('x40') };
        }

        ul {
          font-size: ${ getFontScaleValue('p1')?.fontSize };
          font-weight: ${ getFontScaleValue('p1')?.fontWeight };
          line-height: ${ getFontScaleValue('p1')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('p1')?.letterSpacing };
          list-style-type: disc;
        }

        ol {
          font-size: ${ getFontScaleValue('p1')?.fontSize };
          font-weight: ${ getFontScaleValue('p1')?.fontWeight };
          line-height: ${ getFontScaleValue('p1')?.lineHeight };
          letter-spacing: ${ getFontScaleValue('p1')?.letterSpacing };
          list-style-type: decimal;
        }

        li {
          display: list-item;
          text-align: inherit;
        }

        pre {
          font-family: ${ getFontFamilyValue('mono') };

          code {
            display: block;
            padding: ${ getPaddingValue('x16') };
          }
        }
      `
      : undefined
  ),
  withTruncatedText: (value) => (
    value
      ? css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `
      : undefined
  ),
  size: (value) => css`
    width: ${ getSizeValue(value) || value } !important;
    height: ${ getSizeValue(value) || value } !important;
  `,
  minSize: (value) => css`
    min-width: ${ getSizeValue(value) || value } !important;
    min-height: ${ getSizeValue(value) || value } !important;
  `,
  maxSize: (value) => css`
    max-width: ${ getSizeValue(value) || value } !important;
    max-height: ${ getSizeValue(value) || value } !important;
  `,
  fontScale: (value) => css`
    font-size: ${ getFontScaleValue(value)?.fontSize } !important;
    font-weight: ${ getFontScaleValue(value)?.fontWeight } !important;
    line-height: ${ getFontScaleValue(value)?.lineHeight } !important;
    letter-spacing: ${ getFontScaleValue(value)?.letterSpacing } !important;
  `,
};

const stylingPropsAliases = {
  bg: 'backgroundColor',
  w: 'width',
  h: 'height',
  m: 'margin',
  mb: 'marginBlock',
  mbs: 'marginBlockStart',
  mbe: 'marginBlockEnd',
  mi: 'marginInline',
  mis: 'marginInlineStart',
  mie: 'marginInlineEnd',
  p: 'padding',
  pb: 'paddingBlock',
  pbs: 'paddingBlockStart',
  pbe: 'paddingBlockEnd',
  pi: 'paddingInline',
  pis: 'paddingInlineStart',
  pie: 'paddingInlineEnd',
};

export const StylingPropsContext = createContext();

export function StylingPropsProvider({ children, value }) {
  const parentValue = useContext(StylingPropsContext);

  const mergedValue = useMemo(() => {
    if (!value) {
      return parentValue;
    }

    if (!parentValue) {
      return value;
    }

    return Object.assign({}, value, parentValue);
  }, [parentValue, value]);

  return <StylingPropsContext.Provider children={children} value={mergedValue} />;
}

export const StylingPropsConsumer = ({
  children,
  props,
  sourceProps = Object.assign({}, props),
  targetProps = {},
}) => {
  const mapClassName = useClassNameMapping(props);

  const extraStylingProps = useContext(StylingPropsContext);
  const stylingProps = Object.assign({}, extraStylingProps);

  consumeProps(sourceProps, targetProps, (key, value, set) => {
    if (key === 'htmlSize') {
      if (value !== undefined) {
        set('size', () => value);
      }

      return true;
    }

    if (stylingPropsAliases[key]) {
      if (value !== undefined) {
        const effectiveKey = stylingPropsAliases[key];
        stylingProps[effectiveKey] = value;
      }

      return true;
    }

    if (stylingPropsStyles[key]) {
      if (value !== undefined) {
        stylingProps[key] = value;
      }

      return true;
    }
  }, (set) => {
    for (const [key, value] of Object.entries(stylingProps)) {
      if (value !== undefined) {
        const newClassName = mapClassName(stylingPropsStyles[key](value));
        set('className', (className) => appendClassName(className, newClassName));
      }
    }
  });

  const element = children(sourceProps, targetProps);

  if (extraStylingProps) {
    return <StylingPropsContext.Provider children={element} />;
  }

  return element;
};
