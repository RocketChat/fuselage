import type { cssFn } from '@rocket.chat/css-in-js';
import {
  attachRules,
  transpile,
  escapeName,
  css,
} from '@rocket.chat/css-in-js';
import type { CSSProperties } from 'react';

import type { Var } from '../../Theme';
import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import { invariant } from '../../helpers/invariant';
import { warning } from '../../helpers/warning';
import {
  backgroundColor,
  fontColor,
  inset,
  fraction,
  nonNegativeInteger,
  integer,
} from '../../styleTokens';
import type { FontScale } from '../../styleTokens';
import type { Utility } from '../../styles/utilities/Utility';
import {
  borderBlockColor,
  borderBlockEndColor,
  borderBlockStartColor,
  borderColor,
  borderInlineColor,
  borderInlineEndColor,
  borderInlineStartColor,
} from '../../styles/utilities/important/borderColor';
import {
  borderRadius,
  borderEndEndRadius,
  borderEndStartRadius,
  borderStartEndRadius,
  borderStartStartRadius,
} from '../../styles/utilities/important/borderRadius';
import {
  borderBlockEndStyle,
  borderBlockStartStyle,
  borderBlockStyle,
  borderInlineEndStyle,
  borderInlineStartStyle,
  borderInlineStyle,
  borderStyle,
} from '../../styles/utilities/important/borderStyle';
import {
  borderWidth,
  borderBlockEndWidth,
  borderBlockStartWidth,
  borderBlockWidth,
  borderInlineEndWidth,
  borderInlineStartWidth,
  borderInlineWidth,
} from '../../styles/utilities/important/borderWidth';
import { display } from '../../styles/utilities/important/display';
import {
  alignContent,
  alignItems,
  alignSelf,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  justifyItems,
  justifySelf,
} from '../../styles/utilities/important/flex';
import {
  margin,
  marginBlock,
  marginBlockEnd,
  marginBlockStart,
  marginInline,
  marginInlineEnd,
  marginInlineStart,
} from '../../styles/utilities/important/margin';
import {
  overflow,
  overflowX,
  overflowY,
} from '../../styles/utilities/important/overflow';
import {
  padding,
  paddingBlock,
  paddingBlockEnd,
  paddingBlockStart,
  paddingInline,
  paddingInlineEnd,
  paddingInlineStart,
} from '../../styles/utilities/important/padding';
import { position } from '../../styles/utilities/important/position';
import {
  height,
  maxHeight,
  maxSize,
  maxWidth,
  minHeight,
  minSize,
  minWidth,
  size,
  width,
} from '../../styles/utilities/important/size';
import {
  fontScale,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  fontFamily,
  fontStyle,
  textAlign,
  textTransform,
  textDecorationLine,
  wordBreak,
} from '../../styles/utilities/important/text';
import { elevation } from '../../styles/utilities/misc/elevation';
import { invisible } from '../../styles/utilities/misc/invisible';
import { withTruncatedText } from '../../styles/utilities/misc/withTruncatedText';

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

type PropConsumer<TValue = unknown> = (
  propName: keyof StylingProps,
  value: TValue,
  stylesMap: Map<keyof StylingProps, cssFn>,
  props: { className?: string; [x: string]: unknown }
) => void;

type PropDefinition<TValue = any> =
  | {
      toCSSValue: (value: unknown) => string | undefined;
    }
  | {
      toStyle: (value: TValue) => cssFn | undefined;
    }
  | PropConsumer<TValue>;

const utility = <TValue>({
  normalizeValue,
  name,
  cssFn,
  fallbackCssFn,
}: Utility<TValue>): PropConsumer<TValue> => {
  const selectors = new Set<string>();

  const attachUtility = (selector: string, normalized: TValue) => {
    if (selectors.has(selector)) return;

    const content = cssFn(normalized);
    const rules = transpile(selector, content);
    attachRules(rules);
  };

  return (propName, value, stylesMap, props) => {
    let normalized: TValue;

    try {
      normalized = normalizeValue(value);
    } catch (error) {
      warning.always(
        `Invalid value for "${propName}": "${value}"; error: ${error}`
      );
      if (fallbackCssFn)
        stylesMap.set(propName, () => fallbackCssFn(String(value)));
      return;
    }

    if (normalized === false) return;

    const className = `rcx-u-${name(normalized)}`;
    const selector = `.${escapeName(className)}`;
    attachUtility(selector, normalized);

    props.className = props.className
      ? `${props.className} ${className}`
      : className;
  };
};

const aliasOf =
  <TPropName extends keyof StylingProps>(
    effectivePropName: TPropName
  ): PropConsumer<
    typeof propDefs[TPropName] extends PropDefinition<infer U> ? U : never
  > =>
  (propName, value, stylesMap, props) => {
    if (stylesMap.has(effectivePropName)) {
      return;
    }

    const consume = matchProp(effectivePropName);

    consume?.(propName, value, stylesMap, props);
  };

const shorthandProp = (): PropDefinition => ({
  toCSSValue: (value: unknown) => {
    value = String(value);
    invariant(typeof value === 'string', 'Expected a string');

    return value;
  },
});

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

const insetProp: PropDefinition = {
  toCSSValue: inset,
};

export const propDefs: Record<keyof StylingProps, PropDefinition> = {
  border: shorthandProp(),
  borderBlock: shorthandProp(),
  borderBlockStart: shorthandProp(),
  borderBlockEnd: shorthandProp(),
  borderInline: shorthandProp(),
  borderInlineStart: shorthandProp(),
  borderInlineEnd: shorthandProp(),
  borderWidth: utility(borderWidth),
  borderBlockWidth: utility(borderBlockWidth),
  borderBlockStartWidth: utility(borderBlockStartWidth),
  borderBlockEndWidth: utility(borderBlockEndWidth),
  borderInlineWidth: utility(borderInlineWidth),
  borderInlineStartWidth: utility(borderInlineStartWidth),
  borderInlineEndWidth: utility(borderInlineEndWidth),
  borderStyle: utility(borderStyle),
  borderBlockStyle: utility(borderBlockStyle),
  borderBlockStartStyle: utility(borderBlockStartStyle),
  borderBlockEndStyle: utility(borderBlockEndStyle),
  borderInlineStyle: utility(borderInlineStyle),
  borderInlineStartStyle: utility(borderInlineStartStyle),
  borderInlineEndStyle: utility(borderInlineEndStyle),
  borderColor: utility(borderColor),
  borderBlockColor: utility(borderBlockColor),
  borderBlockStartColor: utility(borderBlockStartColor),
  borderBlockEndColor: utility(borderBlockEndColor),
  borderInlineColor: utility(borderInlineColor),
  borderInlineStartColor: utility(borderInlineStartColor),
  borderInlineEndColor: utility(borderInlineEndColor),
  borderRadius: utility(borderRadius),
  borderStartStartRadius: utility(borderStartStartRadius),
  borderStartEndRadius: utility(borderStartEndRadius),
  borderEndStartRadius: utility(borderEndStartRadius),
  borderEndEndRadius: utility(borderEndEndRadius),

  color: fontColorProp,
  backgroundColor: backgroundColorProp,
  opacity: fractionProp,

  flexWrap: utility(flexWrap),
  flexDirection: utility(flexDirection),
  flexGrow: nonNegativeIntegerProp,
  flexShrink: nonNegativeIntegerProp,
  flexBasis: utility(flexBasis),
  order: integerProp,
  alignItems: utility(alignItems),
  alignContent: utility(alignContent),
  alignSelf: utility(alignSelf),
  justifyItems: utility(justifyItems),
  justifyContent: utility(justifyContent),
  justifySelf: utility(justifySelf),

  width: utility(width),
  minWidth: utility(minWidth),
  maxWidth: utility(maxWidth),
  height: utility(height),
  minHeight: utility(minHeight),
  maxHeight: utility(maxHeight),
  size: utility(size),
  minSize: utility(minSize),
  maxSize: utility(maxSize),

  display: utility(display),
  position: utility(position),
  inset: insetProp,
  insetBlock: insetProp,
  insetBlockStart: insetProp,
  insetBlockEnd: insetProp,
  insetInline: insetProp,
  insetInlineStart: insetProp,
  insetInlineEnd: insetProp,
  zIndex: integerProp,

  verticalAlign: insetProp,
  overflow: utility(overflow),
  overflowX: utility(overflowX),
  overflowY: utility(overflowY),

  margin: utility(margin),
  marginBlock: utility(marginBlock),
  marginBlockStart: utility(marginBlockStart),
  marginBlockEnd: utility(marginBlockEnd),
  marginInline: utility(marginInline),
  marginInlineStart: utility(marginInlineStart),
  marginInlineEnd: utility(marginInlineEnd),

  padding: utility(padding),
  paddingBlock: utility(paddingBlock),
  paddingBlockStart: utility(paddingBlockStart),
  paddingBlockEnd: utility(paddingBlockEnd),
  paddingInline: utility(paddingInline),
  paddingInlineStart: utility(paddingInlineStart),
  paddingInlineEnd: utility(paddingInlineEnd),

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

  fontScale: utility(fontScale),
  fontSize: utility(fontSize),
  fontWeight: utility(fontWeight),
  letterSpacing: utility(letterSpacing),
  lineHeight: utility(lineHeight),
  fontFamily: utility(fontFamily),
  fontStyle: utility(fontStyle),
  textAlign: utility(textAlign),
  textTransform: utility(textTransform),
  textDecorationLine: utility(textDecorationLine),
  wordBreak: utility(wordBreak),

  elevation: utility(elevation),
  invisible: utility(invisible),
  withTruncatedText: utility(withTruncatedText),
};

const createPropConsumer = (
  propName: keyof StylingProps,
  propDef: PropDefinition
): PropConsumer => {
  if ('toCSSValue' in propDef) {
    const cssProperty = fromCamelToKebab(propName);
    const { toCSSValue } = propDef;

    return (propName, value, stylesMap) => {
      const cssValue = toCSSValue(value);

      if (cssValue === undefined) {
        return;
      }

      stylesMap.set(
        propName,
        css`
          ${cssProperty}: ${cssValue} !important;
        `
      );
    };
  }

  if ('toStyle' in propDef) {
    const { toStyle } = propDef;

    return (propName, value, stylesMap) => {
      const style = toStyle(value);

      if (style === undefined) {
        return;
      }

      stylesMap.set(propName, style);
    };
  }

  return propDef;
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
  const stylesMap = new Map<keyof StylingProps, cssFn>();
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

    consumeProp(
      propName as keyof StylingProps,
      props[propName],
      stylesMap,
      newProps
    );
  }

  const styles = stylesMap.size
    ? css`
        ${Array.from(stylesMap.values())}
      `
    : undefined;

  return [newProps as TProps, styles];
}
