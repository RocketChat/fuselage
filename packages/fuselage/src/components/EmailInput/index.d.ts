import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type EmailInputProps = ComponentProps<typeof Box> & {
  addon?: ReactNode;
  error?: string;
};
export const EmailInput: ForwardRefExoticComponent<EmailInputProps>;
