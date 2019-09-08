import theme from '../../styles/theme';
import { colors } from '../../tokens';

export default {
  size: theme.typography.p1.lineHeight,
  borderWidth: theme.borders.default.width,
  borderRadius: theme.borders.default.radius,
  labelColor: colors.dark800,
  labelFontFamily: theme.typography.p1.fontFamily,
  labelFontSize: '0.875rem',
  labelFontWeight: '400',
  labelLineHeight: theme.typography.p1.lineHeight,
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
};
