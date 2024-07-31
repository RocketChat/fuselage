import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';

export type FormHeaderProps = Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
  children: ReactNode;
};

const FormHeader = forwardRef(function FormHeader(
  props: FormHeaderProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <Box is='header' mbe={24} {...props} ref={ref} />;
});

export default FormHeader;
