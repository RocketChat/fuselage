import { ButtonElement } from './elements/ButtonElement';
import { ChannelsSelectElement } from './elements/ChannelsSelectElement';
import { ConversationsSelectElement } from './elements/ConversationsSelectElement';
import { DatePickerElement } from './elements/DatePickerElement';
import { LinearScaleElement } from './elements/LinearScaleElement';
import { MultiChannelsSelectElement } from './elements/MultiChannelsSelectElement';
import { MultiConversationsSelectElement } from './elements/MultiConversationsSelectElement';
import { MultiStaticSelectElement } from './elements/MultiStaticSelectElement';
import { MultiUsersSelectElement } from './elements/MultiUsersSelectElement';
import { OverflowElement } from './elements/OverflowElement';
import { PlainTextInputElement } from './elements/PlainTextInputElement';
import { StaticSelectElement } from './elements/StaticSelectElement';
import { UsersSelectElement } from './elements/UsersSelectElement';

export type ActionableElement =
  | ButtonElement
  | ChannelsSelectElement
  | ConversationsSelectElement
  | DatePickerElement
  | LinearScaleElement
  | MultiChannelsSelectElement
  | MultiConversationsSelectElement
  | MultiStaticSelectElement
  | MultiUsersSelectElement
  | OverflowElement
  | PlainTextInputElement
  | StaticSelectElement
  | UsersSelectElement;
