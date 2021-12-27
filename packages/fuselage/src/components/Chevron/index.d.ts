import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type ChevronProps = Omit<ComponentProps<typeof Box>, 'size'> & {
  size?: ComponentProps<typeof Box>['width'];
  up?: boolean;
  down?: boolean;
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
};
export const Chevron: ForwardRefExoticComponent<ChevronProps>;
