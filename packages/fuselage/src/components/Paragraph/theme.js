import { theme } from '../../helpers';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export const spacing = theme('paragraph-spacing', spaces[5]);

export const color = theme('paragraph-color', textColors.default);

export const textStyle = {
  fontFamily: theme('paragraph-font-family', textStyles.p1.fontFamily),
  fontSize: theme('paragraph-font-size', textStyles.p1.fontSize),
  fontWeight: theme('paragraph-font-weight', textStyles.p1.fontWeight),
  letterSpacing: theme('paragraph-letter-spacing', textStyles.p1.letterSpacing),
  lineHeight: theme('paragraph-line-height', textStyles.p1.lineHeight),
};
