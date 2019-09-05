import { toCustomProperties } from '../helpers/toCustomProperties';
import { toREM } from '../helpers/toREM';
import borders from '../tokens/borders';


const mapBorder = ({
  width,
  radius,
}) => ({
  width: toREM(width),
  radius: toREM(radius),
});

export default toCustomProperties('borders', Object.entries(borders).reduce((obj, [name, border]) => ({
  ...obj,
  [name]: mapBorder(border),
}), {}));
