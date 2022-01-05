import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type ButtonProps = ComponentProps<typeof Box> & {
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  primary?: boolean;
  ghost?: boolean;
  nude?: boolean;
  ghostish?: boolean;
  small?: boolean;
  square?: boolean;
};
export const Button: ForwardRefExoticComponent<ButtonProps>;

type ActionButtonProps = ButtonProps & {
  icon: string;
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
};
export const ActionButton: ForwardRefExoticComponent<ActionButtonProps>;

export = Button;
