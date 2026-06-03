import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export const FormFooter = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
    children: ReactNode;
  }
>((props, ref) => (
  <Box
    is='footer'
    mbs={24}
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    {...props}
    ref={ref}
  />
));


