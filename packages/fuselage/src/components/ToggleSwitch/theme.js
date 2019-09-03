import { createTheme } from '../../helpers/createTheme';
import dimensions from '../../theme/dimensions';
import typography from '../../theme/typography';
import colors from '../../tokens/colors';


export default createTheme('rcx-toggle-switch', {
  trackWidth: `calc(2 * ${ typography.variants.paragraph.lineHeight })`,
  trackHeight: typography.variants.paragraph.lineHeight,
  thumbSize: `calc(${ typography.variants.paragraph.lineHeight } - 2 * ${ dimensions.borderWidth })`,
  borderWidth: dimensions.borderWidth,
  borderRadius: '9999px',
  color: colors.white,
  backgroundColor: colors.dark400,
  hoverBackgroundColor: colors.dark500,
  activeBackgroundColor: colors.dark600,
  focusBackgroundColor: colors.dark500,
  focusBorderColor: colors.blue500,
  focusShadowColor: colors.blue100,
  disabledColor: colors.dark200,
  disabledBackgroundColor: colors.dark400,
  checkedBackgroundColor: colors.blue500,
  checkedHoverBackgroundColor: colors.blue600,
  checkedActiveBackgroundColor: colors.blue700,
  checkedFocusBackgroundColor: colors.blue500,
  checkedFocusBorderColor: colors.blue700,
  checkedFocusShadowColor: colors.blue100,
  checkedDisabledColor: colors.white,
  checkedDisabledBackgroundColor: colors.blue200,
});
