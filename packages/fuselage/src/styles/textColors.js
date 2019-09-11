import { themeVar } from '../helpers';
import colors from '../tokens/colors';

export default {
  default: themeVar('colors', 'textDefault', colors.dark800),
  info: themeVar('colors', 'textInfo ', colors.dark700),
  hint: themeVar('colors', 'textHint ', colors.dark600),
  disabled: themeVar('colors', 'textDisabled ', colors.dark400),
  alternative: themeVar('colors', 'textAlternative ', colors.white),
  primary: themeVar('colors', 'textPrimary ', colors.blue500),
  success: themeVar('colors', 'textSuccess ', colors.green500),
  danger: themeVar('colors', 'textDanger ', colors.red500),
  warning: themeVar('colors', 'textWarning ', colors.yellow700),
};
