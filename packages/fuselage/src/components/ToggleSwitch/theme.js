import { theme } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const size = theme('toggle-switch-size', textStyles.p1.lineHeight);

export const border = {
  width: theme('toggle-switch-border-width', borders.default.width),
  radius: theme('toggle-switch-border-radius', '9999px'),
};

export const offColors = {
  backgroundColor: theme('toggle-switch-background-color', buttonColors.off.backgroundColor),
  borderColor: theme('toggle-switch-border-color', buttonColors.off.borderColor),
  color: theme('toggle-switch-color', buttonColors.off.color),
  hoverBackgroundColor: theme('toggle-switch-hover-background-color', buttonColors.off.hoverBackgroundColor),
  hoverBorderColor: theme('toggle-switch-hover-border-color', buttonColors.off.hoverBorderColor),
  activeBackgroundColor: theme('toggle-switch-active-background-color', buttonColors.off.activeBackgroundColor),
  activeBorderColor: theme('toggle-switch-active-border-color', buttonColors.off.activeBorderColor),
  focusBackgroundColor: theme('toggle-switch-focus-background-color', buttonColors.off.focusBackgroundColor),
  focusBorderColor: theme('toggle-switch-focus-border-color', buttonColors.off.focusBorderColor),
  focusShadowColor: theme('toggle-switch-focus-shadow-color', buttonColors.off.focusShadowColor),
  disabledBackgroundColor: theme('toggle-switch-disabled-background-color', buttonColors.off.disabledBackgroundColor),
  disabledBorderColor: theme('toggle-switch-disabled-border-color', buttonColors.off.disabledBorderColor),
  disabledColor: theme('toggle-switch-disabled-color', buttonColors.off.disabledColor),
};

export const onColors = {
  backgroundColor: theme('toggle-switch-on-background-color', buttonColors.primary.backgroundColor),
  borderColor: theme('toggle-switch-on-border-color', buttonColors.primary.borderColor),
  color: theme('toggle-switch-on-color', buttonColors.primary.color),
  hoverBackgroundColor: theme('toggle-switch-on-hover-background-color', buttonColors.primary.hoverBackgroundColor),
  hoverBorderColor: theme('toggle-switch-on-hover-border-color', buttonColors.primary.hoverBorderColor),
  activeBackgroundColor: theme('toggle-switch-on-active-background-color', buttonColors.primary.activeBackgroundColor),
  activeBorderColor: theme('toggle-switch-on-active-border-color', buttonColors.primary.activeBorderColor),
  focusBackgroundColor: theme('toggle-switch-on-focus-background-color', buttonColors.primary.focusBackgroundColor),
  focusBorderColor: theme('toggle-switch-on-focus-border-color', buttonColors.primary.focusBorderColor),
  focusShadowColor: theme('toggle-switch-on-focus-shadow-color', buttonColors.primary.focusShadowColor),
  disabledBackgroundColor: theme('toggle-switch-on-disabled-background-color', buttonColors.primary.disabledBackgroundColor),
  disabledBorderColor: theme('toggle-switch-on-disabled-border-color', buttonColors.primary.disabledBorderColor),
  disabledColor: theme('toggle-switch-on-disabled-color', buttonColors.primary.disabledColor),
};
