import type { SidebarActionProps } from '../SidebarActions';
import { SidebarAction } from '../SidebarActions';

type TopBarActionProps = SidebarActionProps;

export function TopBarAction(props: TopBarActionProps) {
  return <SidebarAction {...props} />;
}
