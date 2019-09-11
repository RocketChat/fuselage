import { createTheme } from '../../helpers';
import textColors from '../../styles/textColors';
import typography from '../../styles/typography';


export const {
  color,
  typographicVariant,
} = {
  ...createTheme('hint', {
    color: textColors.hint,
  }),
  typographicVariant: createTheme('hint', typography.p1),
};
