import borders from '../../styles/borders';
import textStyles from '../../styles/textStyles';
import colors from '../../tokens/colors';
import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';


export default {
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

  errorColor: colors.red500,
  errorIconColor: colors.red500,
  errorBorderColor: colors.red500,
  errorFocusShadowColor: colors.red100,
};

export const {
  border,
  paddingX,
  paddingY,
  textStyle,
  iconMarginX,
  iconMarginY,
} = {
  ...createTheme('input', {
    border: borders.default,
  }),
  paddingX: spaces[5],
  paddingY: spaces[4],
  textStyle: createTheme('input', textStyles.p1),
  iconMarginX: spaces[5],
  iconMarginY: spaces[4],
};
