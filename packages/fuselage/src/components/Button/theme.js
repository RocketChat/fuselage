import { createThemeVariant } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import spaces from '../../styles/spaces';
import textStyles from '../../styles/textStyles';
import colors from '../../tokens/colors';


export const mediumSizeParameters = {
  ...createThemeVariant('button', 'medium-size', {
    border: borders.default,
    paddingX: spaces[5],
    iconSizeRatio: 0.8,
  }),
  textStyle: createThemeVariant('button', 'medium-size', textStyles.p2),
};

export const smallSizeParameters = {
  ...createThemeVariant('button', 'small-size', {
    border: borders.default,
    paddingX: spaces[4],
    iconSizeRatio: 0.75,
  }),
  textStyle: createThemeVariant('button', 'small-size', textStyles.c2),
};

export const basicColors = createThemeVariant('button', 'basic', buttonColors.secondary);

export const basicDangerColors = createThemeVariant('button', 'basic-danger', {
  ...buttonColors.secondary,
  color: colors.red500,
  disabledColor: colors.red100,
});

export const primaryColors = createThemeVariant('button', 'primary', buttonColors.primary);

export const primaryDangerColors = createThemeVariant('button', 'primary-danger', buttonColors.danger);

export const ghostColors = createThemeVariant('button', 'ghost', {
  ...buttonColors.secondary,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
});

export const ghostDangerColors = createThemeVariant('button', 'ghost-danger', {
  ...buttonColors.secondary,
  color: colors.red500,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  disabledColor: colors.red100,
});
