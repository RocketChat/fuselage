import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type CheckBoxProps = ComponentProps<typeof Box> & {
  indeterminate?: boolean;
};
export const CheckBox: ForwardRefExoticComponent<CheckBoxProps>;
