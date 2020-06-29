import { css } from '@rocket.chat/css-in-js';

import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import { pickProps } from '../../helpers/pickProps';
import { getBorderWidthValue, getBorderRadiusValue } from './borders';
import { getColorValue } from './colors';
import { getSizeValue } from './layout';
import { getInsetValue } from './position';
import { getMarginValue, getPaddingValue } from './spaces';
import { getFontFamilyValue, getFontScaleValue } from './typography';

const mapValue = (value) => value;

export const stylingPropMappings = {
  // borders
  border: mapValue,
  borderBlock: mapValue,
  borderBlockStart: mapValue,
  borderBlockEnd: mapValue,
  borderInline: mapValue,
  borderInlineStart: mapValue,
  borderInlineEnd: mapValue,
  borderWidth: (value) => getBorderWidthValue(value) || value,
  borderBlockWidth: (value) => getBorderWidthValue(value) || value,
  borderBlockStartWidth: (value) => getBorderWidthValue(value) || value,
  borderBlockEndWidth: (value) => getBorderWidthValue(value) || value,
  borderInlineWidth: (value) => getBorderWidthValue(value) || value,
  borderInlineStartWidth: (value) => getBorderWidthValue(value) || value,
  borderInlineEndWidth: (value) => getBorderWidthValue(value) || value,
  borderStyle: mapValue,
  borderBlockStyle: mapValue,
  borderBlockStartStyle: mapValue,
  borderBlockEndStyle: mapValue,
  borderInlineStyle: mapValue,
  borderInlineStartStyle: mapValue,
  borderInlineEndStyle: mapValue,
  borderColor: (value) => getColorValue(value) || value,
  borderBlockColor: (value) => getColorValue(value) || value,
  borderBlockStartColor: (value) => getColorValue(value) || value,
  borderBlockEndColor: (value) => getColorValue(value) || value,
  borderInlineColor: (value) => getColorValue(value) || value,
  borderInlineStartColor: (value) => getColorValue(value) || value,
  borderInlineEndColor: (value) => getColorValue(value) || value,
  borderRadius: (value) => getBorderRadiusValue(value) || value,
  borderStartStartRadius: (value) => getBorderRadiusValue(value) || value,
  borderStartEndRadius: (value) => getBorderRadiusValue(value) || value,
  borderEndStartRadius: (value) => getBorderRadiusValue(value) || value,
  borderEndEndRadius: (value) => getBorderRadiusValue(value) || value,

  // colors
  color: (value) => getColorValue(value) || value,
  backgroundColor: (value) => getColorValue(value) || value,
  opacity: mapValue,

  // flexbox
  alignItems: mapValue,
  alignContent: mapValue,
  justifyItems: mapValue,
  justifyContent: mapValue,
  flexWrap: mapValue,
  flexDirection: mapValue,
  flexGrow: mapValue,
  flexShrink: mapValue,
  flexBasis: mapValue,
  justifySelf: mapValue,
  alignSelf: mapValue,
  order: mapValue,

  // layout
  width: (value) => getSizeValue(value) || value,
  minWidth: (value) => getSizeValue(value) || value,
  maxWidth: (value) => getSizeValue(value) || value,
  height: (value) => getSizeValue(value) || value,
  minHeight: (value) => getSizeValue(value) || value,
  maxHeight: (value) => getSizeValue(value) || value,
  display: mapValue,
  verticalAlign: mapValue,
  overflow: mapValue,
  overflowX: mapValue,
  overflowY: mapValue,

  // position
  position: mapValue,
  zIndex: mapValue,
  inset: (value) => getInsetValue(value) || value,
  insetBlock: (value) => getInsetValue(value) || value,
  insetBlockStart: (value) => getInsetValue(value) || value,
  insetBlockEnd: (value) => getInsetValue(value) || value,
  insetInline: (insetInline) => getInsetValue(insetInline) || insetInline,
  insetInlineStart: (value) => getInsetValue(value) || value,
  insetInlineEnd: (value) => getInsetValue(value) || value,

  // spacing
  margin: (value) => getMarginValue(value) || value,
  marginBlock: (value) => getMarginValue(value) || value,
  marginBlockStart: (value) => getMarginValue(value) || value,
  marginBlockEnd: (value) => getMarginValue(value) || value,
  marginInline: (value) => getMarginValue(value) || value,
  marginInlineStart: (value) => getMarginValue(value) || value,
  marginInlineEnd: (value) => getMarginValue(value) || value,
  padding: (value) => getPaddingValue(value) || value,
  paddingBlock: (value) => getPaddingValue(value) || value,
  paddingBlockStart: (value) => getPaddingValue(value) || value,
  paddingBlockEnd: (value) => getPaddingValue(value) || value,
  paddingInline: (value) => getPaddingValue(value) || value,
  paddingInlineStart: (value) => getPaddingValue(value) || value,
  paddingInlineEnd: (value) => getPaddingValue(value) || value,

  // typography
  fontFamily: (value) => getFontFamilyValue(value) || value,
  fontSize: (value) => getFontScaleValue(value)?.fontSize || getSizeValue(value) || value,
  fontWeight: (value) => getFontScaleValue(value)?.fontWeight || value,
  lineHeight: (value) => getFontScaleValue(value)?.lineHeight || getSizeValue(value) || value,
  letterSpacing: (value) => getFontScaleValue(value)?.letterSpacing || value,
  fontStyle: mapValue,
  textAlign: mapValue,
  textTransform: mapValue,
  textDecorationLine: mapValue,
};

const mapPropToCss = ([name, value]) => {
  if (!value) {
    return;
  }

  const cssProperty = fromCamelToKebab(name);
  const cssValue = stylingPropMappings[name](value);

  return css`${ cssProperty }: ${ cssValue } !important;`;
};

export const mapStylingPropsAliases = ({
  bg,
  w,
  h,
  m,
  mi,
  mis,
  mie,
  mb,
  mbs,
  mbe,
  p,
  pi,
  pis,
  pie,
  pb,
  pbs,
  pbe,
  ...props
}) => ({
  backgroundColor: bg,
  width: w,
  height: h,
  margin: m,
  marginBlock: mb,
  marginBlockStart: mbs,
  marginBlockEnd: mbe,
  marginInline: mi,
  marginInlineStart: mis,
  marginInlineEnd: mie,
  padding: p,
  paddingBlock: pb,
  paddingBlockStart: pbs,
  paddingBlockEnd: pbe,
  paddingInline: pi,
  paddingInlineStart: pis,
  paddingInlineEnd: pie,
  ...props,
});

const stylingPropsNames = Object.keys(stylingPropMappings);

export const mapStylingProps = (props) => {
  const [picked, { className, ...rest }] = pickProps(
    mapStylingPropsAliases(props),
    stylingPropsNames,
  );

  return {
    className: [
      ...className,
      css`${ Object.entries(picked).map(mapPropToCss) }`,
    ],
    ...rest,
  };
};
