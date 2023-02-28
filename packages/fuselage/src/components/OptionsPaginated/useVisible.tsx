import {
  useMutableCallback,
  useDebouncedState,
} from '@rocket.chat/fuselage-hooks';

import AnimatedVisibility from '../AnimatedVisibility';
import type { VisibilityType } from '../AnimatedVisibility/AnimatedVisibility';

export function useVisible(initialVisibility = AnimatedVisibility.HIDDEN) {
  const [visible, setVisible] = useDebouncedState<VisibilityType>(
    initialVisibility,
    10
  );
  const hide = useMutableCallback(() => setVisible(AnimatedVisibility.HIDDEN));
  const show = useMutableCallback(() => setVisible(AnimatedVisibility.VISIBLE));

  return [visible, hide, show];
}
