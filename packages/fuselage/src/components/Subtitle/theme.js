import { theme } from '../../helpers';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export const spacing = theme('subtitle-spacing', spaces[5]);

export const color = theme('subtitle-color', textColors.default);

export const textStyle = {
  fontFamily: theme('subtitle-font-family', textStyles.s1.fontFamily),
  fontSize: theme('subtitle-font-size', textStyles.s1.fontSize),
  fontWeight: theme('subtitle-font-weight', textStyles.s1.fontWeight),
  letterSpacing: theme('subtitle-letter-spacing', textStyles.s1.letterSpacing),
  lineHeight: theme('subtitle-line-height', textStyles.s1.lineHeight),
};
