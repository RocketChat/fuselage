import { createTheme, createThemeVariant } from '../../helpers';
import actions from '../../styles/actions';
import borders from '../../styles/borders';
import typography from '../../styles/typography';


export const {
  size,
  border,
  icon,
} = createTheme('radio-button', {
  size: typography.p1.lineHeight,
  border: {
    ...borders.default,
    radius: '50%',
  },
  icon: {
    size: 0.3,
  },
});

export const uncheckedColors = createThemeVariant('radio-button', 'unchecked', actions.buttons.unchecked);

export const checkedColors = createThemeVariant('radio-button', 'checked', actions.buttons.primary);
