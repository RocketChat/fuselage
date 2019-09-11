import { variantThemeVars } from '../../helpers';
import borders from '../../styles/borders';
import spaces from '../../styles/spaces';
import typography from '../../styles/typography';
import colors from '../../tokens/colors';


export const mediumSizeParameters = variantThemeVars('Button', 'mediumSize', {
  border: borders.default,
  paddingX: spaces[5],
  typographicVariant: typography.p2,
  iconSizeRatio: 0.8,
});

export const smallSizeParameters = variantThemeVars('Button', 'smallSize', {
  border: borders.default,
  paddingX: spaces[4],
  typographicVariant: typography.c2,
  iconSizeRatio: 0.75,
});

export const basicColors = variantThemeVars('Button', 'basic', {
  color: colors.dark800,
  backgroundColor: colors.dark300,
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledColor: colors.dark400,
  disabledBackgroundColor: colors.dark100,
});

export const basicDangerColors = variantThemeVars('Button', 'basicDanger', {
  color: colors.red500,
  backgroundColor: colors.dark300,
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledColor: colors.red100,
  disabledBackgroundColor: colors.dark100,
});

export const primaryColors = variantThemeVars('Button', 'primary', {
  color: colors.white,
  backgroundColor: colors.blue500,
  hoverBackgroundColor: colors.blue600,
  activeBackgroundColor: colors.blue700,
  focusBackgroundColor: colors.blue500,
  focusBorderColor: colors.blue700,
  focusShadowColor: colors.blue100,
  disabledColor: colors.white,
  disabledBackgroundColor: colors.blue200,
});

export const primaryDangerColors = variantThemeVars('Button', 'primaryDanger', {
  color: colors.white,
  backgroundColor: colors.red500,
  hoverBackgroundColor: colors.red600,
  activeBackgroundColor: colors.red700,
  focusBackgroundColor: colors.red500,
  focusBorderColor: colors.red700,
  focusShadowColor: colors.red100,
  disabledColor: colors.white,
  disabledBackgroundColor: colors.red200,
});

export const ghostColors = variantThemeVars('Button', 'ghost', {
  color: colors.dark800,
  backgroundColor: 'transparent',
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledColor: colors.dark400,
  disabledBackgroundColor: colors.dark100,
});

export const ghostDangerColors = variantThemeVars('Button', 'ghostDanger', {
  color: colors.red500,
  backgroundColor: 'transparent',
  hoverBackgroundColor: colors.dark400,
  activeBackgroundColor: colors.dark500,
  focusBackgroundColor: colors.dark300,
  focusBorderColor: colors.dark500,
  focusShadowColor: colors.dark100,
  disabledColor: colors.red100,
  disabledBackgroundColor: colors.dark100,
});
