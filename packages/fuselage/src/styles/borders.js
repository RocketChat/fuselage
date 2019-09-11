import borders from '../tokens/borders';
import { toREM, themeVar } from '../helpers';


export default Object.entries(borders).reduce((obj, [name, { width, radius }]) => ({
  ...obj,
  [name]: {
    width: themeVar('borders', `${ name }-width`, toREM(width)),
    radius: themeVar('borders', `${ name }-radius`, toREM(radius)),
  },
}), {});
