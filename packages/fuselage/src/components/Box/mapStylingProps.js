import { css } from '@rocket.chat/css-in-js';

import { fromCamelToKebab } from '../../helpers/fromCamelToKebab';
import { pickProps } from '../../helpers/pickProps';
import { getBorderWidthValue, getBorderRadiusValue } from '../../styles/props/borders';
import { getColorValue } from '../../styles/props/colors';
import { getSizeValue } from '../../styles/props/layout';
import { getInsetValue } from '../../styles/props/position';
import { getMarginValue, getPaddingValue } from '../../styles/props/spaces';
import { getFontFamilyValue, getFontScaleValue } from '../../styles/props/typography';

export const stylingPropMappings = {
  // borders
  border: (value) => value,
  borderBlock: (value) => value,
  borderBlockStart: (value) => value,
  borderBlockEnd: (value) => value,
  borderInline: (value) => value,
  borderInlineStart: (value) => value,
  borderInlineEnd: (value) => value,
  borderWidth: (value) => getBorderWidthValue(value) || value,
  borderBlockWidth: (value) => getBorderWidthValue(value) || value,
  borderBlockStartWidth: (value) => getBorderWidthValue(value) || value,
  borderBlockEndWidth: (value) => getBorderWidthValue(value) || value,
  borderInlineWidth: (value) => getBorderWidthValue(value) || value,
  borderInlineStartWidth: (value) => getBorderWidthValue(value) || value,
  borderInlineEndWidth: (value) => getBorderWidthValue(value) || value,
  borderStyle: (value) => value,
  borderBlockStyle: (value) => value,
  borderBlockStartStyle: (value) => value,
  borderBlockEndStyle: (value) => value,
  borderInlineStyle: (value) => value,
  borderInlineStartStyle: (value) => value,
  borderInlineEndStyle: (value) => value,
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
  opacity: (value) => value,

  // flexbox
  alignItems: (value) => value,
  alignContent: (value) => value,
  justifyItems: (value) => value,
  justifyContent: (value) => value,
  flexWrap: (value) => value,
  flexDirection: (value) => value,
  flexGrow: (value) => value,
  flexShrink: (value) => value,
  flexBasis: (value) => value,
  justifySelf: (value) => value,
  alignSelf: (value) => value,
  order: (value) => value,

  // layout
  width: (value) => getSizeValue(value) || value,
  minWidth: (value) => getSizeValue(value) || value,
  maxWidth: (value) => getSizeValue(value) || value,
  height: (value) => getSizeValue(value) || value,
  minHeight: (value) => getSizeValue(value) || value,
  maxHeight: (value) => getSizeValue(value) || value,
  display: (value) => value,
  verticalAlign: (value) => value,
  overflow: (value) => value,
  overflowX: (value) => value,
  overflowY: (value) => value,

  // position
  position: (value) => value,
  zIndex: (value) => value,
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
  fontStyle: (value) => value,
  textAlign: (value) => value,
  textTransform: (value) => value,
  textDecorationLine: (value) => value,
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
  ...bg !== undefined && { backgroundColor: bg },
  ...w !== undefined && { width: w },
  ...h !== undefined && { height: h },
  ...m !== undefined && { margin: m },
  ...mb !== undefined && { marginBlock: mb },
  ...mbs !== undefined && { marginBlockStart: mbs },
  ...mbe !== undefined && { marginBlockEnd: mbe },
  ...mi !== undefined && { marginInline: mi },
  ...mis !== undefined && { marginInlineStart: mis },
  ...mie !== undefined && { marginInlineEnd: mie },
  ...p !== undefined && { padding: p },
  ...pb !== undefined && { paddingBlock: pb },
  ...pbs !== undefined && { paddingBlockStart: pbs },
  ...pbe !== undefined && { paddingBlockEnd: pbe },
  ...pi !== undefined && { paddingInline: pi },
  ...pis !== undefined && { paddingInlineStart: pis },
  ...pie !== undefined && { paddingInlineEnd: pie },
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
