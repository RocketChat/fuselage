import typography from '../tokens/typography';
import { createTheme, toREM } from '../helpers';


export default createTheme('text-styles', Object.entries(typography).reduce((obj, [name, {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
}]) => ({
  ...obj,
  [name]: {
    fontFamily: fontFamily.map((x) => (x.indexOf(' ') < 0 ? x : `'${ x }'`)).join(', '),
    fontSize: toREM(fontSize),
    fontWeight,
    letterSpacing: toREM(letterSpacing),
    lineHeight: toREM(lineHeight),
  },
}), {}));
