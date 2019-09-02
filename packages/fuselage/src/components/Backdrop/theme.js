import color from 'color';

import { createTheme } from '../../helpers/createTheme';
import colors from '../../tokens/colors';

export default createTheme('rcx-backdrop', {
  color: color(colors.blue900).alpha(0.5).toString(),
});
