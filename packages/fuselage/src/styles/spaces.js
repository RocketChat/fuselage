import { toREM, themeVar } from '../helpers';
import spaces from '../tokens/spaces';


export default spaces.map((space, i) => themeVar('spaces', i.toString(10), toREM(space)));
