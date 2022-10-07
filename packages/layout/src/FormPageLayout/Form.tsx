import { Tile } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement, FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

const Form = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLFormElement>, 'is'> & {
    children: ReactNode;
  }
>(
  ({ ...props }, ref): ReactElement => (
    <Tile
      ref={ref}
      is='form'
      backgroundColor={colors.white}
      color={colors.n800}
      padding='x40'
      width='full'
      maxWidth={576}
      textAlign='left'
      {...props}
    />
  )
);

export default Form;
