import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type TextAreaInputProps = ComponentProps<typeof Box> & {
  addon?: ReactNode;
  error?: string;
};
export const TextAreaInput: ForwardRefExoticComponent<TextAreaInputProps>;
