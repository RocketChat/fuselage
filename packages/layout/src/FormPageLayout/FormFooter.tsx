import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

const FormFooter = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
    children: ReactNode;
  }
>((props, ref) => (
  <Box
    is='footer'
    mbs='x24'
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    {...props}
    ref={ref}
  />
));

export default FormFooter;
