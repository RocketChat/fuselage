import React, { forwardRef, ForwardRefExoticComponent } from 'react';

import { Button } from '.';
import { Icon } from '../Icon';
import { ButtonProps } from './Button';

type ButtonSize = {
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
};
type ActionButtonProps = ButtonProps &
  ButtonSize & {
    icon: string;
  };

const getSize = ({ tiny, mini, small }: ButtonSize) => {
  if (mini) {
    return 'x16';
  }
  if (tiny || small) {
    return 'x20';
  }
  return 'x20';
};

export const ActionButton: ForwardRefExoticComponent<ActionButtonProps> =
  forwardRef(({ icon, children, ...props }, ref) => (
    <Button ref={ref} square flexShrink={0} {...props}>
      {children}
      <Icon name={icon} size={getSize(props)} />
    </Button>
  ));
