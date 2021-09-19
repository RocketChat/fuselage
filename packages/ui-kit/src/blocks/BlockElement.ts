import { ButtonElement } from './elements/ButtonElement';
import { ChannelsSelectElement } from './elements/ChannelsSelectElement';
import { ConversationsSelectElement } from './elements/ConversationsSelectElement';
import { DatePickerElement } from './elements/DatePickerElement';
import { ImageElement } from './elements/ImageElement';
import { LinearScaleElement } from './elements/LinearScaleElement';
import { MultiStaticSelectElement } from './elements/MultiStaticSelectElement';
import { OverflowElement } from './elements/OverflowElement';
import { PlainTextInputElement } from './elements/PlainTextInputElement';
import { StaticSelectElement } from './elements/StaticSelectElement';
import { UsersSelectElement } from './elements/UsersSelectElement';

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
