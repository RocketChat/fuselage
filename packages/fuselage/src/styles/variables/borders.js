import borders from '@rocket.chat/fuselage-tokens/borders';

import { theme, toRem } from '../utilities/common';

export default {
  width: {
    x2: theme('borders-width-x2', toRem(borders.widths[1])),
  },

  radius: {
    x2: theme('borders-radius-x2', toRem(borders.radii[1])),
    full: '9999px',
  },
};
