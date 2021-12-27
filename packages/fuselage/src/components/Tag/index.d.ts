import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type TagProps = ComponentProps<typeof Box> & {
  small?: boolean;
  variant?: 'secondary' | 'primary' | 'danger' | 'warning' | 'ghost';
};
export const Tag: ForwardRefExoticComponent<TagProps>;
