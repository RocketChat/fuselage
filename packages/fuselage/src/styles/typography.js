import typography from '../tokens/typography';
import { createTheme, toREM } from '../helpers';


export default createTheme('typography', Object.entries(typography).reduce((obj, [name, {
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
}]) => ({
  ...obj,
  [name]: {
    fontFamily,
    fontSize: toREM(fontSize),
    fontWeight,
    letterSpacing: toREM(letterSpacing),
    lineHeight: toREM(lineHeight),
  },
}), {}));
