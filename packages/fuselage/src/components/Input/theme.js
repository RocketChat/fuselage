import { theme } from '../../helpers';
import borders from '../../styles/borders';
import spaces from '../../styles/spaces';
import textStyles from '../../styles/textStyles';
import colors from '../../tokens/colors';


export const color = colors.dark800;
export const iconColor = colors.dark800;
export const placeholderColor = colors.dark600;
export const backgroundColor = colors.white;
export const borderColor = colors.dark500;
export const hoverBorderColor = colors.dark600;
export const focusBorderColor = colors.blue500;
export const focusShadowColor = colors.blue100;
export const focusCaretColor = colors.blue500;
export const focusIconColor = colors.blue500;
export const activeBorderColor = colors.dark600;
export const activeCaretColor = colors.dark600;
export const activeShadow = 'none';
export const disabledBackgroundColor = colors.dark200;
export const disabledBorderColor = colors.dark500;
export const disabledColor = colors.dark800;
export const disabledIconColor = colors.dark500;
export const errorColor = colors.red500;
export const errorIconColor = colors.red500;
export const errorBorderColor = colors.red500;
export const errorFocusShadowColor = colors.red100;

export const border = {
  width: theme('input-border-width', borders.default.width),
  radius: theme('input-border-radius', borders.default.radius),
};

export const paddingX = theme('input-padding-x', spaces[5]);

export const paddingY = theme('input-padding-y', spaces[4]);

export const textStyle = {
  fontFamily: theme('input-font-family', textStyles.p1.fontFamily),
  fontSize: theme('input-font-size', textStyles.p1.fontSize),
  fontWeight: theme('input-font-weight', textStyles.p1.fontWeight),
  letterSpacing: theme('input-letter-spacing', textStyles.p1.letterSpacing),
  lineHeight: theme('input-line-height', textStyles.p1.lineHeight),
};

export const iconMarginX = theme('input-icon-margin-x', spaces[5]);

export const iconMarginY = theme('input-icon-margin-y', spaces[4]);

export const normalColors = {
  backgroundColor: theme('input-background-color', colors.white),
  borderColor: theme('input-border-color', colors.dark500),
  color: theme('input-color', colors.dark800),
  placeholderColor: theme('input-placeholder-color', colors.dark600),
  hoverBorderColor: theme('input-hover-border-color', colors.dark600),
  focusBorderColor: theme('input-focus-border-color', colors.blue500),
  focusShadowColor: theme('input-focus-shadow-color', colors.blue100),
  focusCaretColor: theme('input-focus-caret-color', colors.blue500),
  activeBorderColor: theme('input-active-border-color', colors.dark600),
  activeCaretColor: theme('input-active-caret-color', colors.dark600),
  disabledBackgroundColor: theme('input-disabled-background-color', colors.dark200),
  disabledBorderColor: theme('input-disabled-border-color', colors.dark500),
  disabledColor: theme('input-disabled-color', colors.dark800),
};

export const invalidColors = {
  backgroundColor: theme('input-invalid-background-color', colors.white),
  borderColor: theme('input-invalid-border-color', colors.red500),
  color: theme('input-invalid-color', colors.red500),
  placeholderColor: theme('input-invalid-placeholder-color', colors.dark600),
  hoverBorderColor: theme('input-invalid-hover-border-color', colors.red500),
  focusBorderColor: theme('input-invalid-focus-border-color', colors.red500),
  focusShadowColor: theme('input-invalid-focus-shadow-color', colors.red100),
  focusCaretColor: theme('input-invalid-focus-caret-color', colors.blue500),
  activeBorderColor: theme('input-invalid-active-border-color', colors.dark600),
  activeCaretColor: theme('input-invalid-active-caret-color', colors.dark600),
  disabledBackgroundColor: theme('input-invalid-disabled-background-color', colors.dark200),
  disabledBorderColor: theme('input-invalid-disabled-border-color', colors.dark500),
  disabledColor: theme('input-invalid-disabled-color', colors.dark800),
};
