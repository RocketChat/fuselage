import { theme } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const size = theme('check-box-size', textStyles.p1.lineHeight);

export const border = {
  width: theme('check-box-border-width', borders.default.width),
  radius: theme('check-box-border-radius', borders.default.radius),
};

export const icon = {
  smoothness: theme('check-box-icon-smoothness', 1, { rem: true }),
  thickness: theme('check-box-icon-thickness', 2, { rem: true }),
  size: theme('check-box-icon-size', 0.6),
};

export const uncheckedColors = {
  backgroundColor: theme('check-box-background-color', buttonColors.empty.backgroundColor),
  borderColor: theme('check-box-border-color', buttonColors.empty.borderColor),
  color: theme('check-box-color', buttonColors.empty.color),
  hoverBackgroundColor: theme('check-box-hover-background-color', buttonColors.empty.hoverBackgroundColor),
  hoverBorderColor: theme('check-box-hover-border-color', buttonColors.empty.hoverBorderColor),
  activeBackgroundColor: theme('check-box-active-background-color', buttonColors.empty.activeBackgroundColor),
  activeBorderColor: theme('check-box-active-border-color', buttonColors.empty.activeBorderColor),
  focusBackgroundColor: theme('check-box-focus-background-color', buttonColors.empty.focusBackgroundColor),
  focusBorderColor: theme('check-box-focus-border-color', buttonColors.empty.focusBorderColor),
  focusShadowColor: theme('check-box-focus-shadow-color', buttonColors.empty.focusShadowColor),
  disabledBackgroundColor: theme('check-box-disabled-background-color', buttonColors.empty.disabledBackgroundColor),
  disabledBorderColor: theme('check-box-disabled-border-color', buttonColors.empty.disabledBorderColor),
  disabledColor: theme('check-box-disabled-color', buttonColors.empty.disabledColor),
};

export const checkedColors = {
  backgroundColor: theme('check-box-checked-background-color', buttonColors.primary.backgroundColor),
  borderColor: theme('check-box-checked-border-color', buttonColors.primary.borderColor),
  color: theme('check-box-checked-color', buttonColors.primary.color),
  hoverBackgroundColor: theme('check-box-checked-hover-background-color', buttonColors.primary.hoverBackgroundColor),
  hoverBorderColor: theme('check-box-checked-hover-border-color', buttonColors.primary.hoverBorderColor),
  activeBackgroundColor: theme('check-box-checked-active-background-color', buttonColors.primary.activeBackgroundColor),
  activeBorderColor: theme('check-box-checked-active-border-color', buttonColors.primary.activeBorderColor),
  focusBackgroundColor: theme('check-box-checked-focus-background-color', buttonColors.primary.focusBackgroundColor),
  focusBorderColor: theme('check-box-checked-focus-border-color', buttonColors.primary.focusBorderColor),
  focusShadowColor: theme('check-box-checked-focus-shadow-color', buttonColors.primary.focusShadowColor),
  disabledBackgroundColor: theme('check-box-checked-disabled-background-color', buttonColors.primary.disabledBackgroundColor),
  disabledBorderColor: theme('check-box-checked-disabled-border-color', buttonColors.primary.disabledBorderColor),
  disabledColor: theme('check-box-checked-disabled-color', buttonColors.primary.disabledColor),
};

export const indeterminateColors = {
  backgroundColor: theme('check-box-indeterminate-background-color', buttonColors.primary.backgroundColor),
  borderColor: theme('check-box-indeterminate-border-color', buttonColors.primary.borderColor),
  color: theme('check-box-indeterminate-color', buttonColors.primary.color),
  hoverBackgroundColor: theme('check-box-indeterminate-hover-background-color', buttonColors.primary.hoverBackgroundColor),
  hoverBorderColor: theme('check-box-indeterminate-hover-border-color', buttonColors.primary.hoverBorderColor),
  activeBackgroundColor: theme('check-box-indeterminate-active-background-color', buttonColors.primary.activeBackgroundColor),
  activeBorderColor: theme('check-box-indeterminate-active-border-color', buttonColors.primary.activeBorderColor),
  focusBackgroundColor: theme('check-box-indeterminate-focus-background-color', buttonColors.primary.focusBackgroundColor),
  focusBorderColor: theme('check-box-indeterminate-focus-border-color', buttonColors.primary.focusBorderColor),
  focusShadowColor: theme('check-box-indeterminate-focus-shadow-color', buttonColors.primary.focusShadowColor),
  disabledBackgroundColor: theme('check-box-indeterminate-disabled-background-color', buttonColors.primary.disabledBackgroundColor),
  disabledBorderColor: theme('check-box-indeterminate-disabled-border-color', buttonColors.primary.disabledBorderColor),
  disabledColor: theme('check-box-indeterminate-disabled-color', buttonColors.primary.disabledColor),
};
