import AnimatedVisibility, { VisibilityType } from './AnimatedVisibility';

export default Object.assign(AnimatedVisibility, {
  HIDDEN: 'hidden' as VisibilityType,
  VISIBLE: 'visible' as VisibilityType,
  HIDING: 'hiding' as VisibilityType,
  UNHIDING: 'unhiding' as VisibilityType,
});
