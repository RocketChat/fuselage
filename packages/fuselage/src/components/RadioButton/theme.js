import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const {
  size,
  border,
  icon,
} = {
  size: textStyles.p1.lineHeight,
  border: {
    ...borders.default,
    radius: '50%',
  },
  icon: {
    size: 0.3,
  },
};

export const uncheckedColors = buttonColors.empty;

export const checkedColors = buttonColors.primary;
