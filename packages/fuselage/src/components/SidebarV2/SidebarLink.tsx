import type { Keys as Icons } from '@rocket.chat/icons';
import type { LinkHTMLAttributes, ReactNode } from 'react';

import { Icon } from '../Icon';

export type SidebarLinkProps = {
  selected?: boolean;
  icon?: Icons;
  badge?: ReactNode;
  menu?: ReactNode;
} & LinkHTMLAttributes<HTMLAnchorElement>;

const SidebarLink = ({
  selected,
  icon,
  badge,
  menu,
  children,
  ...props
}: SidebarLinkProps) => (
  <a
    role='link'
    tabIndex={0}
    className='rcx-box'
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 2,
      paddingBlock: 3,
      paddingInline: 15,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      gap: 4,
      cursor: 'pointer',
      color: 'var(--fontTitlesLabels)',
      backgroundColor: selected ? 'var(--surfaceSelected)' : undefined,
    }}
    onClick={(e) => e.stopPropagation()}
    onKeyDown={(e) => e.code === 'Enter' && e.stopPropagation()}
    {...(props as any)}
  >
    {icon && <Icon name={icon} size='x20' />}
    <span
      className='rcx-box'
      style={{
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
      }}
    >
      {children}
    </span>
    {badge}
    {menu}
  </a>
);

export default SidebarLink;
