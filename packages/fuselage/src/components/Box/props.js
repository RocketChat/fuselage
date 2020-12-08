import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../../helpers/appendClassName';
import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import { prependClassName } from '../../helpers/prependClassName';
import {
  borderWidth,
  borderRadius,
  color,
  size,
  inset,
  margin,
  padding,
  fontFamily,
  fontScale,
} from '../../styleTokens';
import { elevation } from '../../styles/runtime/elevation';
import * as fontScales from '../../styles/runtime/fontScales';
import { invisible } from '../../styles/runtime/invisible';
import * as sizes from '../../styles/runtime/sizes';
import { withRichContent } from '../../styles/runtime/withRichContent';
import { withTruncatedText } from '../../styles/runtime/withTruncatedText';

export const consumeRcxProps = (props) => {
  for (const [key, value] of Object.entries(props)) {
    if (key.slice(0, 4) !== 'rcx-') {
      continue;
    }

    delete props[key];

    if (!value) {
      continue;
    }

    const newClassName = value === true ? key : `${key}-${value}`;
    props.className = prependClassName(props.className, newClassName);
  }

  return props;
};

const preAliases = {
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

export const consumePreAliases = (props) => {
  for (const [alias, propName] of Object.entries(preAliases)) {
    if (typeof props[alias] === 'undefined') {
      continue;
    }

    if (typeof props[propName] !== 'undefined') {
      delete props[alias];
      continue;
    }

    props[propName] = props[alias];
    delete props[alias];
  }

  return props;
};

const specialStylingProps = {
  elevation,
  invisible,
  withRichContent,
  withTruncatedText,
  size: sizes.size,
  minSize: sizes.minSize,
  maxSize: sizes.maxSize,
  fontScale: fontScales.fontScale,
};

export const consumeSpecialStylingProps = (props) => {
  for (const [propName, fn] of Object.entries(specialStylingProps)) {
    if (typeof props[propName] === 'undefined') {
      continue;
    }

    props.className = appendClassName(props.className, fn(props[propName]));
    delete props[propName];
  }

  return props;
};

const stringProp = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  return undefined;
};

const numberOrStringProp = (value) => {
  if (typeof value === 'number' || typeof value === 'string') {
    return String(value);
  }

  return undefined;
};

const fontSizeProp = (value) => fontScale(value)?.fontSize ?? size(value);

const fontWeightProp = (value) => fontScale(value)?.fontWeight ?? value;

const lineHeightProp = (value) => fontScale(value)?.lineHeight ?? size(value);

const letterSpacingProp = (value) => fontScale(value)?.letterSpacing ?? value;

const cssPropertiesProps = {
  border: stringProp,
  borderBlock: stringProp,
  borderBlockStart: stringProp,
  borderBlockEnd: stringProp,
  borderInline: stringProp,
  borderInlineStart: stringProp,
  borderInlineEnd: stringProp,
  borderWidth,
  borderBlockWidth: borderWidth,
  borderBlockStartWidth: borderWidth,
  borderBlockEndWidth: borderWidth,
  borderInlineWidth: borderWidth,
  borderInlineStartWidth: borderWidth,
  borderInlineEndWidth: borderWidth,
  borderStyle: stringProp,
  borderBlockStyle: stringProp,
  borderBlockStartStyle: stringProp,
  borderBlockEndStyle: stringProp,
  borderInlineStyle: stringProp,
  borderInlineStartStyle: stringProp,
  borderInlineEndStyle: stringProp,
  borderColor: color,
  borderBlockColor: color,
  borderBlockStartColor: color,
  borderBlockEndColor: color,
  borderInlineColor: color,
  borderInlineStartColor: color,
  borderInlineEndColor: color,
  borderRadius,
  borderStartStartRadius: borderRadius,
  borderStartEndRadius: borderRadius,
  borderEndStartRadius: borderRadius,
  borderEndEndRadius: borderRadius,

  color,
  backgroundColor: color,
  opacity: numberOrStringProp,

  alignItems: stringProp,
  alignContent: stringProp,
  justifyItems: stringProp,
  justifyContent: stringProp,
  flexWrap: stringProp,
  flexDirection: stringProp,
  flexGrow: numberOrStringProp,
  flexShrink: numberOrStringProp,
  flexBasis: stringProp,
  justifySelf: stringProp,
  alignSelf: stringProp,
  order: numberOrStringProp,

  width: size,
  minWidth: size,
  maxWidth: size,
  height: size,
  minHeight: size,
  maxHeight: size,
  display: stringProp,
  verticalAlign: stringProp,
  overflow: stringProp,
  overflowX: stringProp,
  overflowY: stringProp,

  position: stringProp,
  zIndex: numberOrStringProp,
  inset,
  insetBlock: inset,
  insetBlockStart: inset,
  insetBlockEnd: inset,
  insetInline: inset,
  insetInlineStart: inset,
  insetInlineEnd: inset,

  margin,
  marginBlock: margin,
  marginBlockStart: margin,
  marginBlockEnd: margin,
  marginInline: margin,
  marginInlineStart: margin,
  marginInlineEnd: margin,
  padding,
  paddingBlock: padding,
  paddingBlockStart: padding,
  paddingBlockEnd: padding,
  paddingInline: padding,
  paddingInlineStart: padding,
  paddingInlineEnd: padding,

  fontFamily,
  fontSize: fontSizeProp,
  fontStyle: stringProp,
  fontWeight: fontWeightProp,
  letterSpacing: letterSpacingProp,
  lineHeight: lineHeightProp,
  textAlign: stringProp,
  textTransform: stringProp,
  textDecorationLine: stringProp,
};

export const consumeCssPropertiesProps = (props) => {
  for (const [propName, fn] of Object.entries(cssPropertiesProps)) {
    if (typeof props[propName] === 'undefined') {
      continue;
    }

    const cssProperty = fromCamelToKebab(propName);
    const cssValue = fn(props[propName]);
    const style = css`
      ${cssProperty}: ${cssValue} !important;
    `;

    props.className = appendClassName(props.className, style);
    delete props[propName];
  }

  return props;
};

const postAliases = {
  htmlSize: 'size',
};

export const consumePostAliases = (props) => {
  for (const [alias, propName] of Object.entries(postAliases)) {
    if (typeof props[alias] === 'undefined') {
      continue;
    }

    if (typeof props[propName] !== 'undefined') {
      delete props[alias];
      continue;
    }

    props[propName] = props[alias];
    delete props[alias];
  }

  return props;
};

export const consumeBoxProps = (props) => {
  if (props.animated) {
    props.className = prependClassName(props.className, 'rcx-box--animated');
    delete props.animated;
  }
  props.className = prependClassName(props.className, 'rcx-box--full');
  props.className = prependClassName(props.className, 'rcx-box');

  return props;
};
