import { ActionableElement } from '../blocks/ActionableElement';
import { ButtonElement } from '../blocks/elements/ButtonElement';
import { ChannelsSelectElement } from '../blocks/elements/ChannelsSelectElement';
import { ConversationsSelectElement } from '../blocks/elements/ConversationsSelectElement';
import { DatePickerElement } from '../blocks/elements/DatePickerElement';
import { LinearScaleElement } from '../blocks/elements/LinearScaleElement';
import { MultiChannelsSelectElement } from '../blocks/elements/MultiChannelsSelectElement';
import { MultiConversationsSelectElement } from '../blocks/elements/MultiConversationsSelectElement';
import { MultiStaticSelectElement } from '../blocks/elements/MultiStaticSelectElement';
import { MultiUsersSelectElement } from '../blocks/elements/MultiUsersSelectElement';
import { OverflowElement } from '../blocks/elements/OverflowElement';
import { PlainTextInputElement } from '../blocks/elements/PlainTextInputElement';
import { StaticSelectElement } from '../blocks/elements/StaticSelectElement';
import { UsersSelectElement } from '../blocks/elements/UsersSelectElement';

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
    : never;
