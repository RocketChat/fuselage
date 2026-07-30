import type { SidebarActionsProps } from '../SidebarActions';
import { SidebarActions } from '../SidebarActions';

type TopBarActionsProps = SidebarActionsProps;

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export function TopBarActions(props: TopBarActionsProps) {
  return <SidebarActions {...props} />;
}
