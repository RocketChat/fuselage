import { createTheme } from '../helpers/createTheme';
import colors from '../tokens/colors';
import typography from '../tokens/typography';


export default createTheme('rcx-typography', {
  variants: {
    headline: createTheme('rcx-typography-headline', typography.headline),
    subtitle: createTheme('rcx-typography-subtitle', typography.subtitle),
    boldSubtitle: createTheme('rcx-typography-bold-subtitle', typography.boldSubtitle),
    paragraph: createTheme('rcx-typography-paragraph', typography.paragraph),
    boldParagraph: createTheme('rcx-typography-bold-paragraph', typography.boldParagraph),
    caption: createTheme('rcx-typography-caption', typography.caption),
    boldCaption: createTheme('rcx-typography-bold-caption', typography.boldCaption),
    micro: createTheme('rcx-typography-micro', typography.micro),
  },

  colors: createTheme('rcx-typography-colors', {
    default: colors.dark800,
    info: colors.dark700,
    hint: colors.dark600,
    disabled: colors.dark400,
    primary: colors.blue500,
    success: colors.green500,
    danger: colors.red500,
    warning: colors.yellow700,
    alternative: colors.white,
  }),
});
