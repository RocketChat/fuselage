import { MessageToolbox } from './MessageToolbox';
import { MessageToolboxItem } from './MessageToolboxItem';
import { MessageToolboxWrapper } from './MessageToolboxWrapper';
import { Menu } from '../../Menu';

export default Object.assign(MessageToolbox, {
  Item: MessageToolboxItem,
  Wrapper: MessageToolboxWrapper,
  Menu,
});

export { MessageToolbox, MessageToolboxItem, MessageToolboxWrapper, Menu };
