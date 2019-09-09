import borders from '../tokens/borders';
import { toREM } from '../helpers/toREM';
import { varTheme } from '../helpers/varTheme';

export default Object.entries(borders).reduce((obj, [name, { width, radius }]) => ({
  ...obj,
  [name]: {
    width: varTheme('borders', `${ name }-width`, toREM(width)),
    radius: varTheme('borders', `${ name }-radius`, toREM(radius)),
  },
}), {});
