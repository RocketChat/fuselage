import {
  useMutableCallback,
  useDebouncedState,
} from '@rocket.chat/fuselage-hooks';

import AnimatedVisibility from '../Box/AnimatedVisibility';

export const useVisible = (
  initialVisibility:
    | typeof AnimatedVisibility.HIDDEN
    | typeof AnimatedVisibility.HIDING
    | typeof AnimatedVisibility.VISIBLE
    | typeof AnimatedVisibility.UNHIDING = AnimatedVisibility.HIDDEN
): [
  visible:
    | typeof AnimatedVisibility.HIDDEN
    | typeof AnimatedVisibility.HIDING
    | typeof AnimatedVisibility.VISIBLE
    | typeof AnimatedVisibility.UNHIDING,
  hide: () => void,
  show: () => void
] => {
  const [visible, setVisible] = useDebouncedState(initialVisibility, 10);
  const hide = useMutableCallback(() => setVisible(AnimatedVisibility.HIDDEN));
  const show = useMutableCallback(() => setVisible(AnimatedVisibility.VISIBLE));

  return [visible, hide, show];
};
