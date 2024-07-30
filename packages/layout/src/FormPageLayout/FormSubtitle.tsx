import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';

export type FormSubtitleProps = Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
  children: ReactNode;
};

const FormSubtitle = forwardRef(function FormSubtitle(
  props: FormSubtitleProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <Box fontScale='p2' color='neutral-900' {...props} ref={ref} />;
});

export default FormSubtitle;
