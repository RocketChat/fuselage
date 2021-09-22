import { ChannelsSelectElement } from './elements/ChannelsSelectElement';
import { ConversationsSelectElement } from './elements/ConversationsSelectElement';
import { MultiChannelsSelectElement } from './elements/MultiChannelsSelectElement';
import { MultiConversationsSelectElement } from './elements/MultiConversationsSelectElement';
import { MultiStaticSelectElement } from './elements/MultiStaticSelectElement';
import { MultiUsersSelectElement } from './elements/MultiUsersSelectElement';
import { StaticSelectElement } from './elements/StaticSelectElement';
import { UsersSelectElement } from './elements/UsersSelectElement';

export type SelectElement =
  | ChannelsSelectElement
  | ConversationsSelectElement
  | MultiChannelsSelectElement
  | MultiConversationsSelectElement
  | MultiStaticSelectElement
  | MultiUsersSelectElement
  | StaticSelectElement
  | UsersSelectElement;
