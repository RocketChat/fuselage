import { forwardRef } from 'react';

import type { IconProps } from '../Icon';
import { Icon } from '../Icon';

import { Button } from '.';
import type { ButtonProps } from './Button';

type ButtonSize = {
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
};
type ActionButtonProps = ButtonProps &
  ButtonSize & {
    icon: IconProps['name'];
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

export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ icon, children, ...props }, ref) => (
    <Button ref={ref} square flexShrink={0} {...props}>
      {children}
      <Icon name={icon} size={getSize(props)} />
    </Button>
  ),
);
