import type { IconName } from '@rocket.chat/icons';
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

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
    icon: IconName;
  };

/** @public */
const ActionButton = forwardRef(function ActionButton(
  { icon, children, ...props }: ActionButtonProps,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <Button ref={ref} square flexShrink={0} {...props}>
      {children}
      <Icon name={icon} size={getSize(props)} />
    </Button>
  );
});

export default ActionButton;
