import { createTheme } from '../../helpers/createTheme';
import colors from '../../tokens/colors';
import dimensions from '../../theme/dimensions';
import typography from '../../theme/typography';


export default createTheme('rcx-input', {
  padding: '0.625rem 0.875rem',
  borderWidth: dimensions.borderWidth,
  borderRadius: dimensions.borderRadius,
  color: colors.dark800,
  iconColor: colors.dark800,
  placeholderColor: colors.dark600,
  backgroundColor: colors.white,
  borderColor: colors.dark500,
  hoverBorderColor: colors.dark600,
  focusBorderColor: colors.blue500,
  focusShadowColor: colors.blue100,
  focusCaretColor: colors.blue500,
  focusIconColor: colors.blue500,
  activeBorderColor: colors.dark600,
  activeCaretColor: colors.dark600,
  activeShadow: 'none',
  disabledBackgroundColor: colors.dark200,
  disabledBorderColor: colors.dark500,
  disabledColor: colors.dark800,
  disabledIconColor: colors.dark500,

  text: createTheme('rcx-input', {
    fontFamily: typography.boldParagraph.fontFamily,
    fontSize: typography.boldParagraph.fontSize,
    fontWeight: typography.boldParagraph.fontWeight,
    lineHeight: typography.boldParagraph.lineHeight,
  }),

  errorColor: colors.red500,
  errorIconColor: colors.red500,
  errorBorderColor: colors.red500,
  errorFocusShadowColor: colors.red100,
  iconSize: '1.25rem',
  iconMarginHorizontal: '1rem',
  iconMarginVertical: '0.75rem',
});
