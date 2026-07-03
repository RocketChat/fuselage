import { Icon, type IconProps } from '../Icon';

import { Button } from '.';
import type { ButtonProps } from './Button';

export type ActionButtonSize = {
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
};

export type ActionButtonProps = ButtonProps &
  ActionButtonSize & {
    icon: IconProps['name'];
  };

const getSize = ({ tiny, mini, small }: ActionButtonSize) => {
  if (mini) {
    return 'x16';
  }
  if (tiny || small) {
    return 'x20';
  }
  return 'x20';
};

function ActionButton({ icon, children, ...props }: ActionButtonProps) {
  return (
    <Button square flexShrink={0} {...props}>
      {children}
      <Icon name={icon} size={getSize(props)} />
    </Button>
  );
}

export default ActionButton;
