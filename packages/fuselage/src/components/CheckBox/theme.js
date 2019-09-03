import { createTheme } from '../../helpers/createTheme';
import dimensions from '../../theme/dimensions';
import colors from '../../tokens/colors';
import typography from '../../theme/typography';

export default createTheme('rcx-check-box', {
  borderWidth: dimensions.borderWidth,
  borderRadius: dimensions.borderRadius,
  size: typography.paragraph.lineHeight,

  label: createTheme('rcx-check-box-label', {
    color: typography.colors.default,
    fontFamily: typography.paragraph.fontFamily,
    fontSize: typography.paragraph.fontSize,
    fontWeight: typography.paragraph.fontWeight,
    lineHeight: typography.paragraph.lineHeight,
  }),

  color: colors.white,
  borderColor: colors.dark400,
  hoverBorderColor: colors.dark500,
  activeBorderColor: colors.dark600,
  focusBorderColor: colors.blue500,
  focusShadowColor: colors.blue100,
  disabledBackgroundColor: colors.dark200,
  disabledBorderColor: colors.dark200,
  checkedBackgroundColor: colors.blue500,
  checkedHoverBackgroundColor: colors.blue600,
  checkedActiveBackgroundColor: colors.blue700,
  checkedFocusBackgroundColor: colors.blue500,
  checkedFocusBorderColor: colors.blue700,
  checkedFocusShadowColor: colors.blue100,
  checkedDisabledBackgroundColor: colors.blue200,
});
