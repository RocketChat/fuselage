import { createTheme, createThemeVariant } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const {
  size,
  border,
  icon,
} = createTheme('radio-button', {
  size: textStyles.p1.lineHeight,
  border: {
    ...borders.default,
    radius: '50%',
  },
  icon: {
    size: 0.3,
  },
});

export const uncheckedColors = createThemeVariant('radio-button', 'unchecked', buttonColors.empty);

export const checkedColors = createThemeVariant('radio-button', 'checked', buttonColors.primary);
