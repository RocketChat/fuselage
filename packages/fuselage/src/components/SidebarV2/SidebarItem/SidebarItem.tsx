import type { AllHTMLAttributes } from 'react';

export const SidebarItem = ({
  selected,
  className,
  children,
  is: Tag = 'a',
  ...props
}: {
  selected?: boolean;
  is?: React.ElementType;
} & AllHTMLAttributes<HTMLAnchorElement>) => (
  <Tag
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-item',
      selected && 'rcx-sidebar-v2-item--selected',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </Tag>
);
