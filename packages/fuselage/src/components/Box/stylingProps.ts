import type { cssFn } from '@rocket.chat/css-in-js';
import { css } from '@rocket.chat/css-in-js';
import type { CSSProperties } from 'react';

import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import {
  borderRadius,
  borderWidth,
  color,
  fontFamily,
  fontScale,
  inset,
  margin,
  padding,
  size,
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

  color: CSSProperties['color'];
  backgroundColor: CSSProperties['backgroundColor'];
  bg: CSSProperties['backgroundColor'];
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

  elevation: '0' | '1' | '2';
  invisible: boolean;
  withTruncatedText: boolean;
  size: CSSProperties['blockSize'];
  minSize: CSSProperties['blockSize'];
  maxSize: CSSProperties['blockSize'];
  fontScale: FontScale;
};

type PropDefinition =
  | {
      toCSSValue: (value: unknown) => string | undefined;
    }
  | { aliasOf: keyof StylingProps }
  | {
      toStyle: (value: unknown) => cssFn | undefined;
    };

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

const colorProp: PropDefinition = {
  toCSSValue: color,
};

const sizeProp: PropDefinition = {
  toCSSValue: size,
};

const insetProp: PropDefinition = {
  toCSSValue: inset,
};

const marginProp: PropDefinition = {
  toCSSValue: margin,
};

const paddingProp: PropDefinition = {
  toCSSValue: padding,
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

export const propDefs: Record<keyof StylingProps, PropDefinition> = {
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

const compiledPropDefs = new Map(
  (Object.entries(propDefs) as [keyof StylingProps, PropDefinition][]).map(
    ([propName, propDef]): [
      propName: string,
      inject: (
        value: unknown,
        stylingProps: Map<keyof StylingProps, cssFn>
      ) => void
    ] => {
      if ('aliasOf' in propDef) {
        const { aliasOf: effectivePropName } = propDef;

        return [
          propName,
          (value, stylingProps) => {
            if (stylingProps.has(effectivePropName)) {
              return;
            }

            const inject = compiledPropDefs.get(effectivePropName);

            inject?.(value, stylingProps);
          },
        ];
      }

      if ('toCSSValue' in propDef) {
        const cssProperty = fromCamelToKebab(propName);
        const { toCSSValue } = propDef;
        return [
          propName,
          (value, stylingProps) => {
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
          },
        ];
      }

      const { toStyle } = propDef;

      return [
        propName,
        (value, stylingProps) => {
          const style = toStyle(value);

          if (style === undefined) {
            return;
          }

          stylingProps.set(propName, style);
        },
      ];
    }
  )
);

export const extractStylingProps = <TProps extends Record<string, unknown>>(
  props: TProps & Partial<StylingProps>
): [props: TProps, styles: cssFn | undefined] => {
  const stylingProps = new Map<keyof StylingProps, cssFn>();
  const newProps: Record<string, unknown> = {};

  for (const [propName, value] of Object.entries(props)) {
    const inject = compiledPropDefs.get(propName);

    if (!inject) {
      newProps[propName] = value;
      continue;
    }

    if (value === undefined) {
      continue;
    }

    inject(value, stylingProps);
  }

  const styles = stylingProps.size
    ? css`
        ${Array.from(stylingProps.values())}
      `
    : undefined;

  return [newProps as TProps, styles];
};
