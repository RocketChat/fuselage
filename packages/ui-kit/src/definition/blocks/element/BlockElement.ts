import { ButtonElement } from './ButtonElement';
import { ChannelsSelectElement } from './ChannelsSelectElement';
import { ConversationsSelectElement } from './ConversationsSelectElement';
import { DatePickerElement } from './DatePickerElement';
import { ImageElement } from './ImageElement';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { PlainTextInputElement } from './PlainTextInputElement';
import { StaticSelectElement } from './StaticSelectElement';
import { UsersSelectElement } from './UsersSelectElement';

export type BlockElement =
  | ButtonElement
  | ChannelsSelectElement
  | ConversationsSelectElement
  | DatePickerElement
  | ImageElement
  | LinearScaleElement
  | MultiStaticSelectElement
  | OverflowElement
  | PlainTextInputElement
  | StaticSelectElement
  | UsersSelectElement;
