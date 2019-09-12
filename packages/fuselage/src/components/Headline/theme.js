import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';
import typography from '../../styles/textStyles';
import textStyles from '../../styles/textColors';


export default createTheme('headline', {
  spacing: spaces[5],
  ...typography.h1,
  color: textStyles.default,
});
