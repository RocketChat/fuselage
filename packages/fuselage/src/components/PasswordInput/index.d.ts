import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type PasswordInputProps = ComponentProps<typeof Box> & {
  error?: string;
};
export const PasswordInput: ForwardRefExoticComponent<PasswordInputProps>;
