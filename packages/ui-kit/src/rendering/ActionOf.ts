import type { ActionableElement } from '../blocks/ActionableElement';
import type { ButtonElement } from '../blocks/elements/ButtonElement';
import type { CalloutElement } from '../blocks/elements/CalloutElement';
import type { ChannelsSelectElement } from '../blocks/elements/ChannelsSelectElement';
import type { CheckboxElement } from '../blocks/elements/CheckboxElement';
import type { ConversationsSelectElement } from '../blocks/elements/ConversationsSelectElement';
import type { DatePickerElement } from '../blocks/elements/DatePickerElement';
import type { LinearScaleElement } from '../blocks/elements/LinearScaleElement';
import type { MultiChannelsSelectElement } from '../blocks/elements/MultiChannelsSelectElement';
import type { MultiConversationsSelectElement } from '../blocks/elements/MultiConversationsSelectElement';
import type { MultiStaticSelectElement } from '../blocks/elements/MultiStaticSelectElement';
import type { MultiUsersSelectElement } from '../blocks/elements/MultiUsersSelectElement';
import type { OverflowElement } from '../blocks/elements/OverflowElement';
import type { PlainTextInputElement } from '../blocks/elements/PlainTextInputElement';
import type { RadioButtonElement } from '../blocks/elements/RadioButtonElement';
import type { StaticSelectElement } from '../blocks/elements/StaticSelectElement';
import type { TabNavigationElement } from '../blocks/elements/TabNavigationElement';
import type { TimePickerElement } from '../blocks/elements/TimePickerElement';
import type { ToastBarElement } from '../blocks/elements/ToastBarElement';
import type { ToggleSwitchElement } from '../blocks/elements/ToggleSwitchElement';
import type { UsersSelectElement } from '../blocks/elements/UsersSelectElement';

export type ActionOf<TElement extends ActionableElement> =
  TElement extends ButtonElement
    ? ButtonElement['value']
    : TElement extends ChannelsSelectElement
    ? unknown
    : TElement extends ConversationsSelectElement
    ? unknown
    : TElement extends DatePickerElement
    ? DatePickerElement['initialDate']
    : TElement extends LinearScaleElement
    ? LinearScaleElement['initialValue']
    : TElement extends MultiChannelsSelectElement
    ? unknown
    : TElement extends MultiConversationsSelectElement
    ? unknown
    : TElement extends MultiStaticSelectElement
    ? MultiStaticSelectElement['initialValue']
    : TElement extends MultiUsersSelectElement
    ? unknown
    : TElement extends OverflowElement
    ? OverflowElement['options'][number]['value']
    : TElement extends PlainTextInputElement
    ? PlainTextInputElement['initialValue']
    : TElement extends StaticSelectElement
    ? StaticSelectElement['initialValue']
    : TElement extends UsersSelectElement
    ? unknown
    : TElement extends ToggleSwitchElement
    ? unknown
    : TElement extends RadioButtonElement
    ? unknown
    : TElement extends CheckboxElement
    ? unknown
    : TElement extends CalloutElement
    ? unknown
    : TElement extends ToastBarElement
    ? unknown
    : TElement extends TimePickerElement
    ? TimePickerElement['initialTime']
    : TElement extends TabNavigationElement
    ? unknown
    : never;
