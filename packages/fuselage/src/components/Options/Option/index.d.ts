import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

import { Box } from '../../Box';

type OptionProps = {
  id?: string;
  avatar?: ReactNode;
  label?: string;
  focus?: boolean;
  selected?: boolean;
  icon?: string;
  className?: ComponentProps<typeof Box>['className'];
  title?: string;
  value?: any;
};
export const Option: ForwardRefExoticComponent<OptionProps>;
