import { theme } from '../../helpers';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import textStyles from '../../styles/textStyles';


export const spacing = theme('label-spacing', spaces[3]);

export const textStyle = {
  fontFamily: theme('label-font-family', textStyles.p1.fontFamily),
  fontSize: theme('label-font-size', textStyles.p1.fontSize),
  fontWeight: theme('label-font-weight', textStyles.p1.fontWeight),
  letterSpacing: theme('label-letter-spacing', textStyles.p1.letterSpacing),
  lineHeight: theme('label-line-height', textStyles.p1.lineHeight),
};

export const color = theme('label-color', textColors.default);

export const errorColor = theme('error-color', textColors.danger);

export const requiredMarkColor = theme('label-required-mark-color', textColors.danger);
