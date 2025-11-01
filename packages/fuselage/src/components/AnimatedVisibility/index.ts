import type { VisibilityType } from './AnimatedVisibility.js';
import AnimatedVisibility from './AnimatedVisibility.js';

export default Object.assign(AnimatedVisibility, {
  HIDDEN: 'hidden' as VisibilityType,
  VISIBLE: 'visible' as VisibilityType,
  HIDING: 'hiding' as VisibilityType,
  UNHIDING: 'unhiding' as VisibilityType,
});
