import type { Keys as Icons } from '@rocket.chat/icons';
import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxInteractive } from '../../../primitives';
import { Icon } from '../../Icon';

const SidebarItemActionFrame = styled(RcxInteractive, {
  name: 'SidebarV2ItemAction',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$x2',
  role: 'button',
});

export const SidebarItemAction = ({
  children,
  className: _className,
  icon = 'plus-small',
  ...props
}: {
  onClick: (e: Event) => void;
  icon?: Icons;
} & HTMLAttributes<HTMLDivElement>) => (
  <SidebarItemActionFrame {...(props as any)}>
    <Icon name={icon} size='x20' />
    {children}
  </SidebarItemActionFrame>
);
