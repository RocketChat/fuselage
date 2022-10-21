import { Menu } from '../../Menu';
import { MessageToolbox } from './MessageToolbox';
import { MessageToolboxItem } from './MessageToolboxItem';
import { MessageToolboxWrapper } from './MessageToolboxWrapper';

export default Object.assign(MessageToolbox, {
  Item: MessageToolboxItem,
  Wrapper: MessageToolboxWrapper,
  Menu,
});

export { MessageToolbox, MessageToolboxItem, MessageToolboxWrapper, Menu };
