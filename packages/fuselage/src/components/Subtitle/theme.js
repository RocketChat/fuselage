import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';
import typography from '../../styles/typography';
import textColors from '../../styles/textColors';


export default createTheme('subtitle', {
  spacing: spaces[5],
  ...typography.s1,
  color: textColors.default,
});
