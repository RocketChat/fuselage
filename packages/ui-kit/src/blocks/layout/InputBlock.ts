import { LayoutBlockish } from '../LayoutBlockish';
import { ChannelsSelectElement } from '../elements/ChannelsSelectElement';
import { ConversationsSelectElement } from '../elements/ConversationsSelectElement';
import { DatePickerElement } from '../elements/DatePickerElement';
import { LinearScaleElement } from '../elements/LinearScaleElement';
import { MultiStaticSelectElement } from '../elements/MultiStaticSelectElement';
import { PlainTextInputElement } from '../elements/PlainTextInputElement';
import { StaticSelectElement } from '../elements/StaticSelectElement';
import { UsersSelectElement } from '../elements/UsersSelectElement';
import { PlainText } from '../text/PlainText';

export type InputBlock = LayoutBlockish<{
  type: 'input';
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
