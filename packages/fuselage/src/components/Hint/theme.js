import { createTheme } from '../../helpers';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export const {
  color,
  textStyle,
} = {
  ...createTheme('hint', {
    color: textColors.hint,
  }),
  textStyle: createTheme('hint', textStyles.p1),
};
