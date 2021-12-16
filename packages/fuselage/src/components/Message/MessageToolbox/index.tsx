import { Menu } from '../../Menu';
import { MessageToolbox } from './MessageToolbox';
import { MessageToolboxItem } from './MessageToolboxItem';
import { MessageToolboxWrapper } from './MessageToolboxWrapper';

import './MessageToolbox.styles.scss';

export default Object.assign(MessageToolbox, {
  Item: MessageToolboxItem,
  Wrapper: MessageToolboxWrapper,
  Menu,
});
