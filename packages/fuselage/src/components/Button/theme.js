import { theme } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import spaces from '../../styles/spaces';
import textStyles from '../../styles/textStyles';
import colors from '../../tokens/colors';


export const mediumSizeParameters = {
  border: {
    width: theme('button-border-width', borders.default.width),
    radius: theme('button-border-radius', borders.default.radius),
  },
  paddingX: theme('button-padding-x', spaces[5]),
  iconSizeRatio: theme('button-padding-x', 0.8),
  textStyle: {
    fontFamily: theme('button-font-family', textStyles.p2.fontFamily),
    fontSize: theme('button-font-size', textStyles.p2.fontSize),
    fontWeight: theme('button-font-weight', textStyles.p2.fontWeight),
    letterSpacing: theme('button-letter-spacing', textStyles.p2.letterSpacing),
    lineHeight: theme('button-line-height', textStyles.p2.lineHeight),
  },
};

export const smallSizeParameters = {
  border: {
    width: theme('button-small-border-width', borders.default.width),
    radius: theme('button-small-border-radius', borders.default.radius),
  },
  paddingX: theme('button-small-padding-x', spaces[4]),
  iconSizeRatio: theme('button-small-padding-x', 0.75),
  textStyle: {
    fontFamily: theme('button-small-font-family', textStyles.c2.fontFamily),
    fontSize: theme('button-small-font-size', textStyles.c2.fontSize),
    fontWeight: theme('button-small-font-weight', textStyles.c2.fontWeight),
    letterSpacing: theme('button-small-letter-spacing', textStyles.c2.letterSpacing),
    lineHeight: theme('button-small-line-height', textStyles.c2.lineHeight),
  },
};

export const basicColors = {
  backgroundColor: theme('button-background-color', buttonColors.secondary.backgroundColor),
  borderColor: theme('button-border-color', buttonColors.secondary.borderColor),
  color: theme('button-color', buttonColors.secondary.color),
  hoverBackgroundColor: theme('button-hover-background-color', buttonColors.secondary.hoverBackgroundColor),
  hoverBorderColor: theme('button-hover-border-color', buttonColors.secondary.hoverBorderColor),
  activeBackgroundColor: theme('button-active-background-color', buttonColors.secondary.activeBackgroundColor),
  activeBorderColor: theme('button-active-border-color', buttonColors.secondary.activeBorderColor),
  focusBackgroundColor: theme('button-focus-background-color', buttonColors.secondary.focusBackgroundColor),
  focusBorderColor: theme('button-focus-border-color', buttonColors.secondary.focusBorderColor),
  focusShadowColor: theme('button-focus-shadow-color', buttonColors.secondary.focusShadowColor),
  disabledBackgroundColor: theme('button-disabled-background-color', buttonColors.secondary.disabledBackgroundColor),
  disabledBorderColor: theme('button-disabled-border-color', buttonColors.secondary.disabledBorderColor),
  disabledColor: theme('button-disabled-color', buttonColors.secondary.disabledColor),
};

export const basicDangerColors = {
  backgroundColor: theme('button-danger-background-color', buttonColors.secondary.backgroundColor),
  borderColor: theme('button-danger-border-color', buttonColors.secondary.borderColor),
  color: theme('button-danger-color', colors.red500),
  hoverBackgroundColor: theme('button-danger-hover-background-color', buttonColors.secondary.hoverBackgroundColor),
  hoverBorderColor: theme('button-danger-hover-border-color', buttonColors.secondary.hoverBorderColor),
  activeBackgroundColor: theme('button-danger-active-background-color', buttonColors.secondary.activeBackgroundColor),
  activeBorderColor: theme('button-danger-active-border-color', buttonColors.secondary.activeBorderColor),
  focusBackgroundColor: theme('button-danger-focus-background-color', buttonColors.secondary.focusBackgroundColor),
  focusBorderColor: theme('button-danger-focus-border-color', buttonColors.secondary.focusBorderColor),
  focusShadowColor: theme('button-danger-focus-shadow-color', buttonColors.secondary.focusShadowColor),
  disabledBackgroundColor: theme('button-danger-disabled-background-color', buttonColors.secondary.disabledBackgroundColor),
  disabledBorderColor: theme('button-danger-disabled-border-color', buttonColors.secondary.disabledBorderColor),
  disabledColor: theme('button-danger-disabled-color', colors.red100),
};

export const primaryColors = {
  backgroundColor: theme('button-primary-background-color', buttonColors.primary.backgroundColor),
  borderColor: theme('button-primary-border-color', buttonColors.primary.borderColor),
  color: theme('button-primary-color', buttonColors.primary.color),
  hoverBackgroundColor: theme('button-primary-hover-background-color', buttonColors.primary.hoverBackgroundColor),
  hoverBorderColor: theme('button-primary-hover-border-color', buttonColors.primary.hoverBorderColor),
  activeBackgroundColor: theme('button-primary-active-background-color', buttonColors.primary.activeBackgroundColor),
  activeBorderColor: theme('button-primary-active-border-color', buttonColors.primary.activeBorderColor),
  focusBackgroundColor: theme('button-primary-focus-background-color', buttonColors.primary.focusBackgroundColor),
  focusBorderColor: theme('button-primary-focus-border-color', buttonColors.primary.focusBorderColor),
  focusShadowColor: theme('button-primary-focus-shadow-color', buttonColors.primary.focusShadowColor),
  disabledBackgroundColor: theme('button-primary-disabled-background-color', buttonColors.primary.disabledBackgroundColor),
  disabledBorderColor: theme('button-primary-disabled-border-color', buttonColors.primary.disabledBorderColor),
  disabledColor: theme('button-primary-disabled-color', buttonColors.primary.disabledColor),
};

export const primaryDangerColors = {
  backgroundColor: theme('button-primary-danger-background-color', buttonColors.danger.backgroundColor),
  borderColor: theme('button-primary-danger-border-color', buttonColors.danger.borderColor),
  color: theme('button-primary-danger-color', buttonColors.danger.color),
  hoverBackgroundColor: theme('button-primary-danger-hover-background-color', buttonColors.danger.hoverBackgroundColor),
  hoverBorderColor: theme('button-primary-danger-hover-border-color', buttonColors.danger.hoverBorderColor),
  activeBackgroundColor: theme('button-primary-danger-active-background-color', buttonColors.danger.activeBackgroundColor),
  activeBorderColor: theme('button-primary-danger-active-border-color', buttonColors.danger.activeBorderColor),
  focusBackgroundColor: theme('button-primary-danger-focus-background-color', buttonColors.danger.focusBackgroundColor),
  focusBorderColor: theme('button-primary-danger-focus-border-color', buttonColors.danger.focusBorderColor),
  focusShadowColor: theme('button-primary-danger-focus-shadow-color', buttonColors.danger.focusShadowColor),
  disabledBackgroundColor: theme('button-primary-danger-disabled-background-color', buttonColors.danger.disabledBackgroundColor),
  disabledBorderColor: theme('button-primary-danger-disabled-border-color', buttonColors.danger.disabledBorderColor),
  disabledColor: theme('button-primary-danger-disabled-color', buttonColors.danger.disabledColor),
};

export const ghostColors = {
  backgroundColor: theme('button-ghost-background-color', 'transparent'),
  borderColor: theme('button-ghost-border-color', 'transparent'),
  color: theme('button-ghost-color', buttonColors.secondary.color),
  hoverBackgroundColor: theme('button-ghost-hover-background-color', buttonColors.secondary.hoverBackgroundColor),
  hoverBorderColor: theme('button-ghost-hover-border-color', buttonColors.secondary.hoverBorderColor),
  activeBackgroundColor: theme('button-ghost-active-background-color', buttonColors.secondary.activeBackgroundColor),
  activeBorderColor: theme('button-ghost-active-border-color', buttonColors.secondary.activeBorderColor),
  focusBackgroundColor: theme('button-ghost-focus-background-color', buttonColors.secondary.focusBackgroundColor),
  focusBorderColor: theme('button-ghost-focus-border-color', buttonColors.secondary.focusBorderColor),
  focusShadowColor: theme('button-ghost-focus-shadow-color', buttonColors.secondary.focusShadowColor),
  disabledBackgroundColor: theme('button-ghost-disabled-background-color', buttonColors.secondary.disabledBackgroundColor),
  disabledBorderColor: theme('button-ghost-disabled-border-color', buttonColors.secondary.disabledBorderColor),
  disabledColor: theme('button-ghost-disabled-color', buttonColors.secondary.disabledColor),
};

export const ghostDangerColors = {
  backgroundColor: theme('button-ghost-danger-background-color', 'transparent'),
  borderColor: theme('button-ghost-danger-border-color', 'transparent'),
  color: theme('button-ghost-danger-color', colors.red500),
  hoverBackgroundColor: theme('button-ghost-danger-hover-background-color', buttonColors.secondary.hoverBackgroundColor),
  hoverBorderColor: theme('button-ghost-danger-hover-border-color', buttonColors.secondary.hoverBorderColor),
  activeBackgroundColor: theme('button-ghost-danger-active-background-color', buttonColors.secondary.activeBackgroundColor),
  activeBorderColor: theme('button-ghost-danger-active-border-color', buttonColors.secondary.activeBorderColor),
  focusBackgroundColor: theme('button-ghost-danger-focus-background-color', buttonColors.secondary.focusBackgroundColor),
  focusBorderColor: theme('button-ghost-danger-focus-border-color', buttonColors.secondary.focusBorderColor),
  focusShadowColor: theme('button-ghost-danger-focus-shadow-color', buttonColors.secondary.focusShadowColor),
  disabledBackgroundColor: theme('button-ghost-danger-disabled-background-color', buttonColors.secondary.disabledBackgroundColor),
  disabledBorderColor: theme('button-ghost-danger-disabled-border-color', buttonColors.secondary.disabledBorderColor),
  disabledColor: theme('button-ghost-danger-disabled-color', colors.red100),
};
