import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';
import typography from '../../styles/typography';
import textColors from '../../styles/textColors';


export default createTheme('paragraph', {
  spacing: spaces[5],
  ...typography.p1,
  color: textColors.default,
});
