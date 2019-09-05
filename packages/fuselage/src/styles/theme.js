import { toREM } from '../helpers/toREM';
import borders from '../tokens/borders';
import transitions from '../tokens/transitions';
import typography from '../tokens/typography';


const mapBorder = ({
  width,
  radius,
}) => ({
  width: toREM(width),
  radius: toREM(radius),
});

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

export default {
  borders: Object.entries(borders).reduce((obj, [name, border]) => ({
    ...obj,
    [name]: mapBorder(border),
  }), {}),
  transitions,
  typography: Object.entries(typography).reduce((obj, [name, variant]) => ({
    ...obj,
    [name]: mapTypographicVariant(variant),
  }), {}),
};
