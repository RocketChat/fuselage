import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type ThrobberProps = Omit<ComponentProps<typeof Box>, 'disabled' | 'size'> & {
  circleCount?: number;
  disabled?: boolean;
  inheritColor?: boolean;
  size?: ComponentProps<typeof Box>['width'];
};
export const Throbber: ForwardRefExoticComponent<ThrobberProps>;
