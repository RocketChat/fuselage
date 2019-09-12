import { toREM } from '../../helpers';
import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const {
  size,
  border,
  icon,
} = {
  size: textStyles.p1.lineHeight,
  border: borders.default,
  icon: {
    smoothness: toREM(1),
    thickness: toREM(2),
    size: 0.6,
  },
};

export const uncheckedColors = buttonColors.empty;

export const checkedColors = buttonColors.primary;

export const indeterminateColors = buttonColors.primary;
