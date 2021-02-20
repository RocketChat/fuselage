import { ButtonElement } from './ButtonElement';
import { ChannelsSelectElement } from './ChannelsSelectElement';
import { ConversationsSelectElement } from './ConversationsSelectElement';
import { DatePickerElement } from './DatePickerElement';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { StaticSelectElement } from './StaticSelectElement';
import { UsersSelectElement } from './UsersSelectElement';

export type ActionableElement =
  | ButtonElement
  | ChannelsSelectElement
  | ConversationsSelectElement
  | DatePickerElement
  | LinearScaleElement
  | MultiStaticSelectElement
  | OverflowElement
  | StaticSelectElement
  | UsersSelectElement;
