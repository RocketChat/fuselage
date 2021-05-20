import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type TagProps = ComponentProps<typeof Box> & {
  small?: boolean;
  variant?: 'secondary' | 'primary' | 'danger';
};
export const Tag: ForwardRefExoticComponent<TagProps>;
