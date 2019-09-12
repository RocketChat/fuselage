import borders from '../tokens/borders';
import { toREM } from '../helpers';


export default {
  default: {
    width: toREM(borders.default.width),
    radius: toREM(borders.default.radius),
  },
};
