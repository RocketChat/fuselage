import { useEffectEvent, useDebouncedState } from '@rocket.chat/fuselage-hooks';

import AnimatedVisibility from '../AnimatedVisibility';

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
  const hide = useEffectEvent(() => setVisible(AnimatedVisibility.HIDDEN));
  const show = useEffectEvent(() => setVisible(AnimatedVisibility.VISIBLE));

  return [visible, hide, show];
};
