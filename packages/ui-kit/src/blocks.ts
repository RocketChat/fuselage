export enum ElementType {
  BUTTON = 'button',
  IMAGE = 'image',
  OVERFLOW = 'overflow',
  PLAIN_TEXT_INPUT = 'plain_text_input',
  STATIC_SELECT = 'static_select',
  MULTI_STATIC_SELECT = 'multi_static_select',
  SECTION = 'section',
  DIVIDER = 'divider',
  ACTIONS = 'actions',
  CONTEXT = 'context',
  INPUT = 'input',
  CONVERSATION_SELECT = 'conversations_select',
  CHANNEL_SELECT = 'channels_select',
  USER_SELECT = 'users_select',
  DATEPICKER = 'datepicker',
  FIELDS = 'fields',
  PLAIN_TEXT = 'plain_text',
  TEXT = 'text',
  MARKDOWN = 'mrkdwn',
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

export type Option = {
  text: ITextObject;
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
  text: ITextObject;
  confirm: IPlainText;
  deny: IPlainText;
  style: 'primary' | 'danger';
};

export interface IElement {
  type: ElementType;
}

export interface IInteractiveElement extends IElement {
  actionId: ActionId;
  confirm?: ConfirmationDialog;
}

export interface IInputElement extends IElement {
  actionId: ActionId;
  confirm?: ConfirmationDialog;
}

export interface IBlock extends IElement {
  blockId?: BlockId;
}

export interface ITextObject extends IElement {
  text: string;
}

export interface IPlainText extends ITextObject {
  type: ElementType.PLAIN_TEXT;
  emoji?: boolean;
}

export interface IMarkdown extends ITextObject {
  type: ElementType.MARKDOWN;
  verbatim?: boolean;
}

export interface IButtonElement extends IInteractiveElement {
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

export interface IDatePickerElement extends IInteractiveElement {
  type: ElementType.DATEPICKER;
  placeholder?: ITextObject;
  initialDate?: string;
}

export interface IStaticSelectElement extends IInteractiveElement {
  type: ElementType.STATIC_SELECT;
  placeholder: ITextObject;
  options: Option[];
  optionGroups?: OptionGroup[];
  initialOption?: Option;
}

export interface IMultiStaticSelectElement extends IInteractiveElement {
  type: ElementType.MULTI_STATIC_SELECT;
  placeholder: ITextObject;
  options: Option[];
  optionGroups?: OptionGroup[];
  initialOption?: Option;
  maxSelectItems?: number;
}

export interface IOverflowElement extends IInteractiveElement {
  type: ElementType.OVERFLOW;
  options: Option[];
}

export interface IPlainTextInput extends IInputElement {
  type: ElementType.PLAIN_TEXT_INPUT;
  placeholder?: IPlainText;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface IDividerBlock extends IBlock {
  type: ElementType.DIVIDER;
}

export interface ISectionBlock extends IBlock {
  type: ElementType.SECTION;
  text?: ITextObject;
  fields?: ITextObject[];
  accessory?: (
    IImageElement
    | IButtonElement
    | IDatePickerElement
    | IStaticSelectElement
    | IMultiStaticSelectElement
    | IOverflowElement
  );
}

export interface IImageBlock extends IBlock {
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
  title?: IPlainText;
}

export interface IActionsBlock extends IBlock {
  type: ElementType.ACTIONS;
  elements: IInteractiveElement[];
}

export interface IContextBlock extends IBlock {
  type: ElementType.CONTEXT;
  elements: (ITextObject | IImageElement)[];
}

export interface IInputBlock extends IBlock {
  type: ElementType.INPUT;
  label: IPlainText;
  element: IInputElement;
  hint?: IPlainText;
  optional?: boolean;
}
