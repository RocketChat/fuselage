import { Tile } from '@rocket.chat/fuselage';
import type { FormHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

const Form = forwardRef<
  HTMLElement,
  Omit<FormHTMLAttributes<HTMLFormElement>, 'is'> & {
    children: ReactNode;
  }
>(({ ...props }, ref) => (
  <Tile
    ref={ref}
    is='form'
    backgroundColor='light'
    color='default'
    padding={40}
    width='full'
    maxWidth={576}
    textAlign='left'
    {...props}
  />
));

export default Form;
