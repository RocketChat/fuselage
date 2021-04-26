import { css } from '@rocket.chat/css-in-js';
import PropTypes from 'prop-types';

import { appendClassName } from '../../helpers/appendClassName';
import { createPropType } from '../../helpers/createPropType';
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

const stringProp = {
  toCSSValue: (value) => (typeof value === 'string' ? value : undefined),
  propType: PropTypes.string,
};

const numberOrStringProp = {
  toCSSValue: (value) => {
    if (typeof value === 'number' || typeof value === 'string') {
      return String(value);
    }
  },
  propType: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const borderWidthProp = {
  toCSSValue: borderWidth,
  propType: createPropType(borderWidth),
};

const borderRadiusProp = {
  toCSSValue: borderRadius,
  propType: createPropType(borderRadius),
};

const colorProp = {
  toCSSValue: color,
  propType: createPropType(color),
};

const sizeProp = {
  toCSSValue: size,
  propType: createPropType(size),
};

const insetProp = {
  toCSSValue: inset,
  propType: createPropType(inset),
};

const marginProp = {
  toCSSValue: margin,
  propType: createPropType(margin),
};

const paddingProp = {
  toCSSValue: padding,
  propType: createPropType(padding),
};

const fontFamilyProp = {
  toCSSValue: fontFamily,
  propType: createPropType(fontFamily),
};

const fontSizeProp = {
  toCSSValue: (value) => fontScale(value)?.fontSize || size(value),
  propType: createPropType(
    (value) => fontScale(value)?.fontSize || size(value)
  ),
};

const fontWeightProp = {
  toCSSValue: (value) => fontScale(value)?.fontWeight || value,
  propType: createPropType((value) => fontScale(value)?.fontWeight || value),
};

const lineHeightProp = {
  toCSSValue: (value) => fontScale(value)?.lineHeight || size(value),
  propType: createPropType(
    (value) => fontScale(value)?.lineHeight || size(value)
  ),
};

const letterSpacingProp = {
  toCSSValue: (value) => fontScale(value)?.letterSpacing || value,
  propType: createPropType((value) => fontScale(value)?.letterSpacing || value),
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
    toStyle: (value) => {
      if (value === '0') {
        return css`
          box-shadow: none;
        `;
      }

      if (value === '1') {
        return css`
          box-shadow: 0px 0px 12px 0px ${color('neutral-800-10')};
        `;
      }

      if (value === '2') {
        return css`
          box-shadow: 0px 0px 2px 0px ${color('neutral-800-8')},
            0px 0px 12px 0px ${color('neutral-800-12')};
        `;
      }
    },
    propType: PropTypes.oneOf(['0', '1', '2']),
  },
  invisible: {
    toStyle: (value) =>
      value
        ? css`
            visibility: hidden;
            opacity: 0;
          `
        : undefined,
    propType: PropTypes.bool,
  },
  withTruncatedText: {
    toStyle: (value) =>
      value
        ? css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          `
        : undefined,
    propType: PropTypes.bool,
  },
  size: {
    toStyle: (value) =>
      size(value)
        ? css`
            width: ${size(value)} !important;
            height: ${size(value)} !important;
          `
        : undefined,
    propType: createPropType(size),
  },
  minSize: {
    toStyle: (value) =>
      size(value)
        ? css`
            min-width: ${size(value)} !important;
            min-height: ${size(value)} !important;
          `
        : undefined,
    propType: createPropType(size),
  },
  maxSize: {
    toStyle: (value) =>
      size(value)
        ? css`
            max-width: ${size(value)} !important;
            max-height: ${size(value)} !important;
          `
        : undefined,
    propType: createPropType(size),
  },
  fontScale: {
    toStyle: (value) => css`
      font-size: ${fontScale(value)?.fontSize} !important;
      font-weight: ${fontScale(value)?.fontWeight} !important;
      letter-spacing: ${fontScale(value)?.letterSpacing} !important;
      line-height: ${fontScale(value)?.lineHeight} !important;
    `,
    propType: PropTypes.oneOf(fontScale.values),
  },
};

export const propTypes = Object.entries(propDefs).reduce(
  (obj, [propName, propDef]) => {
    if (propDef.aliasOf) {
      propDef = propDefs[propDef.aliasOf];
    }

    obj[propName] = propDef.propType;
    return obj;
  },
  {
    htmlSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }
);

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
