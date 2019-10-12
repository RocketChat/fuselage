import borders from '@rocket.chat/fuselage-tokens/borders';

import { theme, toRem } from '../helpers';

export default {
  width: {
    0: theme('borders-width-0', toRem(borders.widths[0])),
    1: theme('borders-width-1', toRem(borders.widths[1])),
  },

  radius: {
    0: theme('borders-radius-0', toRem(borders.radii[0])),
    1: theme('borders-radius-1', toRem(borders.radii[1])),
    full: '9999px',
  },
};
