import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export default createTheme('paragraph', {
  spacing: spaces[5],
  ...textStyles.p1,
  color: textColors.default,
});
