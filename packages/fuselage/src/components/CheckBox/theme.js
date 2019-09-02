import { createTheme } from '../../helpers/createTheme';
import dimensions from '../../theme/dimensions';
import colors from '../../tokens/colors';
import typography from '../../theme/typography';

export default createTheme('rcx-check-box', {
  size: dimensions.inputLineHeight,
  borderWidth: dimensions.borderWidth,
  borderRadius: dimensions.borderRadius,
  labelColor: colors.dark800,
  labelFontFamily: typography.baseFont,
  labelFontSize: '0.875rem',
  labelFontWeight: '400',
  labelLineHeight: dimensions.inputLineHeight,
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
