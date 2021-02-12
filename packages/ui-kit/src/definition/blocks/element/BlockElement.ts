import { BlockElementType } from '../../../enums';
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

export type BlockElementMap = {
  [BlockElementType.BUTTON]: ButtonElement;
  [BlockElementType.CHANNELS_SELECT]: ChannelsSelectElement;
  [BlockElementType.CONVERSATIONS_SELECT]: ConversationsSelectElement;
  [BlockElementType.DATEPICKER]: DatePickerElement;
  [BlockElementType.IMAGE]: ImageElement;
  [BlockElementType.LINEAR_SCALE]: LinearScaleElement;
  [BlockElementType.MULTI_STATIC_SELECT]: MultiStaticSelectElement;
  [BlockElementType.OVERFLOW]: OverflowElement;
  [BlockElementType.PLAIN_TEXT_INPUT]: PlainTextInputElement;
  [BlockElementType.STATIC_SELECT]: StaticSelectElement;
  [BlockElementType.USERS_SELECT]: UsersSelectElement;
};

export type BlockElement = BlockElementMap[keyof BlockElementMap];
