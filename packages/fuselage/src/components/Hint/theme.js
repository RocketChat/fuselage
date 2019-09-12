import { createTheme } from '../../helpers';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export const {
  color,
  typographicVariant,
} = {
  ...createTheme('hint', {
    color: textColors.hint,
  }),
  typographicVariant: createTheme('hint', textStyles.p1),
};
