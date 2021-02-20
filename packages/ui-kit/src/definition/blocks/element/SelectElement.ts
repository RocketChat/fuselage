import { ChannelsSelectElement } from './ChannelsSelectElement';
import { ConversationsSelectElement } from './ConversationsSelectElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { StaticSelectElement } from './StaticSelectElement';
import { UsersSelectElement } from './UsersSelectElement';

export type SelectElement =
  | ChannelsSelectElement
  | ConversationsSelectElement
  | MultiStaticSelectElement
  | StaticSelectElement
  | UsersSelectElement;
