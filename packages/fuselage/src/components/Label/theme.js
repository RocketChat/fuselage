import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export const {
  spacing,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  color,
  requiredColor,
  errorColor,
} = createTheme('label', {
  spacing: spaces[3],
  ...textStyles.p1,
  color: textColors.default,
  requiredColor: textColors.danger,
  errorColor: textColors.danger,
});
