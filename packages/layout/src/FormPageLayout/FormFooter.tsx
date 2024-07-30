import { Box } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';

export type FormFooterProps = Omit<FormHTMLAttributes<HTMLElement>, 'is'> & {
  children: ReactNode;
};

const FormFooter = forwardRef(function FormFooter(
  props: FormFooterProps,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <Box
      is='footer'
      mbs={24}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      {...props}
      ref={ref}
    />
  );
});

export default FormFooter;
