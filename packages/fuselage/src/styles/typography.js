import typography from '../tokens/typography';
import { themeVar, toREM } from '../helpers';


export default Object.entries(typography).reduce((obj, [name, {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
}]) => ({
  ...obj,
  [name]: {
    fontFamily: themeVar('typography', `${ name }-font-family`, fontFamily),
    fontSize: themeVar('typography', `${ name }-font-size`, toREM(fontSize)),
    fontWeight: themeVar('typography', `${ name }-font-weight`, fontWeight),
    letterSpacing: themeVar('typography', `${ name }-letter-spacing`, letterSpacing),
    lineHeight: themeVar('typography', `${ name }-line-height`, lineHeight),
  },
}), {});
