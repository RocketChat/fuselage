import { toREM } from '../helpers/toREM';
import { varTheme } from '../helpers/varTheme';
import spaces from '../tokens/spaces';


export default spaces.map((space, i) => varTheme('spaces', i.toString(10), toREM(space)));
