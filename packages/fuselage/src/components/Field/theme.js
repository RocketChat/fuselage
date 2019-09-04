import { createTheme } from '../../helpers/createTheme';
import colors from '../../tokens/colors';
import theme from '../../styles/theme';


export default createTheme('rcx-field', {
  labelMargin: '0 0 0.5rem 0',
  labelColor: colors.dark800,
  labelFontFamily: theme.typography.p1.fontFamily,
  labelFontSize: '0.875rem',
  labelFontWeight: 'normal',
  labelLineHeight: '1.25rem',
  labelRequiredColor: colors.red500,
  labelErrorColor: colors.red500,
  helpMargin: '0.25rem 0 0 0',
  helpColor: colors.dark600,
  helpFontSize: '0.875rem',
  helpFontFamily: theme.typography.p1.fontFamily,
  helpFontWeight: 'normal',
  helpLineHeight: '1.25rem',
});
