import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';

type NumberInputProps = ComponentProps<typeof Box> & {
  error: string;
  addon: Element<typeof Icon>;
};
export const NumberInput: ForwardRefExoticComponent<NumberInputProps>;
