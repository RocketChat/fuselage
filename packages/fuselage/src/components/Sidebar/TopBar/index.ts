import { SidebarDivider as TopBarDivider } from '../SidebarDivider';
import { TopBar } from './TopBar';
import { TopBarAction } from './TopBarAction';
import { TopBarActions } from './TopBarActions';
import { TopBarSection } from './TopBarSection';
import { TopBarTitle } from './TopBarTitle';
import { TopBarToolBox } from './TopBarToolBox';
import { TopBarWrapper } from './TopBarWrapper';

const Avatar: { size: 'x24' } = { size: 'x24' };

export const TopBarAvatar = Avatar;

export default Object.assign(TopBar, {
  /** @deprecated use named import instead */
  Section: TopBarSection,
  /** @deprecated use named import instead */
  ToolBox: TopBarToolBox,
  /** @deprecated use named import instead */
  Wrapper: TopBarWrapper,
  /** @deprecated use named import instead */
  Avatar: TopBarAvatar,
  /** @deprecated use named import instead */
  Actions: TopBarActions,
  /** @deprecated use named import instead */
  Action: TopBarAction,
  /** @deprecated use named import instead */
  Divider: TopBarDivider,
  /** @deprecated use named import instead */
  Title: TopBarTitle,
});

export * from './TopBar';
export * from './TopBarV2';
export * from './TopBarAction';
export * from './TopBarActions';
export * from './TopBarSection';
export * from './TopBarTitle';
export * from './TopBarToolBox';
export * from './TopBarWrapper';
