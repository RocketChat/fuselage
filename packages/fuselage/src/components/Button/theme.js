import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import spaces from '../../styles/spaces';
import textStyles from '../../styles/textStyles';
import colors from '../../tokens/colors';


export const mediumSizeParameters = {
  border: borders.default,
  paddingX: spaces[5],
  iconSizeRatio: 0.8,
  textStyle: textStyles.p2,
};

export const smallSizeParameters = {
  border: borders.default,
  paddingX: spaces[4],
  iconSizeRatio: 0.75,
  textStyle: textStyles.c2,
};

export const basicColors = buttonColors.secondary;

export const basicDangerColors = {
  ...buttonColors.secondary,
  color: colors.red500,
  disabledColor: colors.red100,
};

export const primaryColors = buttonColors.primary;

export const primaryDangerColors = buttonColors.danger;

export const ghostColors = {
  ...buttonColors.secondary,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
};

export const ghostDangerColors = {
  ...buttonColors.secondary,
  color: colors.red500,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  disabledColor: colors.red100,
};
