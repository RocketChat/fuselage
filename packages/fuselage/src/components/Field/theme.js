import { varTheme } from '../../helpers/varTheme';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import typography from '../../styles/typography';


export const helpTextSpacing = varTheme('Field', 'helpTextSpacing', spaces[2]);
export const helpTextColor = varTheme('Field', 'helpTextColor', textColors.hint);
export const helpTextFontFamily = varTheme('Field', 'helpTextFontFamily', typography.p1.fontFamily);
export const helpTextFontSize = varTheme('Field', 'helpTextFontSize', typography.p1.fontSize);
export const helpTextFontWeight = varTheme('Field', 'helpTextFontWeight', typography.p1.fontWeight);
export const helpTextLetterSpacing = varTheme('Field', 'helpTextLetterSpacing', typography.p1.letterSpacing);
export const helpTextLineHeight = varTheme('Field', 'helpTextLineHeight', typography.p1.lineHeight);
