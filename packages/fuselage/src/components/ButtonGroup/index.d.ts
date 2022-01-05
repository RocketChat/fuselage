import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type ButtonGroupProps = ComponentProps<typeof Box> & {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  medium?: boolean;
};
export const ButtonGroup: ForwardRefExoticComponent<ButtonGroupProps>;
