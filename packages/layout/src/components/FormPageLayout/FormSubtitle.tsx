import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export const FormSubtitle = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
    children: ReactNode;
  }
>((props, ref) => <Box fontScale='p2' color='hint' {...props} ref={ref} />);


