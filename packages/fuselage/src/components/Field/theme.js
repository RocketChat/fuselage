import { createTheme } from '../../helpers/createTheme';
import colors from '../../tokens/colors';
import typography from '../../theme/typography';


export default createTheme('rcx-field', {
  label: createTheme('rcx-field-label', {
    margin: '0 0 0.5rem 0',
    color: colors.dark800,
    requiredColor: colors.red500,
    errorColor: colors.red500,
    fontFamily: typography.variants.boldParagraph.fontFamily,
    fontSize: typography.variants.boldParagraph.fontSize,
    fontWeight: typography.variants.boldParagraph.fontWeight,
    letterSpacing: typography.variants.boldParagraph.letterSpacing,
    lineHeight: typography.variants.boldParagraph.lineHeight,
  }),
  help: createTheme('rcx-field-help', {
    margin: '0.25rem 0 0 0',
    color: colors.dark600,
    fontFamily: typography.variants.paragraph.fontFamily,
    fontSize: typography.variants.paragraph.fontSize,
    fontWeight: typography.variants.paragraph.fontWeight,
    letterSpacing: typography.variants.paragraph.letterSpacing,
    lineHeight: typography.variants.paragraph.lineHeight,
  }),
});
