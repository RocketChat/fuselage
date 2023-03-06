import type { cssFn } from '@rocket.chat/css-in-js';
import { css } from '@rocket.chat/css-in-js';
import invariant from 'invariant';
import type { CSSProperties } from 'react';

import type { Var } from '../../Theme';
import { Palette } from '../../Theme';
import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import type { FontScale } from '../../styleTokens';
import {
  borderRadius,
  borderWidth,
  backgroundColor,
  fontColor,
  fontFamily,
  inset,
  size,
  strokeColor,
  spacing,
  fraction,
  nonNegativeInteger,
  integer,
} from '../../styleTokens';
import * as tokens from '../../styleTokens';
import { fontScale } from '../../styles/utilities/fontScale';
import { withTruncatedText } from '../../styles/utilities/withTruncatedText';

export type StylingProps = {
  border: CSSProperties['border'];
  borderBlock: CSSProperties['borderBlock'];
  borderBlockStart: CSSProperties['borderBlockStart'];
  borderBlockEnd: CSSProperties['borderBlockEnd'];
  borderInline: CSSProperties['borderInline'];
  borderInlineStart: CSSProperties['borderInlineStart'];
  borderInlineEnd: CSSProperties['borderInlineEnd'];
  borderWidth: CSSProperties['borderWidth'];
  borderBlockWidth: CSSProperties['borderBlockWidth'];
  borderBlockStartWidth: CSSProperties['borderBlockStartWidth'];
  borderBlockEndWidth: CSSProperties['borderBlockEndWidth'];
  borderInlineWidth: CSSProperties['borderInlineWidth'];
  borderInlineStartWidth: CSSProperties['borderInlineStartWidth'];
  borderInlineEndWidth: CSSProperties['borderInlineEndWidth'];
  borderStyle: CSSProperties['borderStyle'];
  borderBlockStyle: CSSProperties['borderBlockStyle'];
  borderBlockStartStyle: CSSProperties['borderBlockStartStyle'];
  borderBlockEndStyle: CSSProperties['borderBlockEndStyle'];
  borderInlineStyle: CSSProperties['borderInlineStyle'];
  borderInlineStartStyle: CSSProperties['borderInlineStartStyle'];
  borderInlineEndStyle: CSSProperties['borderInlineEndStyle'];
  borderColor: CSSProperties['borderColor'];
  borderBlockColor: CSSProperties['borderBlockColor'];
  borderBlockStartColor: CSSProperties['borderBlockStartColor'];
  borderBlockEndColor: CSSProperties['borderBlockEndColor'];
  borderInlineColor: CSSProperties['borderInlineColor'];
  borderInlineStartColor: CSSProperties['borderInlineStartColor'];
  borderInlineEndColor: CSSProperties['borderInlineEndColor'];
  borderRadius: CSSProperties['borderRadius'];
  borderStartStartRadius: CSSProperties['borderStartStartRadius'];
  borderStartEndRadius: CSSProperties['borderStartEndRadius'];
  borderEndStartRadius: CSSProperties['borderEndStartRadius'];
  borderEndEndRadius: CSSProperties['borderEndEndRadius'];

  color: CSSProperties['color'] | Var;
  backgroundColor: CSSProperties['backgroundColor'] | Var;
  bg: CSSProperties['backgroundColor'] | Var;
  opacity: CSSProperties['opacity'];

  alignItems: CSSProperties['alignItems'];
  alignContent: CSSProperties['alignContent'];
  justifyItems: CSSProperties['justifyItems'];
  justifyContent: CSSProperties['justifyContent'];
  flexWrap: CSSProperties['flexWrap'];
  flexDirection: CSSProperties['flexDirection'];
  flexGrow: CSSProperties['flexGrow'];
  flexShrink: CSSProperties['flexShrink'];
  flexBasis: CSSProperties['flexBasis'];
  justifySelf: CSSProperties['justifySelf'];
  alignSelf: CSSProperties['alignSelf'];
  order: CSSProperties['order'];

  w: CSSProperties['width'];
  width: CSSProperties['width'];
  minWidth: CSSProperties['minWidth'];
  maxWidth: CSSProperties['maxWidth'];
  h: CSSProperties['height'];
  height: CSSProperties['height'];
  minHeight: CSSProperties['minHeight'];
  maxHeight: CSSProperties['maxHeight'];
  display: CSSProperties['display'];
  verticalAlign: CSSProperties['verticalAlign'];
  overflow: CSSProperties['overflow'];
  overflowX: CSSProperties['overflowX'];
  overflowY: CSSProperties['overflowY'];

  position: CSSProperties['position'];
  zIndex: CSSProperties['zIndex'];
  inset: CSSProperties['inset'];
  insetBlock: CSSProperties['insetBlock'];
  insetBlockStart: CSSProperties['insetBlockStart'];
  insetBlockEnd: CSSProperties['insetBlockEnd'];
  insetInline: CSSProperties['insetInline'];
  insetInlineStart: CSSProperties['insetInlineStart'];
  insetInlineEnd: CSSProperties['insetInlineEnd'];

  m: CSSProperties['margin'];
  margin: CSSProperties['margin'];
  mb: CSSProperties['marginBlock'];
  marginBlock: CSSProperties['marginBlock'];
  mbs: CSSProperties['marginBlockStart'];
  marginBlockStart: CSSProperties['marginBlockStart'];
  mbe: CSSProperties['marginBlockEnd'];
  marginBlockEnd: CSSProperties['marginBlockEnd'];
  mi: CSSProperties['marginInline'];
  marginInline: CSSProperties['marginInline'];
  mis: CSSProperties['marginInlineStart'];
  marginInlineStart: CSSProperties['marginInlineStart'];
  mie: CSSProperties['marginInlineEnd'];
  marginInlineEnd: CSSProperties['marginInlineEnd'];
  p: CSSProperties['padding'];
  padding: CSSProperties['padding'];
  pb: CSSProperties['paddingBlock'];
  paddingBlock: CSSProperties['paddingBlock'];
  pbs: CSSProperties['paddingBlockStart'];
  paddingBlockStart: CSSProperties['paddingBlockStart'];
  pbe: CSSProperties['paddingBlockEnd'];
  paddingBlockEnd: CSSProperties['paddingBlockEnd'];
  pi: CSSProperties['paddingInline'];
  paddingInline: CSSProperties['paddingInline'];
  pis: CSSProperties['paddingInlineStart'];
  paddingInlineStart: CSSProperties['paddingInlineStart'];
  pie: CSSProperties['paddingInlineEnd'];
  paddingInlineEnd: CSSProperties['paddingInlineEnd'];

  fontFamily: CSSProperties['fontFamily'] | FontScale;
  fontSize: CSSProperties['fontSize'] | FontScale;
  fontStyle: CSSProperties['fontStyle'];
  fontWeight: CSSProperties['fontWeight'] | FontScale;
  letterSpacing: CSSProperties['letterSpacing'] | FontScale;
  lineHeight: CSSProperties['lineHeight'] | FontScale;
  textAlign: CSSProperties['textAlign'];
  textTransform: CSSProperties['textTransform'];
  textDecorationLine: CSSProperties['textDecorationLine'];
  wordBreak: CSSProperties['wordBreak'];

  elevation: '0' | '1' | '2' | '1nb' | '2nb';
  invisible: boolean;
  withTruncatedText: boolean;
  size: CSSProperties['blockSize'];
  minSize: CSSProperties['blockSize'];
  maxSize: CSSProperties['blockSize'];
  fontScale: FontScale;
};

type PropConsumer = (
  value: unknown,
  stylingProps: Map<keyof StylingProps, cssFn>,
  props: Record<string, unknown>
) => void;

type PropDefinition =
  | {
      toCSSValue: (value: unknown) => string | undefined;
    }
  | { aliasOf: keyof StylingProps }
  | {
      toStyle: (value: unknown) => cssFn | undefined;
    }
  | ((
      propName: string,
      value: unknown,
      props: { className?: string; [x: string]: unknown },
      stylingProps: Map<keyof StylingProps, cssFn>
    ) => void);

const enumProp: PropDefinition = {
  toCSSValue: (value) => {
    value = String(value);
    invariant(typeof value === 'string', 'Expected a string');
    return value;
  },
};

const shorthandProp = (): PropDefinition => ({
  toCSSValue: (value: unknown) => {
    value = String(value);
    invariant(typeof value === 'string', 'Expected a string');

    return value;
  },
});

const borderWidthProp: PropDefinition = {
  toCSSValue: borderWidth,
};

const borderColorProp: PropDefinition = {
  toCSSValue: strokeColor,
};

const borderRadiusProp: PropDefinition = {
  toCSSValue: borderRadius,
};

const fontColorProp: PropDefinition = {
  toCSSValue: fontColor,
};

const backgroundColorProp: PropDefinition = {
  toCSSValue: backgroundColor,
};

const fractionProp: PropDefinition = {
  toCSSValue: fraction,
};

const nonNegativeIntegerProp: PropDefinition = {
  toCSSValue: nonNegativeInteger,
};

const integerProp: PropDefinition = {
  toCSSValue: integer,
};

const sizeProp: PropDefinition = {
  toCSSValue: size,
};

const insetProp: PropDefinition = {
  toCSSValue: inset,
};

const fontFamilyProp: PropDefinition = {
  toCSSValue: fontFamily,
};

const fontSizeProp: PropDefinition = {
  toCSSValue: (value) => tokens.fontScale(value)?.fontSize || size(value),
};

const fontWeightProp: PropDefinition = {
  toCSSValue: (value) =>
    value ? String(tokens.fontScale(value)?.fontWeight || value) : undefined,
};

const lineHeightProp: PropDefinition = {
  toCSSValue: (value) => tokens.fontScale(value)?.lineHeight || size(value),
};

const letterSpacingProp: PropDefinition = {
  toCSSValue: (value) =>
    value ? String(tokens.fontScale(value)?.letterSpacing || value) : undefined,
};

const aliasOf = (propName: keyof StylingProps): PropDefinition => ({
  aliasOf: propName,
});

const spacingProp = {
  toCSSValue: spacing,
};

export const propDefs: Record<keyof StylingProps, PropDefinition> = {
  border: shorthandProp(),
  borderBlock: shorthandProp(),
  borderBlockStart: shorthandProp(),
  borderBlockEnd: shorthandProp(),
  borderInline: shorthandProp(),
  borderInlineStart: shorthandProp(),
  borderInlineEnd: shorthandProp(),
  borderWidth: borderWidthProp,
  borderBlockWidth: borderWidthProp,
  borderBlockStartWidth: borderWidthProp,
  borderBlockEndWidth: borderWidthProp,
  borderInlineWidth: borderWidthProp,
  borderInlineStartWidth: borderWidthProp,
  borderInlineEndWidth: borderWidthProp,
  borderStyle: enumProp,
  borderBlockStyle: enumProp,
  borderBlockStartStyle: enumProp,
  borderBlockEndStyle: enumProp,
  borderInlineStyle: enumProp,
  borderInlineStartStyle: enumProp,
  borderInlineEndStyle: enumProp,
  borderColor: borderColorProp,
  borderBlockColor: borderColorProp,
  borderBlockStartColor: borderColorProp,
  borderBlockEndColor: borderColorProp,
  borderInlineColor: borderColorProp,
  borderInlineStartColor: borderColorProp,
  borderInlineEndColor: borderColorProp,
  borderRadius: borderRadiusProp,
  borderStartStartRadius: borderRadiusProp,
  borderStartEndRadius: borderRadiusProp,
  borderEndStartRadius: borderRadiusProp,
  borderEndEndRadius: borderRadiusProp,

  color: fontColorProp,
  backgroundColor: backgroundColorProp,
  opacity: fractionProp,

  alignItems: enumProp,
  alignContent: enumProp,
  justifyItems: enumProp,
  justifyContent: enumProp,
  flexWrap: enumProp,
  flexDirection: enumProp,
  flexGrow: nonNegativeIntegerProp,
  flexShrink: nonNegativeIntegerProp,
  flexBasis: sizeProp,
  justifySelf: enumProp,
  alignSelf: enumProp,
  order: integerProp,

  width: sizeProp,
  minWidth: sizeProp,
  maxWidth: sizeProp,
  height: sizeProp,
  minHeight: sizeProp,
  maxHeight: sizeProp,
  display: enumProp,
  verticalAlign: insetProp,
  overflow: enumProp,
  overflowX: enumProp,
  overflowY: enumProp,

  margin: spacingProp,
  marginBlock: spacingProp,
  marginBlockStart: spacingProp,
  marginBlockEnd: spacingProp,
  marginInline: spacingProp,
  marginInlineStart: spacingProp,
  marginInlineEnd: spacingProp,
  padding: spacingProp,
  paddingBlock: spacingProp,
  paddingBlockStart: spacingProp,
  paddingBlockEnd: spacingProp,
  paddingInline: spacingProp,
  paddingInlineStart: spacingProp,
  paddingInlineEnd: spacingProp,

  position: enumProp,
  zIndex: integerProp,
  inset: insetProp,
  insetBlock: insetProp,
  insetBlockStart: insetProp,
  insetBlockEnd: insetProp,
  insetInline: insetProp,
  insetInlineStart: insetProp,
  insetInlineEnd: insetProp,

  bg: aliasOf('backgroundColor'),
  w: aliasOf('width'),
  h: aliasOf('height'),
  m: aliasOf('margin'),
  mb: aliasOf('marginBlock'),
  mbs: aliasOf('marginBlockStart'),
  mbe: aliasOf('marginBlockEnd'),
  mi: aliasOf('marginInline'),
  mis: aliasOf('marginInlineStart'),
  mie: aliasOf('marginInlineEnd'),
  p: aliasOf('padding'),
  pb: aliasOf('paddingBlock'),
  pbs: aliasOf('paddingBlockStart'),
  pbe: aliasOf('paddingBlockEnd'),
  pi: aliasOf('paddingInline'),
  pis: aliasOf('paddingInlineStart'),
  pie: aliasOf('paddingInlineEnd'),

  fontFamily: fontFamilyProp,
  fontSize: fontSizeProp,
  fontStyle: enumProp,
  fontWeight: fontWeightProp,
  letterSpacing: letterSpacingProp,
  lineHeight: lineHeightProp,
  textAlign: enumProp,
  textTransform: enumProp,
  textDecorationLine: enumProp,
  wordBreak: enumProp,

  elevation: {
    toStyle: (value) => {
      if (value === '0') {
        return css`
          box-shadow: none;
        `;
      }

      if (value === '1') {
        return css`
          box-shadow: 0px 0px 12px 0px ${Palette.shadow['shadow-elevation-1']};
          border: 1px solid ${Palette.shadow['shadow-elevation-border']};
        `;
      }

      if (value === '1nb') {
        return css`
          box-shadow: 0px 0px 12px 0px ${Palette.shadow['shadow-elevation-1']};
        `;
      }

      if (value === '2') {
        return css`
          box-shadow: 0px 0px 2px 0px ${Palette.shadow['shadow-elevation-2x']},
            0px 0px 12px 0px ${Palette.shadow['shadow-elevation-2y']};
          border: 1px solid ${Palette.shadow['shadow-elevation-border']};
        `;
      }

      if (value === '2nb') {
        return css`
          box-shadow: 0px 0px 2px 0px ${Palette.shadow['shadow-elevation-2x']},
            0px 0px 12px 0px ${Palette.shadow['shadow-elevation-2y']};
        `;
      }
    },
  },
  invisible: {
    toStyle: (value) =>
      value
        ? css`
            visibility: hidden;
            opacity: 0;
          `
        : undefined,
  },
  withTruncatedText: {
    toStyle: (value) => () => withTruncatedText(Boolean(value)),
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
    toStyle: (value) =>
      tokens.isFontScale(value)
        ? () => fontScale({ value, important: true })
        : undefined,
  },
};

const createPropConsumer = (
  propName: keyof StylingProps,
  propDef: PropDefinition
): PropConsumer => {
  if ('aliasOf' in propDef) {
    const { aliasOf: effectivePropName } = propDef;

    return (value, stylingProps, props) => {
      if (stylingProps.has(effectivePropName)) {
        return;
      }

      const consume = matchProp(effectivePropName);

      consume?.(value, stylingProps, props);
    };
  }

  if ('toCSSValue' in propDef) {
    const cssProperty = fromCamelToKebab(propName);
    const { toCSSValue } = propDef;

    return (value, stylingProps) => {
      const cssValue = toCSSValue(value);

      if (cssValue === undefined) {
        return;
      }

      stylingProps.set(
        propName,
        css`
          ${cssProperty}: ${cssValue} !important;
        `
      );
    };
  }

  if ('toStyle' in propDef) {
    const { toStyle } = propDef;

    return (value, stylingProps) => {
      const style = toStyle(value);

      if (style === undefined) {
        return;
      }

      stylingProps.set(propName, style);
    };
  }

  return (value, stylingProps, props) => {
    propDef(propName, value, props, stylingProps);
  };
};

const consumers = new Map<string, PropConsumer>();

const isStylingProp = (propName: string): propName is keyof StylingProps =>
  propName in propDefs;

function matchProp(propName: string | undefined) {
  const variants = propName?.split(':');
  propName = variants?.pop();

  if (!propName || !isStylingProp(propName)) {
    return undefined;
  }

  if (consumers.has(propName)) {
    return consumers.get(propName);
  }

  const consumer = createPropConsumer(propName, propDefs[propName]);
  consumers.set(propName, consumer);
  return consumer;
}

/**
 * Extracts styling props from a given props object.
 *
 * @param props The props object to extract styling props from.
 * @returns A tuple containing the props object without styling props and the styles.
 */
export function extractStylingProps<
  TProps extends Readonly<{ className?: string; [x: string]: unknown }>
>(
  props: TProps & Readonly<Partial<StylingProps>>
): [props: TProps, styles: cssFn | undefined] {
  const stylingProps = new Map<keyof StylingProps, cssFn>();
  const newProps: Record<string, unknown> = props.className
    ? { className: props.className }
    : {};

  for (const propName of Object.keys(props)) {
    if (propName === 'className') {
      continue;
    }

    const consumeProp = matchProp(propName);

    if (!consumeProp) {
      newProps[propName] = props[propName];
      continue;
    }

    if (props[propName] === undefined) {
      continue;
    }

    consumeProp(props[propName], stylingProps, newProps);
  }

  const styles = stylingProps.size
    ? css`
        ${Array.from(stylingProps.values())}
      `
    : undefined;

  return [newProps as TProps, styles];
}
