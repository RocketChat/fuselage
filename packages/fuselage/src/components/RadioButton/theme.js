import { createTheme } from '../../helpers/createTheme';
import colors from '../../tokens/colors';
import dimensions from '../../theme/dimensions';
import typography from '../../theme/typography';

export default createTheme('rcx-radio-button', {
  size: typography.p1.lineHeight,
  borderWidth: dimensions.borders.default.width,
  borderRadius: '50%',
  labelColor: colors.dark800,
  labelFontFamily: typography.p1.fontFamily,
  labelFontSize: '0.875rem',
  labelFontWeight: '400',
  labelLineHeight: typography.p1.lineHeight,
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
