import { Menu } from '../../Menu';
import { MessageToolbar } from './MessageToolbar';
import { MessageToolbarItem } from './MessageToolbarItem';
import { MessageToolbarWrapper } from './MessageToolbarWrapper';

export default Object.assign(MessageToolbar, {
  /**
   * @deprecated prefer using named imports
   * */
  Item: MessageToolbarItem,
  /**
   * @deprecated prefer using named imports
   * */
  Wrapper: MessageToolbarWrapper,
  /**
   * @deprecated prefer using named imports
   * */
  Menu,
});

export { MessageToolbar, MessageToolbarItem, MessageToolbarWrapper, Menu };
