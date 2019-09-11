import borders from '../tokens/borders';
import { createTheme, toREM } from '../helpers';


export default createTheme('borders', Object.entries(borders).reduce((obj, [name, { width, radius }]) => ({
  ...obj,
  [name]: {
    width: toREM(width),
    radius: toREM(radius),
  },
}), {}));
