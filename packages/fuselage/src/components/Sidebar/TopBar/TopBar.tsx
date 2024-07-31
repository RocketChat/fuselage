import type { ReactNode } from 'react';

import SidebarDivider from '../SidebarDivider';
import TopBarAction from './TopBarAction';
import TopBarActions from './TopBarActions';
import TopBarSection from './TopBarSection';
import TopBarTitle from './TopBarTitle';
import TopBarToolBox from './TopBarToolBox';
import TopBarWrapper from './TopBarWrapper';

/** @public */
export type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Sidebar TopBar and ToolBox.
 * @public
 */
function TopBar({ className, ...props }: TopBarProps) {
  return (
    <div
      className={['rc-box rc-box--full rcx-sidebar-topbar', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace TopBar {
  /** @deprecated use `TopBarSection` instead */
  export const Section = TopBarSection;
  /** @deprecated use `TopBarToolBox` instead */
  export const ToolBox = TopBarToolBox;
  /** @deprecated use `TopBarWrapper` instead */
  export const Wrapper = TopBarWrapper;
  /** @deprecated use the constant literal `'x24'` instead of `TopBar.Avatar.size` */
  export const Avatar = { size: 'x24' } as const;
  /** @deprecated use `TopBarActions` instead */
  export const Actions = TopBarActions;
  /** @deprecated use `TopBarAction` instead */
  export const Action = TopBarAction;
  /** @deprecated use `SidebarDivider` instead */
  export const Divider = SidebarDivider;
  /** @deprecated use `TopBarTitle` instead */
  export const Title = TopBarTitle;
}

export default TopBar;
