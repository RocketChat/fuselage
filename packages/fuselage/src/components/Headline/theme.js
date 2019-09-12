import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';
import typography from '../../styles/typography';
import textColors from '../../styles/textColors';


export default createTheme('headline', {
  spacing: spaces[5],
  ...typography.h1,
  color: textColors.default,
});
