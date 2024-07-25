import type { ComponentProps } from 'react';
import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import type { ButtonProps } from './Button';
import Button from './Button';

type ButtonSize = {
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
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

/** @public */
export type ActionButtonProps = ButtonProps &
  ButtonSize & {
    icon: ComponentProps<typeof Icon>['name'];
  };

/** @public */
const ActionButton = forwardRef<HTMLElement, ActionButtonProps>(
  function ActionButton({ icon, children, ...props }, ref) {
    return (
      <Button ref={ref} square flexShrink={0} {...props}>
        {children}
        <Icon name={icon} size={getSize(props)} />
      </Button>
    );
  }
);

export default ActionButton;
