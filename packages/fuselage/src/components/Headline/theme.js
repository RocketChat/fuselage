import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';
import { theme } from '../../helpers';


export const spacing = theme('headline-spacing', spaces[5]);

export const color = theme('headline-color', textColors.default);

export const textStyle = {
  fontFamily: theme('headline-font-family', textStyles.h1.fontFamily),
  fontSize: theme('headline-font-size', textStyles.h1.fontSize),
  fontWeight: theme('headline-font-weight', textStyles.h1.fontWeight),
  letterSpacing: theme('headline-letter-spacing', textStyles.h1.letterSpacing),
  lineHeight: theme('headline-line-height', textStyles.h1.lineHeight),
};
