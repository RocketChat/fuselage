import { Tile } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { FormHTMLAttributes, ReactNode, ForwardedRef } from 'react';
import { forwardRef } from 'react';

export type FormProps = Omit<FormHTMLAttributes<HTMLFormElement>, 'is'> & {
  children: ReactNode;
};

const Form = forwardRef(function Form(
  props: FormProps,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <Tile
      ref={ref}
      is='form'
      backgroundColor={colors.white}
      color={colors.n800}
      padding={40}
      width='full'
      maxWidth={576}
      textAlign='left'
      {...props}
    />
  );
});

export default Form;
