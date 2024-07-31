import type { ReactNode } from 'react';

/** @public */
export type SidebarFooterHighlightProps = {
  children?: ReactNode;
};

/** @public */
const SidebarFooterHighlight = ({ ...props }: SidebarFooterHighlightProps) => (
  <div
    className='rcx-box rcx-box--full rcx-sidebar-footer__highlights'
    {...props}
  />
);

export default SidebarFooterHighlight;
