import { Menu } from '../../Menu';
import { MessageToolbox } from './MessageToolbox';
import { MessageToolboxItem } from './MessageToolboxItem';
import { MessageToolboxWrapper } from './MessageToolboxWrapper';

const CompoundedMessageToolbox = Object.assign(MessageToolbox.bind({}), {
  Item: MessageToolboxItem,
  Wrapper: MessageToolboxWrapper,
  Menu,
});

export default CompoundedMessageToolbox;

export {
  CompoundedMessageToolbox as MessageToolbox,
  MessageToolboxItem,
  MessageToolboxWrapper,
  Menu,
};
