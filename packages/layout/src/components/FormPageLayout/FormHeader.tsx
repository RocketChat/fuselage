import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export const FormHeader = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
    children: ReactNode;
  }
>((props, ref) => <Box is='header' mbe={24} {...props} ref={ref} />);


