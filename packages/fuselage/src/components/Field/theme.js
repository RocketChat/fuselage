import { createTheme } from '../../helpers/createTheme';
import colors from '../../tokens/colors';
import typography from '../../theme/typography';


export default createTheme('rcx-field', {
  label: createTheme('rcx-field-label', {
    margin: '0 0 0.5rem 0',
    color: colors.dark800,
    requiredColor: colors.red500,
    errorColor: colors.red500,
    fontFamily: typography.boldParagraph.fontFamily,
    fontSize: typography.boldParagraph.fontSize,
    fontWeight: typography.boldParagraph.fontWeight,
    lineHeight: typography.boldParagraph.lineHeight,
  }),
  help: createTheme('rcx-field-help', {
    margin: '0.25rem 0 0 0',
    color: colors.dark600,
    fontFamily: typography.paragraph.fontFamily,
    fontSize: typography.paragraph.fontSize,
    fontWeight: typography.paragraph.fontWeight,
    lineHeight: typography.paragraph.lineHeight,
  }),
});
