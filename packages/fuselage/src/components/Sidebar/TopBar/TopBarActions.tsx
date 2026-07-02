import type { SidebarActionsProps } from '../SidebarActions';
import { SidebarActions } from '../SidebarActions';

type TopBarActionsProps = SidebarActionsProps;

export function TopBarActions(props: TopBarActionsProps) {
  return <SidebarActions {...props} />;
}
