import { createThemeVariant } from '../../helpers';
import actions from '../../styles/actions';
import borders from '../../styles/borders';
import spaces from '../../styles/spaces';
import textStyles from '../../styles/textStyles';
import colors from '../../tokens/colors';


export const mediumSizeParameters = {
  ...createThemeVariant('button', 'medium-size', {
    border: borders.default,
    paddingX: spaces[5],
    iconSizeRatio: 0.8,
  }),
  typographicVariant: createThemeVariant('button', 'medium-size', textStyles.p2),
};

export const smallSizeParameters = {
  ...createThemeVariant('button', 'small-size', {
    border: borders.default,
    paddingX: spaces[4],
    iconSizeRatio: 0.75,
  }),
  typographicVariant: createThemeVariant('button', 'small-size', textStyles.c2),
};

export const basicColors = createThemeVariant('button', 'basic', actions.buttons.secondary);

export const basicDangerColors = createThemeVariant('button', 'basic-danger', {
  ...actions.buttons.secondary,
  color: colors.red500,
  disabledColor: colors.red100,
});

export const primaryColors = createThemeVariant('button', 'primary', actions.buttons.primary);

export const primaryDangerColors = createThemeVariant('button', 'primary-danger', actions.buttons.danger);

export const ghostColors = createThemeVariant('button', 'ghost', {
  ...actions.buttons.secondary,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
});

export const ghostDangerColors = createThemeVariant('button', 'ghost-danger', {
  ...actions.buttons.secondary,
  color: colors.red500,
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  disabledColor: colors.red100,
});
