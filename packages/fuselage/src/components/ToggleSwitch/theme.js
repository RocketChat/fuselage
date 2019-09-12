import { createTheme, createThemeVariant } from '../../helpers';
import actions from '../../styles/actions';
import borders from '../../styles/borders';
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

export const onColors = createThemeVariant('toggle-switch', 'on', actions.buttons.primary);

export const offColors = createThemeVariant('toggle-switch', 'off', actions.buttons.toggleOff);
