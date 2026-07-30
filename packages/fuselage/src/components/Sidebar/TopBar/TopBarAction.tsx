import type { SidebarActionProps } from '../SidebarActions';
import { SidebarAction } from '../SidebarActions';

type TopBarActionProps = SidebarActionProps;

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export function TopBarAction(props: TopBarActionProps) {
  return <SidebarAction {...props} />;
}
