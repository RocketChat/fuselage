import { createThemeVariant } from '../../helpers';
import borders from '../../styles/borders';
import spaces from '../../styles/spaces';
import typography from '../../styles/typography';
import colors from '../../tokens/colors';


export const mediumSizeParameters = createThemeVariant('button', 'medium-size', {
  border: borders.default,
  paddingX: spaces[5],
  ...typography.p2,
  iconSizeRatio: 0.8,
});

export const smallSizeParameters = createThemeVariant('button', 'small-size', {
  border: borders.default,
  paddingX: spaces[4],
  ...typography.c2,
  iconSizeRatio: 0.75,
});

export const basicColors = createThemeVariant('button', 'basic', {
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

export const basicDangerColors = createThemeVariant('button', 'basic-danger', {
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

export const primaryColors = createThemeVariant('button', 'primary', {
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

export const primaryDangerColors = createThemeVariant('button', 'primary-danger', {
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

export const ghostColors = createThemeVariant('button', 'ghost', {
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

export const ghostDangerColors = createThemeVariant('button', 'ghost-danger', {
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
