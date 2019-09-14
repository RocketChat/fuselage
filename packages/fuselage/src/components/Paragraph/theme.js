import { theme } from '../../helpers';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export const spacing = theme('headline-spacing', spaces[5]);

export const color = theme('headline-color', textColors.default);

export const textStyle = {
  fontFamily: theme('headline-font-family', textStyles.p1.fontFamily),
  fontSize: theme('headline-font-size', textStyles.p1.fontSize),
  fontWeight: theme('headline-font-weight', textStyles.p1.fontWeight),
  letterSpacing: theme('headline-letter-spacing', textStyles.p1.letterSpacing),
  lineHeight: theme('headline-line-height', textStyles.p1.lineHeight),
};
