import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

const FormHeader = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
    children: ReactNode;
  }
>((props, ref) => <Box is='header' mbe='x24' {...props} ref={ref} />);

export default FormHeader;
