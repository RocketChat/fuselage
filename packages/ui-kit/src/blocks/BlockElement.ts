import { BlockElementType } from './BlockElementType';
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
