import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../../../helpers/appendClassName';
import { fromCamelToKebab } from '../../../helpers/fromCamelToKebab';
import * as styleTokens from '../../../styleTokens';

const stringProp = (value: string): string | undefined => {
  if (typeof value === 'string') {
    return value;
  }

  return undefined;
};

const numberOrStringProp = (value: number | string): string | undefined => {
  if (typeof value === 'number' || typeof value === 'string') {
    return String(value);
  }

  return undefined;
};

const cssPropertiesProps = {
  border: stringProp,
  borderBlock: stringProp,
  borderBlockStart: stringProp,
  borderBlockEnd: stringProp,
  borderInline: stringProp,
  borderInlineStart: stringProp,
  borderInlineEnd: stringProp,
  borderWidth: styleTokens.borderWidth,
  borderBlockWidth: styleTokens.borderWidth,
  borderBlockStartWidth: styleTokens.borderWidth,
  borderBlockEndWidth: styleTokens.borderWidth,
  borderInlineWidth: styleTokens.borderWidth,
  borderInlineStartWidth: styleTokens.borderWidth,
  borderInlineEndWidth: styleTokens.borderWidth,
  borderStyle: stringProp,
  borderBlockStyle: stringProp,
  borderBlockStartStyle: stringProp,
  borderBlockEndStyle: stringProp,
  borderInlineStyle: stringProp,
  borderInlineStartStyle: stringProp,
  borderInlineEndStyle: stringProp,
  borderColor: styleTokens.color,
  borderBlockColor: styleTokens.color,
  borderBlockStartColor: styleTokens.color,
  borderBlockEndColor: styleTokens.color,
  borderInlineColor: styleTokens.color,
  borderInlineStartColor: styleTokens.color,
  borderInlineEndColor: styleTokens.color,
  borderRadius: styleTokens.borderRadius,
  borderStartStartRadius: styleTokens.borderRadius,
  borderStartEndRadius: styleTokens.borderRadius,
  borderEndStartRadius: styleTokens.borderRadius,
  borderEndEndRadius: styleTokens.borderRadius,

  color: styleTokens.color,
  backgroundColor: styleTokens.color,
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

  width: styleTokens.size,
  minWidth: styleTokens.size,
  maxWidth: styleTokens.size,
  height: styleTokens.size,
  minHeight: styleTokens.size,
  maxHeight: styleTokens.size,
  display: stringProp,
  verticalAlign: stringProp,
  overflow: stringProp,
  overflowX: stringProp,
  overflowY: stringProp,

  position: stringProp,
  zIndex: numberOrStringProp,
  inset: styleTokens.inset,
  insetBlock: styleTokens.inset,
  insetBlockStart: styleTokens.inset,
  insetBlockEnd: styleTokens.inset,
  insetInline: styleTokens.inset,
  insetInlineStart: styleTokens.inset,
  insetInlineEnd: styleTokens.inset,

  margin: styleTokens.margin,
  marginBlock: styleTokens.margin,
  marginBlockStart: styleTokens.margin,
  marginBlockEnd: styleTokens.margin,
  marginInline: styleTokens.margin,
  marginInlineStart: styleTokens.margin,
  marginInlineEnd: styleTokens.margin,
  padding: styleTokens.padding,
  paddingBlock: styleTokens.padding,
  paddingBlockStart: styleTokens.padding,
  paddingBlockEnd: styleTokens.padding,
  paddingInline: styleTokens.padding,
  paddingInlineStart: styleTokens.padding,
  paddingInlineEnd: styleTokens.padding,

  fontFamily: styleTokens.fontFamily,
  fontSize: (
    value:
      | Parameters<typeof styleTokens.fontScale>[0]
      | Parameters<typeof styleTokens.size>[0]
  ) => styleTokens.fontScale(value)?.fontSize ?? styleTokens.size(value),
  fontStyle: stringProp,
  fontWeight: (value: Parameters<typeof styleTokens.fontScale>[0]) =>
    styleTokens.fontScale(value)?.fontWeight ?? value,
  letterSpacing: (value: Parameters<typeof styleTokens.fontScale>[0]) =>
    styleTokens.fontScale(value)?.letterSpacing ?? value,
  lineHeight: (value: Parameters<typeof styleTokens.fontScale>[0]) =>
    styleTokens.fontScale(value)?.lineHeight ?? styleTokens.size(value),
  textAlign: stringProp,
  textTransform: stringProp,
  textDecorationLine: stringProp,
} as const;

export type CssPropertyPropTypes = {
  [propName in keyof typeof cssPropertiesProps]?: Parameters<
    typeof cssPropertiesProps[propName]
  >[0];
};

export const isCssPropertyProp = (
  propName: string
): propName is keyof CssPropertyPropTypes =>
  typeof cssPropertiesProps[propName] !== 'undefined';

export const consumeCssPropertyProp = <
  P extends {
    className?:
      | string
      | ReturnType<typeof css>
      | (string | ReturnType<typeof css>)[];
  }
>(
  propName: keyof CssPropertyPropTypes,
  propValue: CssPropertyPropTypes[keyof CssPropertyPropTypes],
  props: P
): void => {
  const fn = cssPropertiesProps[propName];
  const cssProperty = fromCamelToKebab(propName);
  const cssValue = fn(propValue);
  if (cssValue === undefined) {
    return;
  }

  const style = css`
    ${`${cssProperty}: ${cssValue} !important;`}
  `;

  props.className = appendClassName(props.className, style);
};
