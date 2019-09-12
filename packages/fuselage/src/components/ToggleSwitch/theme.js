import borders from '../../styles/borders';
import buttonColors from '../../styles/buttonColors';
import textStyles from '../../styles/textStyles';


export const {
  border,
  size,
} = {
  border: {
    ...borders.default,
    radius: '9999px',
  },
  size: textStyles.p1.lineHeight,
};

export const onColors = buttonColors.primary;

export const offColors = buttonColors.off;
