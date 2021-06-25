import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type IconProps = Omit<ComponentProps<typeof Box>, 'size'> & {
  size?: ComponentProps<typeof Box>['width'];
};
export const Icon: ForwardRefExoticComponent<IconProps>;
