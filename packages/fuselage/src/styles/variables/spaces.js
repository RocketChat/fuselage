import spaces from '@rocket.chat/fuselage-tokens/spaces';

import { theme, toRem } from '../helpers';

export default {
  x2: theme('spaces-x2', toRem(spaces[1])),
  x4: theme('spaces-x4', toRem(spaces[2])),
  x8: theme('spaces-x8', toRem(spaces[3])),
  x12: theme('spaces-x12', toRem(spaces[4])),
  x16: theme('spaces-x16', toRem(spaces[5])),
  x24: theme('spaces-x24', toRem(spaces[6])),
  x32: theme('spaces-x32', toRem(spaces[7])),
  x40: theme('spaces-x40', toRem(spaces[8])),
};
