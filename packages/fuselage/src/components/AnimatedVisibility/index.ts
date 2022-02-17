import type { VisibilityType } from './AnimatedVisibility';
import AnimatedVisibility from './AnimatedVisibility';

export default Object.assign(AnimatedVisibility, {
  HIDDEN: 'hidden' as VisibilityType,
  VISIBLE: 'visible' as VisibilityType,
  HIDING: 'hiding' as VisibilityType,
  UNHIDING: 'unhiding' as VisibilityType,
});
