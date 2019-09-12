import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export default createTheme('subtitle', {
  spacing: spaces[5],
  ...textStyles.s1,
  color: textColors.default,
});
