import type { Keys as IconKeys } from '@rocket.chat/icons';
import { isValidElement, type ReactElement } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';
import { Icon, type IconProps } from '../../Icon';

type SidebarItemIconProps = Omit<IconProps, 'name'> & {
  icon: IconKeys | ReactElement;
  highlighted?: boolean;
};

const SidebarItemIconFrame = styled(RcxView, {
  name: 'SidebarV2ItemIcon',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: 20,
  height: 20,
  variants: {
    highlighted: {
      true: {
        color: '$fontTitlesLabels',
        fontWeight: '500',
      },
    },
  } as const,
});

export const SidebarItemIcon = ({
  icon,
  className: _className,
  highlighted,
  ...props
}: SidebarItemIconProps) => (
  <SidebarItemIconFrame highlighted={highlighted || undefined}>
    {isValidElement(icon) ? (
      icon
    ) : (
      <Icon name={icon as IconKeys} size='x20' {...props} />
    )}
  </SidebarItemIconFrame>
);
