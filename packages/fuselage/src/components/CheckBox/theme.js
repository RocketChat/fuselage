import { createTheme, createThemeVariant, toREM } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const {
  size,
  border,
  icon,
} = createTheme('check-box', {
  size: textStyles.p1.lineHeight,
  border: borders.default,
  icon: {
    smoothness: toREM(1),
    thickness: toREM(2),
    size: 0.6,
  },
});

export const uncheckedColors = createThemeVariant('check-box', 'unchecked', buttonColors.empty);

export const checkedColors = createThemeVariant('check-box', 'checked', buttonColors.primary);

export const indeterminateColors = createThemeVariant('check-box', 'indeterminate', buttonColors.primary);
