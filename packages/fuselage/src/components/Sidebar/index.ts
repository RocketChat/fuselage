import Sidebar from './Sidebar';
import SidebarActions from './SidebarActions';
import SidebarBanner from './SidebarBanner';
import SidebarDivider from './SidebarDivider';
import SidebarFooter from './SidebarFooter';
import SidebarFooterHighlight from './SidebarFooterHighlight';
import SidebarItem from './SidebarItem';
import SidebarItemAction from './SidebarItemAction';
import SidebarItemAvatar from './SidebarItemAvatar';
import SidebarItemBadge from './SidebarItemBadge';
import SidebarItemContainer from './SidebarItemContainer';
import SidebarItemContent from './SidebarItemContent';
import SidebarItemIcon from './SidebarItemIcon';
import SidebarItemMenu from './SidebarItemMenu';
import SidebarItemSubtitle from './SidebarItemSubtitle';
import SidebarItemTime from './SidebarItemTime';
import SidebarItemTitle from './SidebarItemTitle';
import SidebarItemWrapper from './SidebarItemWrapper';
import SidebarSection from './SidebarSection';
import SidebarSectionTitle from './SidebarSectionTitle';
import TopBar from './TopBar';
import TopBarAction from './TopBarAction';
import TopBarSection from './TopBarSection';
import TopBarTitle from './TopBarTitle';
import TopBarToolBox from './TopBarToolBox';
import TopBarWrapper from './TopBarWrapper';

export const TopBarAvatar = { size: 'x24' as const };

const CompoundedSidebarItem = Object.assign(SidebarItem.bind({}), {
  Menu: SidebarItemMenu,
  Container: SidebarItemContainer,
  Content: SidebarItemContent,
  Title: SidebarItemTitle,
  Subtitle: SidebarItemSubtitle,
  Time: SidebarItemTime,
  Wrapper: SidebarItemWrapper,
  Icon: SidebarItemIcon,
  Avatar: SidebarItemAvatar,
  Actions: SidebarActions,
  Action: SidebarItemAction,
  Badge: SidebarItemBadge,
});

const CompoundedSidebarSection = Object.assign(SidebarSection.bind({}), {
  Title: SidebarSectionTitle,
});

const CompoundedSidebarTopBar = Object.assign(TopBar.bind({}), {
  Section: TopBarSection,
  ToolBox: TopBarToolBox,
  Wrapper: TopBarWrapper,
  Avatar: TopBarAvatar,
  Actions: SidebarActions,
  Action: TopBarAction,
  Divider: SidebarDivider,
  Title: TopBarTitle,
});

const CompoundedSidebar = Object.assign(Sidebar.bind({}), {
  TopBar: CompoundedSidebarTopBar,
  Item: SidebarItem,
  Section: CompoundedSidebarSection,
  Divider: SidebarDivider,
  Banner: SidebarBanner,
});

export default CompoundedSidebar;

export {
  CompoundedSidebarTopBar as SidebarTopBar,
  CompoundedSidebarSection as SidebarSection,
  CompoundedSidebarItem as SidebarItem,
  SidebarActions as SidebarItemActions,
  SidebarActions as TopBarActions,
  SidebarItemContainer,
  SidebarSectionTitle,
  TopBarToolBox,
  TopBarSection,
  TopBarAction,
  TopBarTitle,
  Sidebar,
  SidebarItemMenu,
  SidebarItemContent,
  SidebarItemTitle,
  SidebarItemTime,
  SidebarItemBadge,
  SidebarItemSubtitle,
  SidebarItemWrapper,
  SidebarItemIcon,
  SidebarItemAvatar,
  SidebarItemAction,
  SidebarDivider,
  SidebarBanner,
  SidebarFooter,
  SidebarFooterHighlight,
};
