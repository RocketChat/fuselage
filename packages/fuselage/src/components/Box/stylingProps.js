import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../../helpers/appendClassName';
import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import { useStyle } from '../../hooks/useStyle';
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
import { invisible } from '../../styles/runtime/invisible';
import { withRichContent } from '../../styles/runtime/withRichContent';
import { withTruncatedText } from '../../styles/runtime/withTruncatedText';

const stringProp = {
  toCSSValue: (value) => (typeof value === 'string' ? value : undefined),
};

const numberOrStringProp = {
  toCSSValue: (value) => {
    if (typeof value === 'number' || typeof value === 'string') {
      return String(value);
    }
  },
};

const borderWidthProp = {
  toCSSValue: borderWidth,
};

const borderRadiusProp = {
  toCSSValue: borderRadius,
};

const colorProp = {
  toCSSValue: color,
};

const sizeProp = {
  toCSSValue: size,
};

const insetProp = {
  toCSSValue: inset,
};

const marginProp = {
  toCSSValue: margin,
};

const paddingProp = {
  toCSSValue: padding,
};

const fontFamilyProp = {
  toCSSValue: fontFamily,
};

const fontSizeProp = {
  toCSSValue: (value) => fontScale(value)?.fontSize || size(value),
};

const fontWeightProp = {
  toCSSValue: (value) => fontScale(value)?.fontWeight || value,
};

const lineHeightProp = {
  toCSSValue: (value) => fontScale(value)?.lineHeight || size(value),
};

const letterSpacingProp = {
  toCSSValue: (value) => fontScale(value)?.letterSpacing || value,
};

const aliasOf = (propName) => ({
  aliasOf: propName,
});

const propDefs = {
  border: stringProp,
  borderBlock: stringProp,
  borderBlockStart: stringProp,
  borderBlockEnd: stringProp,
  borderInline: stringProp,
  borderInlineStart: stringProp,
  borderInlineEnd: stringProp,
  borderWidth: borderWidthProp,
  borderBlockWidth: borderWidthProp,
  borderBlockStartWidth: borderWidthProp,
  borderBlockEndWidth: borderWidthProp,
  borderInlineWidth: borderWidthProp,
  borderInlineStartWidth: borderWidthProp,
  borderInlineEndWidth: borderWidthProp,
  borderStyle: stringProp,
  borderBlockStyle: stringProp,
  borderBlockStartStyle: stringProp,
  borderBlockEndStyle: stringProp,
  borderInlineStyle: stringProp,
  borderInlineStartStyle: stringProp,
  borderInlineEndStyle: stringProp,
  borderColor: colorProp,
  borderBlockColor: colorProp,
  borderBlockStartColor: colorProp,
  borderBlockEndColor: colorProp,
  borderInlineColor: colorProp,
  borderInlineStartColor: colorProp,
  borderInlineEndColor: colorProp,
  borderRadius: borderRadiusProp,
  borderStartStartRadius: borderRadiusProp,
  borderStartEndRadius: borderRadiusProp,
  borderEndStartRadius: borderRadiusProp,
  borderEndEndRadius: borderRadiusProp,

  color: colorProp,
  backgroundColor: colorProp,
  bg: aliasOf('backgroundColor'),
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

  w: aliasOf('width'),
  width: sizeProp,
  minWidth: sizeProp,
  maxWidth: sizeProp,
  h: aliasOf('height'),
  height: sizeProp,
  minHeight: sizeProp,
  maxHeight: sizeProp,
  display: stringProp,
  verticalAlign: stringProp,
  overflow: stringProp,
  overflowX: stringProp,
  overflowY: stringProp,

  position: stringProp,
  zIndex: numberOrStringProp,
  inset: insetProp,
  insetBlock: insetProp,
  insetBlockStart: insetProp,
  insetBlockEnd: insetProp,
  insetInline: insetProp,
  insetInlineStart: insetProp,
  insetInlineEnd: insetProp,

  m: aliasOf('margin'),
  margin: marginProp,
  mb: aliasOf('marginBlock'),
  marginBlock: marginProp,
  mbs: aliasOf('marginBlockStart'),
  marginBlockStart: marginProp,
  mbe: aliasOf('marginBlockEnd'),
  marginBlockEnd: marginProp,
  mi: aliasOf('marginInline'),
  marginInline: marginProp,
  mis: aliasOf('marginInlineStart'),
  marginInlineStart: marginProp,
  mie: aliasOf('marginInlineEnd'),
  marginInlineEnd: marginProp,
  p: aliasOf('padding'),
  padding: paddingProp,
  pb: aliasOf('paddingBlock'),
  paddingBlock: paddingProp,
  pbs: aliasOf('paddingBlockStart'),
  paddingBlockStart: paddingProp,
  pbe: aliasOf('paddingBlockEnd'),
  paddingBlockEnd: paddingProp,
  pi: aliasOf('paddingInline'),
  paddingInline: paddingProp,
  pis: aliasOf('paddingInlineStart'),
  paddingInlineStart: paddingProp,
  pie: aliasOf('paddingInlineEnd'),
  paddingInlineEnd: paddingProp,

  fontFamily: fontFamilyProp,
  fontSize: fontSizeProp,
  fontStyle: stringProp,
  fontWeight: fontWeightProp,
  letterSpacing: letterSpacingProp,
  lineHeight: lineHeightProp,
  textAlign: stringProp,
  textTransform: stringProp,
  textDecorationLine: stringProp,

  elevation: {
    toStyle: elevation,
  },
  invisible: {
    toStyle: invisible,
  },
  withRichContent: {
    toStyle: withRichContent,
  },
  withTruncatedText: {
    toStyle: withTruncatedText,
  },
  size: {
    toStyle: (value) =>
      size(value)
        ? css`
            width: ${size(value)} !important;
            height: ${size(value)} !important;
          `
        : undefined,
  },
  minSize: {
    toStyle: (value) =>
      size(value)
        ? css`
            min-width: ${size(value)} !important;
            min-height: ${size(value)} !important;
          `
        : undefined,
  },
  maxSize: {
    toStyle: (value) =>
      size(value)
        ? css`
            max-width: ${size(value)} !important;
            max-height: ${size(value)} !important;
          `
        : undefined,
  },
  fontScale: {
    toStyle: (value) => css`
      font-size: ${fontScale(value)?.fontSize} !important;
      font-weight: ${fontScale(value)?.fontWeight} !important;
      letter-spacing: ${fontScale(value)?.letterSpacing} !important;
      line-height: ${fontScale(value)?.lineHeight} !important;
    `,
  },
};

export const useStylingProps = (originalProps) => {
  const { htmlSize, ...props } = originalProps;

  const stylingProps = new Map();

  for (const entry of Object.entries(props)) {
    const [propName, propValue] = entry;
    const propDef = propDefs[propName];

    if (!propDef) {
      continue;
    }

    delete props[propName];

    if (propValue === undefined) {
      continue;
    }

    let effectivePropName = propName;
    let effectivePropDef = propDef;

    if (effectivePropDef.aliasOf) {
      if (stylingProps.has(effectivePropDef.aliasOf)) {
        continue;
      }

      effectivePropName = effectivePropDef.aliasOf;
      effectivePropDef = propDefs[effectivePropName];
    }

    let { toStyle } = effectivePropDef;

    if (effectivePropDef.toCSSValue) {
      const cssProperty = fromCamelToKebab(effectivePropName);
      const { toCSSValue } = effectivePropDef;
      toStyle = (value) => {
        const cssValue = toCSSValue(value);
        if (cssValue === undefined) {
          return;
        }

        return css`
          ${cssProperty}: ${cssValue} !important;
        `;
      };
    }

    const style = toStyle(propValue);

    if (style === undefined) {
      continue;
    }

    stylingProps.set(effectivePropName, style);
  }

  const styles = stylingProps.size
    ? Array.from(stylingProps.values())
    : undefined;

  const newClassName = useStyle(
    css`
      ${styles}
    `
  );

  if (newClassName) {
    props.className = appendClassName(props.className, newClassName);
  }

  if (htmlSize) {
    props.size = htmlSize;
  }

  return props;
};
