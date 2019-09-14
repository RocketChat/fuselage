import { theme } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const size = theme('radio-button-size', textStyles.p1.lineHeight);

export const border = {
  width: theme('radio-button-border-width', borders.default.width),
  radius: theme('radio-button-border-radius', '50%'),
};

export const icon = {
  size: theme('radio-button-icon-size', 0.3),
};

export const uncheckedColors = {
  backgroundColor: theme('radio-button-background-color', buttonColors.empty.backgroundColor),
  borderColor: theme('radio-button-border-color', buttonColors.empty.borderColor),
  color: theme('radio-button-color', buttonColors.empty.color),
  hoverBackgroundColor: theme('radio-button-hover-background-color', buttonColors.empty.hoverBackgroundColor),
  hoverBorderColor: theme('radio-button-hover-border-color', buttonColors.empty.hoverBorderColor),
  activeBackgroundColor: theme('radio-button-active-background-color', buttonColors.empty.activeBackgroundColor),
  activeBorderColor: theme('radio-button-active-border-color', buttonColors.empty.activeBorderColor),
  focusBackgroundColor: theme('radio-button-focus-background-color', buttonColors.empty.focusBackgroundColor),
  focusBorderColor: theme('radio-button-focus-border-color', buttonColors.empty.focusBorderColor),
  focusShadowColor: theme('radio-button-focus-shadow-color', buttonColors.empty.focusShadowColor),
  disabledBackgroundColor: theme('radio-button-disabled-background-color', buttonColors.empty.disabledBackgroundColor),
  disabledBorderColor: theme('radio-button-disabled-border-color', buttonColors.empty.disabledBorderColor),
  disabledColor: theme('radio-button-disabled-color', buttonColors.empty.disabledColor),
};

export const checkedColors = {
  backgroundColor: theme('radio-button-checked-background-color', buttonColors.primary.backgroundColor),
  borderColor: theme('radio-button-checked-border-color', buttonColors.primary.borderColor),
  color: theme('radio-button-checked-color', buttonColors.primary.color),
  hoverBackgroundColor: theme('radio-button-checked-hover-background-color', buttonColors.primary.hoverBackgroundColor),
  hoverBorderColor: theme('radio-button-checked-hover-border-color', buttonColors.primary.hoverBorderColor),
  activeBackgroundColor: theme('radio-button-checked-active-background-color', buttonColors.primary.activeBackgroundColor),
  activeBorderColor: theme('radio-button-checked-active-border-color', buttonColors.primary.activeBorderColor),
  focusBackgroundColor: theme('radio-button-checked-focus-background-color', buttonColors.primary.focusBackgroundColor),
  focusBorderColor: theme('radio-button-checked-focus-border-color', buttonColors.primary.focusBorderColor),
  focusShadowColor: theme('radio-button-checked-focus-shadow-color', buttonColors.primary.focusShadowColor),
  disabledBackgroundColor: theme('radio-button-checked-disabled-background-color', buttonColors.primary.disabledBackgroundColor),
  disabledBorderColor: theme('radio-button-checked-disabled-border-color', buttonColors.primary.disabledBorderColor),
  disabledColor: theme('radio-button-checked-disabled-color', buttonColors.primary.disabledColor),
};
