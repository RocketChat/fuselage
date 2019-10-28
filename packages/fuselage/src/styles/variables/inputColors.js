import colors from '@rocket.chat/fuselage-tokens/colors';

import { theme } from '../utilities/common';

export default {
  normal: {
    backgroundColor: theme('input-colors-background-color', colors.white),
    borderColor: theme('input-colors-border-color', colors.dark500),
    color: theme('input-colors-color', colors.dark800),
    placeholderColor: theme('input-colors-placeholder-color', colors.dark600),
    hoverBorderColor: theme('input-colors-hover-border-color', colors.dark600),
    focusBorderColor: theme('input-colors-focus-border-color', colors.blue500),
    focusShadowColor: theme('input-colors-focus-shadow-color', colors.blue100),
    focusIconColor: theme('input-colors-focus-icon-color', colors.blue500),
    focusCaretColor: theme('input-colors-focus-caret-color', colors.blue500),
    activeBorderColor: theme('input-colors-active-border-color', colors.dark600),
    activeCaretColor: theme('input-colors-active-caret-color', colors.dark600),
    disabledBackgroundColor: theme('input-colors-disabled-background-color', colors.dark200),
    disabledBorderColor: theme('input-colors-disabled-border-color', colors.dark500),
    disabledColor: theme('input-colors-disabled-color', colors.dark800),
  },

  invalid: {
    backgroundColor: theme('input-colors-invalid-background-color', colors.white),
    borderColor: theme('input-colors-invalid-border-color', colors.red500),
    color: theme('input-colors-invalid-color', colors.red500),
    placeholderColor: theme('input-colors-invalid-placeholder-color', colors.dark600),
    hoverBorderColor: theme('input-colors-invalid-hover-border-color', colors.red500),
    focusBorderColor: theme('input-colors-invalid-focus-border-color', colors.red500),
    focusShadowColor: theme('input-colors-invalid-focus-shadow-color', colors.red100),
    focusIconColor: theme('input-colors-invalid-focus-icon-color', colors.red500),
    focusCaretColor: theme('input-colors-invalid-focus-caret-color', colors.red500),
    activeBorderColor: theme('input-colors-invalid-active-border-color', colors.dark600),
    activeCaretColor: theme('input-colors-invalid-active-caret-color', colors.dark600),
    disabledBackgroundColor: theme('input-colors-invalid-disabled-background-color', colors.dark200),
    disabledBorderColor: theme('input-colors-invalid-disabled-border-color', colors.dark500),
    disabledColor: theme('input-colors-invalid-disabled-color', colors.dark800),
  },
};
