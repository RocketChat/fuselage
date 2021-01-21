export enum ElementType {
  PLAIN_TEXT = 'plain_text',
  MARKDOWN = 'mrkdwn',
  DIVIDER = 'divider',
  SECTION = 'section',
  INPUT = 'input',
  CONDITIONAL = 'conditional',
  IMAGE = 'image',
  ACTIONS = 'actions',
  CONTEXT = 'context',
  BUTTON = 'button',
  OVERFLOW = 'overflow',
  PLAIN_TEXT_INPUT = 'plain_text_input',
  CONVERSATION_SELECT = 'conversations_select',
  CHANNEL_SELECT = 'channels_select',
  USER_SELECT = 'users_select',
  STATIC_SELECT = 'static_select',
  MULTI_STATIC_SELECT = 'multi_static_select',
  DATEPICKER = 'datepicker',
}

export enum BlockContext {
  BLOCK,
  SECTION,
  ACTION,
  FORM,
  CONTEXT,
}

export type ActionId = string;

export type BlockId = string;

export interface IElement {
  type: ElementType;
}

export interface IPlainText extends IElement {
  type: ElementType.PLAIN_TEXT;
  text: string;
  emoji?: boolean;
}

export interface IMarkdown extends IElement {
  type: ElementType.MARKDOWN;
  text: string;
  verbatim?: boolean;
}

export type TextObject = IPlainText | IMarkdown;

export type Option = {
  text: TextObject;
  value: string;
  description?: IPlainText;
  url?: string;
};

export type OptionGroup = {
  label: IPlainText;
  options: Option[];
};

export type ConfirmationDialog = {
  title: IPlainText;
  text: TextObject;
  confirm: IPlainText;
  deny: IPlainText;
  style: 'primary' | 'danger';
};

export interface IActionableElement extends IElement {
  actionId: ActionId;
  confirm?: ConfirmationDialog;
}

export interface IButtonElement extends IActionableElement {
  type: ElementType.BUTTON;
  text: IPlainText;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
}

export interface IImageElement extends IElement {
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
}

export interface IDatePickerElement extends IActionableElement {
  type: ElementType.DATEPICKER;
  placeholder?: TextObject;
  initialDate?: string;
}

export interface IStaticSelectElement extends IActionableElement {
  type: ElementType.STATIC_SELECT;
  placeholder: TextObject;
  options: Option[];
  optionGroups?: OptionGroup[];
  initialOption?: Option;
}

export interface IMultiStaticSelectElement extends IActionableElement {
  type: ElementType.MULTI_STATIC_SELECT;
  placeholder: TextObject;
  options: Option[];
  optionGroups?: OptionGroup[];
  initialOption?: Option;
  maxSelectItems?: number;
}

export interface IOverflowElement extends IActionableElement {
  type: ElementType.OVERFLOW;
  options: Option[];
}

export interface IPlainTextInput extends IActionableElement {
  type: ElementType.PLAIN_TEXT_INPUT;
  placeholder?: IPlainText;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
}

export type SectionAccessoryElement =
  | IImageElement
  | IButtonElement
  | IDatePickerElement
  | IStaticSelectElement
  | IMultiStaticSelectElement
  | IOverflowElement;

export type ActionElement =
  | IButtonElement
  | IStaticSelectElement
  | IMultiStaticSelectElement
  | IOverflowElement
  | IDatePickerElement;

export type ContextElement = TextObject | IImageElement;

export type InputElement =
  | IPlainTextInput
  | IStaticSelectElement
  | IMultiStaticSelectElement
  | IDatePickerElement;

export interface IBlock extends IElement {
  blockId?: BlockId;
}

export interface IDividerBlock extends IBlock {
  type: ElementType.DIVIDER;
}

export interface ISectionBlock extends IBlock {
  type: ElementType.SECTION;
  text?: TextObject;
  fields?: TextObject[];
  accessory?: SectionAccessoryElement;
}

export interface IImageBlock extends IBlock {
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
  title?: IPlainText;
}

export interface IActionsBlock extends IBlock {
  type: ElementType.ACTIONS;
  elements: ActionElement[];
}

export interface IContextBlock extends IBlock {
  type: ElementType.CONTEXT;
  elements: ContextElement[];
}

export interface IInputBlock extends IBlock {
  type: ElementType.INPUT;
  label: IPlainText;
  element: InputElement;
  hint?: IPlainText;
  optional?: boolean;
}

export type Conditions = {
  engine?: 'rocket.chat' | 'livechat';
};

export type ConditionalBlockFilters = {
  engine?: Array<Conditions['engine']>;
};

export interface IConditionalBlock extends IBlock {
  type: ElementType.CONDITIONAL;
  when?: ConditionalBlockFilters;
  render: IBlock[];
}
