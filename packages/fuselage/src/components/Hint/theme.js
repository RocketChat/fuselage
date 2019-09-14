import { theme } from '../../helpers';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export const color = theme('hint-color', textColors.hint);

export const textStyle = {
  fontFamily: theme('hint-font-family', textStyles.p1.fontFamily),
  fontSize: theme('hint-font-size', textStyles.p1.fontSize),
  fontWeight: theme('hint-font-weight', textStyles.p1.fontWeight),
  letterSpacing: theme('hint-letter-spacing', textStyles.p1.letterSpacing),
  lineHeight: theme('hint-line-height', textStyles.p1.lineHeight),
};
