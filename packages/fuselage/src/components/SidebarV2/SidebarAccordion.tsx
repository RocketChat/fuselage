import type { HTMLAttributes } from 'react';

export const SidebarAccordion = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-accordion rcx-box--animated',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <div className='rcx-sidebar-v2-accordion__wrapper'>{children}</div>
  </div>
);
