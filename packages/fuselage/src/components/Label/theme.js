import { varTheme } from '../../helpers/varTheme';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import typography from '../../styles/typography';


export const spacing = varTheme('Label', 'spacing', spaces[3]);
export const fontFamily = varTheme('Label', 'fontFamily', typography.p1.fontFamily);
export const fontSize = varTheme('Label', 'fontSize', typography.p1.fontSize);
export const fontWeight = varTheme('Label', 'fontWeight', typography.p1.fontWeight);
export const letterSpacing = varTheme('Label', 'letterSpacing', typography.p1.letterSpacing);
export const lineHeight = varTheme('Label', 'lineHeight', typography.p1.lineHeight);
export const color = varTheme('Label', 'color', textColors.default);
export const requiredColor = varTheme('Label', 'requiredColor', textColors.danger);
export const errorColor = varTheme('Label', 'errorColor', textColors.danger);
