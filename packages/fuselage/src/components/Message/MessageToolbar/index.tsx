import { Menu } from '../../Menu/index.js';

import { MessageToolbar } from './MessageToolbar.js';
import { MessageToolbarItem } from './MessageToolbarItem.js';
import { MessageToolbarWrapper } from './MessageToolbarWrapper.js';

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
