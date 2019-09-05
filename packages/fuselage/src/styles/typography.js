import { toCustomProperties } from '../helpers/toCustomProperties';
import typography from '../tokens/typography';
import { toREM } from '../helpers/toREM';


const mapTypographicVariant = ({
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
}) => ({
  fontFamily: fontFamily.map((x) => (x.indexOf(' ') < 0 ? x : `'${ x }'`)).join(', '),
  fontSize: toREM(fontSize),
  fontWeight,
  letterSpacing: toREM(letterSpacing),
  lineHeight: toREM(lineHeight),
});

export default toCustomProperties('typography', Object.entries(typography).reduce((obj, [name, variant]) => ({
  ...obj,
  [name]: mapTypographicVariant(variant),
}), {}));
