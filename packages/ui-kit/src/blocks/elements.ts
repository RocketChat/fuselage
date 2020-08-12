import { IOptionObject, ITextObject } from './objects';

export enum BlockElementType {
  BUTTON = 'button',
  IMAGE = 'image',
  OVERFLOW_MENU = 'overflow',
  PLAIN_TEXT_INPUT = 'plain_text_input',
  STATIC_SELECT = 'static_select',
  MULTI_STATIC_SELECT = 'multi_static_select',
}

export interface IBlockElement {
  type: BlockElementType;
}

export type AccessoryElements = IButtonElement | IImageElement | IOverflowMenuElement;

export interface IInteractiveElement extends IBlockElement {
  actionId: string;
}

export interface IInputElement extends IBlockElement {
  actionId: string;
  placeholder: ITextObject;
  initialValue?: string | Array<string>;
}

export enum ButtonStyle {
  PRIMARY = 'primary',
  DANGER = 'danger',
}

export interface IButtonElement extends IInteractiveElement {
  type: BlockElementType.BUTTON;
  text: ITextObject;
  value?: string;
  url?: string;
  style?: ButtonStyle;
  // confirm?: IConfirmationDialogObject;
}

export interface IImageElement extends IBlockElement {
  type: BlockElementType.IMAGE;
  imageUrl: string;
  altText: string;
}

export interface IOverflowMenuElement extends IInteractiveElement {
  type: BlockElementType.OVERFLOW_MENU;
  options: Array<IOptionObject>;
  // confirm?: IConfirmationDialogObject;
}

export interface IPlainTextInputElement extends IInputElement {
  type: BlockElementType.PLAIN_TEXT_INPUT;
  initialValue?: string;
}

export interface ISelectElement extends IInputElement {
  type: BlockElementType.STATIC_SELECT | BlockElementType.MULTI_STATIC_SELECT;
}

export interface IStaticSelectElement extends ISelectElement {
  type: BlockElementType.STATIC_SELECT;
  placeholder: ITextObject;
  options: Array<IOptionObject>;
  initialValue?: string;
}

export interface IMultiStaticSelectElement extends ISelectElement {
  type: BlockElementType.MULTI_STATIC_SELECT;
  placeholder: ITextObject;
  options: Array<IOptionObject>;
  initialValue?: Array<string>;
}
