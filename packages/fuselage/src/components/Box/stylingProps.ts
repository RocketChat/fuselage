import type { cssFn } from '@rocket.chat/css-in-js';
import { css } from '@rocket.chat/css-in-js';

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

type PropDefinition =
  | {
      toCSSValue: (value: unknown) => string | undefined;
    }
  | { aliasOf: string }
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

const aliasOf = (propName: string): PropDefinition => ({
  aliasOf: propName,
});

export const propDefs: Record<string, PropDefinition> = {
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
