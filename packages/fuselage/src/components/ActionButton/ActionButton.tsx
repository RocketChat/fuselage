import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Button } from '../Button/Button';
import type { ButtonProps } from '../Button/Button';
import { Icon } from '../Icon';

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

export const ActionButton = forwardRef(function ActionButton(
  { icon, children, ...props }: ActionButtonProps,
  ref: Ref<HTMLElement>
) {
  return (
    <Button ref={ref} square flexShrink={0} {...props}>
      {children}
      <Icon name={icon} size={getSize(props)} />
    </Button>
  );
});
