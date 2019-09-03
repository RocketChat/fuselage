import { createTheme } from '../../helpers/createTheme';
import dimensions from '../../theme/dimensions';
import typography from '../../theme/typography';
import colors from '../../tokens/colors';

export default createTheme('rcx-button', {
  borderWidth: dimensions.borderWidth,
  borderRadius: dimensions.borderRadius,

  mediumSize: createTheme('rcx-button-medium', {
    fontFamily: typography.variants.boldParagraph.fontFamily,
    fontSize: typography.variants.boldParagraph.fontSize,
    fontWeight: typography.variants.boldParagraph.fontWeight,
    lineHeight: typography.variants.boldParagraph.lineHeight,
    iconSize: '1rem',
    height: '2.5rem',
    paddingVertical: '0.5rem',
    paddingHorizontal: '0.875rem',
  }),

  smallSize: createTheme('rcx-button-small', {
    fontFamily: typography.variants.boldCaption.fontFamily,
    fontSize: typography.variants.boldCaption.fontSize,
    fontWeight: typography.variants.boldCaption.fontWeight,
    lineHeight: typography.variants.boldCaption.lineHeight,
    iconSize: '0.75rem',
    height: '2rem',
    paddingVertical: '0.375rem',
    paddingHorizontal: '0.625rem',
  }),

  basicColors: createTheme('rcx-button-basic', {
    color: colors.dark800,
    dangerColor: colors.red500,
    backgroundColor: colors.dark300,
    hoverBackgroundColor: colors.dark400,
    activeBackgroundColor: colors.dark500,
    focusBackgroundColor: colors.dark300,
    focusBorderColor: colors.dark500,
    focusShadowColor: colors.dark100,
    disabledColor: colors.dark400,
    disabledDangerColor: colors.red100,
    disabledBackgroundColor: colors.dark100,
  }),

  primaryColors: createTheme('rcx-button-primary', {
    color: colors.white,
    backgroundColor: colors.blue500,
    dangerBackgroundColor: colors.red500,
    hoverBackgroundColor: colors.blue600,
    dangerHoverBackgroundColor: colors.red600,
    activeBackgroundColor: colors.blue700,
    dangerActiveBackgroundColor: colors.red700,
    focusBackgroundColor: colors.blue500,
    dangerFocusBackgroundColor: colors.red500,
    focusBorderColor: colors.blue700,
    dangerFocusBorderColor: colors.red700,
    focusShadowColor: colors.blue100,
    dangerFocusShadowColor: colors.red100,
    disabledBackgroundColor: colors.blue200,
    dangerDisabledBackgroundColor: colors.red200,
  }),
});
