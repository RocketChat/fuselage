import { varTheme } from '../helpers/varTheme';
import colors from '../tokens/colors';

export default {
  default: varTheme('colors', 'textDefault', colors.dark800),
  info: varTheme('colors', 'textInfo ', colors.dark700),
  hint: varTheme('colors', 'textHint ', colors.dark600),
  disabled: varTheme('colors', 'textDisabled ', colors.dark400),
  alternative: varTheme('colors', 'textAlternative ', colors.white),
  primary: varTheme('colors', 'textPrimary ', colors.blue500),
  success: varTheme('colors', 'textSuccess ', colors.green500),
  danger: varTheme('colors', 'textDanger ', colors.red500),
  warning: varTheme('colors', 'textWarning ', colors.yellow700),
};
