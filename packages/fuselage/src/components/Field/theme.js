import { createTheme } from '../../helpers';
import spaces from '../../styles/spaces';
import textColors from '../../styles/textColors';
import typography from '../../styles/typography';

export const {
  helpTextSpacing,
  helpTextColor,
  helpTextFontFamily,
  helpTextFontSize,
  helpTextFontWeight,
  helpTextLetterSpacing,
  helpTextLineHeight,
} = createTheme('field', {
  helpTextSpacing: spaces[2],
  helpTextColor: textColors.hint,
  helpTextFontFamily: typography.p1.fontFamily,
  helpTextFontSize: typography.p1.fontSize,
  helpTextFontWeight: typography.p1.fontWeight,
  helpTextLetterSpacing: typography.p1.letterSpacing,
  helpTextLineHeight: typography.p1.lineHeight,
});
