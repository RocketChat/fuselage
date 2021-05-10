import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

import { Box } from '../Box';

export type TextInputProps = ComponentProps<typeof Box> & {
  addon?: ReactNode;
  error?: string;
};
export const TextInput: ForwardRefExoticComponent<TextInputProps>;
