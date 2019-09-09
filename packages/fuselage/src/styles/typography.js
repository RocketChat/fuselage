import typography from '../tokens/typography';
import { varTheme } from '../helpers/varTheme';
import { toREM } from '../helpers/toREM';


export default Object.entries(typography).reduce((obj, [name, {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
}]) => ({
  ...obj,
  [name]: {
    fontFamily: varTheme('typography', `${ name }-font-family`, fontFamily),
    fontSize: varTheme('typography', `${ name }-font-size`, toREM(fontSize)),
    fontWeight: varTheme('typography', `${ name }-font-weight`, fontWeight),
    letterSpacing: varTheme('typography', `${ name }-letter-spacing`, letterSpacing),
    lineHeight: varTheme('typography', `${ name }-line-height`, lineHeight),
  },
}), {});
