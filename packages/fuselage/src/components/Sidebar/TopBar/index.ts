import { SidebarDivider as TopBarDivider } from '../SidebarDivider.js';

import { TopBar } from './TopBar.js';
import { TopBarAction } from './TopBarAction.js';
import { TopBarActions } from './TopBarActions.js';
import { TopBarSection } from './TopBarSection.js';
import { TopBarTitle } from './TopBarTitle.js';
import { TopBarToolBox } from './TopBarToolBox.js';
import { TopBarWrapper } from './TopBarWrapper.js';

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

export * from './TopBar.js';
export * from './TopBarV2.js';
export * from './TopBarAction.js';
export * from './TopBarActions.js';
export * from './TopBarSection.js';
export * from './TopBarTitle.js';
export * from './TopBarToolBox.js';
export * from './TopBarWrapper.js';
