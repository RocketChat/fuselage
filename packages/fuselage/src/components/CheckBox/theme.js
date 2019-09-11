import { createTheme, createThemeVariant, toREM } from '../../helpers';
import actions from '../../styles/actions';
import borders from '../../styles/borders';
import typography from '../../styles/typography';


export const {
  size,
  border,
  icon,
} = createTheme('check-box', {
  size: typography.p1.lineHeight,
  border: borders.default,
  icon: {
    smoothness: toREM(1),
    thickness: toREM(2),
    size: 0.6,
  },
});

export const uncheckedColors = createThemeVariant('check-box', 'unchecked', actions.buttons.unchecked);

export const checkedColors = createThemeVariant('check-box', 'checked', actions.buttons.primary);

export const indeterminateColors = createThemeVariant('check-box', 'indeterminate', actions.buttons.primary);
