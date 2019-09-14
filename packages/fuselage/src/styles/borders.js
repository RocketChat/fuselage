import { theme } from '../helpers';
import borders from '../tokens/borders';


export default {
  default: {
    width: theme('borders-default-width', borders.default.width, { rem: true }),
    radius: theme('borders-default-radius', borders.default.radius, { rem: true }),
  },
};
