import { createTheme, createThemeVariant } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const {
  border,
  size,
} = createTheme('toggle-switch', {
  border: {
    ...borders.default,
    radius: '9999px',
  },
  size: textStyles.p1.lineHeight,
});

export const onColors = createThemeVariant('toggle-switch', 'on', buttonColors.primary);

export const offColors = createThemeVariant('toggle-switch', 'off', buttonColors.off);
