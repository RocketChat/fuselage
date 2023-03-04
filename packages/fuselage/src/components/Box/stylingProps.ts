import type { cssFn } from '@rocket.chat/css-in-js';
import {
  createClassName,
  transpile,
  attachRules,
  escapeName,
  css,
} from '@rocket.chat/css-in-js';
import type { CSSProperties } from 'react';

import type { Var } from '../../Theme';
import { Palette } from '../../Theme';
import { appendClassName } from '../../helpers/appendClassName';
import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import {
  borderRadius,
  borderWidth,
  backgroundColor,
  fontColor,
  fontFamily,
  fontScale,
  inset,
  size,
  strokeColor,
  spacing,
} from '../../styleTokens';

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

type ExtractionOptions = {
  encapsulatingSelector?: string;
};

type PropConsumer = (
  value: unknown,
  stylingProps: Map<keyof StylingProps, cssFn>,
  props: Record<string, unknown>,
  options: ExtractionOptions
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
      options: ExtractionOptions
    ) => void);

const stringProp: PropDefinition = {
  toCSSValue: (value) => (typeof value === 'string' ? value : undefined),
};

const numberOrStringProp: PropDefinition = {
  toCSSValue: (value) => {
    if (typeof value === 'number' || typeof value === 'string') {
      return String(value);
    }

    return undefined;
  },
};

const borderWidthProp: PropDefinition = {
  toCSSValue: borderWidth,
};

const borderRadiusProp: PropDefinition = {
  toCSSValue: borderRadius,
};

const backgroundColorProp: PropDefinition = {
  toCSSValue: backgroundColor,
};

const fontColorProp: PropDefinition = {
  toCSSValue: fontColor,
};

const strokeColorProp: PropDefinition = {
  toCSSValue: strokeColor,
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
  toCSSValue: (value) => fontScale(value)?.fontSize || size(value),
};

const fontWeightProp: PropDefinition = {
  toCSSValue: (value) =>
    value ? String(fontScale(value)?.fontWeight || value) : undefined,
};

const lineHeightProp: PropDefinition = {
  toCSSValue: (value) => fontScale(value)?.lineHeight || size(value),
};

const letterSpacingProp: PropDefinition = {
  toCSSValue: (value) =>
    value ? String(fontScale(value)?.letterSpacing || value) : undefined,
};

const aliasOf = (propName: keyof StylingProps): PropDefinition => ({
  aliasOf: propName,
});

const spacingProp = (property: string, prefix: string): PropDefinition => {
  const parseValue = spacing.getCSSValue;
  const getValueSuffix = spacing.getClassNameSuffix;

  const attachedSelectors = new Set<string>();
  const attachUtilityClass = (selector: string, declarationBlock: string) => {
    if (attachedSelectors.has(selector)) {
      return;
    }

    const rules = transpile(selector, declarationBlock);
    attachRules(rules);
    attachedSelectors.add(selector);
  };

  return (_, value, props, { encapsulatingSelector }) => {
    const declarationBlock = `${property}:${parseValue(value)}!important;`;

    const valueSuffix = getValueSuffix(value);
    const className = valueSuffix
      ? `${prefix}-${valueSuffix}!`
      : createClassName(declarationBlock);
    const selector = `${encapsulatingSelector ?? ''}.${escapeName(className)}`;
    attachUtilityClass(selector, declarationBlock);
    props.className = appendClassName(props.className, className);
  };
};

export const propDefs: Record<keyof StylingProps, PropDefinition> = {
  /* spacing */
  margin: spacingProp('margin', 'm'),
  marginBlock: spacingProp('margin-block', 'mb'),
  marginBlockStart: spacingProp('margin-block-start', 'mbs'),
  marginBlockEnd: spacingProp('margin-block-end', 'mbe'),
  marginInline: spacingProp('margin-inline', 'mi'),
  marginInlineStart: spacingProp('margin-inline-start', 'mis'),
  marginInlineEnd: spacingProp('margin-inline-end', 'mie'),
  padding: spacingProp('padding', 'p'),
  paddingBlock: spacingProp('padding-block', 'pb'),
  paddingBlockStart: spacingProp('padding-block-start', 'pbs'),
  paddingBlockEnd: spacingProp('padding-block-end', 'pbe'),
  paddingInline: spacingProp('padding-inline', 'pi'),
  paddingInlineStart: spacingProp('padding-inline-start', 'pis'),
  paddingInlineEnd: spacingProp('padding-inline-end', 'pie'),

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
  borderColor: strokeColorProp,
  borderBlockColor: strokeColorProp,
  borderBlockStartColor: strokeColorProp,
  borderBlockEndColor: strokeColorProp,
  borderInlineColor: strokeColorProp,
  borderInlineStartColor: strokeColorProp,
  borderInlineEndColor: strokeColorProp,
  borderRadius: borderRadiusProp,
  borderStartStartRadius: borderRadiusProp,
  borderStartEndRadius: borderRadiusProp,
  borderEndStartRadius: borderRadiusProp,
  borderEndEndRadius: borderRadiusProp,

  color: fontColorProp,
  backgroundColor: backgroundColorProp,
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
  fontStyle: stringProp,
  fontWeight: fontWeightProp,
  letterSpacing: letterSpacingProp,
  lineHeight: lineHeightProp,
  textAlign: stringProp,
  textTransform: stringProp,
  textDecorationLine: stringProp,
  wordBreak: stringProp,

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
    toStyle: (value) =>
      value
        ? css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          `
        : undefined,
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

const createPropConsumer = (
  propName: keyof StylingProps,
  propDef: PropDefinition
): PropConsumer => {
  if ('aliasOf' in propDef) {
    const { aliasOf: effectivePropName } = propDef;

    return (value, stylingProps, props, options) => {
      if (stylingProps.has(effectivePropName)) {
        return;
      }

      const consume = matchProp(effectivePropName);

      consume?.(value, stylingProps, props, options);
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

  return (value, _, props, options) => {
    propDef(propName, value, props, options);
  };
};

const consumers = new Map<string, PropConsumer>();

const isStylingProp = (propName: string): propName is keyof StylingProps =>
  propName in propDefs;

const matchProp = (propName: string | undefined) => {
  const modifiers = propName?.split(':');
  propName = modifiers?.pop();

  if (!propName || !isStylingProp(propName)) {
    return undefined;
  }

  if (consumers.has(propName)) {
    return consumers.get(propName);
  }

  const consumer = createPropConsumer(propName, propDefs[propName]);
  consumers.set(propName, consumer);
  return consumer;
};

/**
 * Extracts styling props from a given props object.
 *
 * @param props The props object to extract styling props from.
 * @returns A tuple containing the props object without styling props and the styles.
 */
export const extractStylingProps = <
  TProps extends Readonly<{ className?: string; [x: string]: unknown }>
>(
  props: TProps & Readonly<Partial<StylingProps>>,
  options: ExtractionOptions = {}
): [props: TProps, styles: cssFn | undefined] => {
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

    consumeProp(props[propName], stylingProps, newProps, options);
  }

  const styles = stylingProps.size
    ? css`
        ${Array.from(stylingProps.values())}
      `
    : undefined;

  return [newProps as TProps, styles];
};
