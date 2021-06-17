import { ChannelsSelectElement } from './elements/ChannelsSelectElement';
import { ConversationsSelectElement } from './elements/ConversationsSelectElement';
import { MultiStaticSelectElement } from './elements/MultiStaticSelectElement';
import { StaticSelectElement } from './elements/StaticSelectElement';
import { UsersSelectElement } from './elements/UsersSelectElement';

export type SelectElement =
  | ChannelsSelectElement
  | ConversationsSelectElement
  | MultiStaticSelectElement
  | StaticSelectElement
  | UsersSelectElement;
