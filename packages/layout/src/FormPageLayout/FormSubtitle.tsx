import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

const FormSubtitle = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
    children: ReactNode;
  }
>((props, ref) => (
  <Box fontScale='p2' color='neutral-900' {...props} ref={ref} />
));

export default FormSubtitle;
