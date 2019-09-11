import { toREM, asThemeVariable } from '../helpers';
import spaces from '../tokens/spaces';


export default spaces.map((space, i) => asThemeVariable('spaces', i.toString(10), toREM(space)));
