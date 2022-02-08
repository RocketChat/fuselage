import React, { ComponentProps, forwardRef, Ref } from 'react';

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
    icon: ComponentProps<typeof Icon>['name'];
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

export const ActionButton = forwardRef(
  ({ icon, children, ...props }: ActionButtonProps, ref: Ref<HTMLElement>) => (
    <Button ref={ref} square flexShrink={0} {...props}>
      {children}
      <Icon name={icon} size={getSize(props)} />
    </Button>
  )
);
