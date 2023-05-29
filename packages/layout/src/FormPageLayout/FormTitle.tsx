import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

const FormTitle = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
    children: ReactNode;
  }
>((props, ref) => (
  <Box mbe='x8' fontScale='h2' fontWeight={800} {...props} ref={ref} />
));

export default FormTitle;
