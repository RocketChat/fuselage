import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';

export type FormTitleProps = Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
  children: ReactNode;
};

const FormTitle = forwardRef(function FormTitle(
  props: FormTitleProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <Box mbe={8} fontScale='h3' fontWeight={800} {...props} ref={ref} />;
});

export default FormTitle;
