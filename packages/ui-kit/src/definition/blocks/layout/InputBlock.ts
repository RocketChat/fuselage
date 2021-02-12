import { LayoutBlockType } from '../../../enums/LayoutBlockType';
import { ChannelsSelectElement } from '../element/ChannelsSelectElement';
import { ConversationsSelectElement } from '../element/ConversationsSelectElement';
import { DatePickerElement } from '../element/DatePickerElement';
import { LinearScaleElement } from '../element/LinearScaleElement';
import { MultiStaticSelectElement } from '../element/MultiStaticSelectElement';
import { PlainTextInputElement } from '../element/PlainTextInputElement';
import { StaticSelectElement } from '../element/StaticSelectElement';
import { UsersSelectElement } from '../element/UsersSelectElement';
import { PlainText } from '../text/PlainText';
import { Layout } from './Layout';

export type InputBlock = Layout<{
  type: `${LayoutBlockType.INPUT}`;
  label: PlainText;
  element:
    | ChannelsSelectElement
    | ConversationsSelectElement
    | DatePickerElement
    | LinearScaleElement
    | MultiStaticSelectElement
    | PlainTextInputElement
    | StaticSelectElement
    | UsersSelectElement;
  hint?: PlainText;
  optional?: boolean;
}>;
