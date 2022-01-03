import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

import { Box } from '../Box';

type NumberInputProps = ComponentProps<typeof Box> & {
  error?: string;
  addon?: ReactNode;
};
export const NumberInput: ForwardRefExoticComponent<NumberInputProps>;
