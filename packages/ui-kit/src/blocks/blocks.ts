import { AccessoryElements, IBlockElement, IImageElement, IInputElement } from './elements';
import { ITextObject } from './objects';

export enum BlockType {
  SECTION = 'section',
  DIVIDER = 'divider',
  IMAGE = 'image',
  ACTIONS = 'actions',
  CONTEXT = 'context',
  INPUT = 'input',
}

export interface IBlock {
  type: BlockType;
  appId?: string;
  blockId?: string;
}

export interface ISectionBlock extends IBlock {
  type: BlockType.SECTION;
  text: ITextObject;
  accessory?: AccessoryElements;
}

export interface IImageBlock extends IBlock {
  type: BlockType.IMAGE;
  imageUrl: string;
  altText: string;
  title?: ITextObject;
}

export interface IDividerBlock extends IBlock {
  type: BlockType.DIVIDER;
}

export interface IActionsBlock extends IBlock {
  type: BlockType.ACTIONS;
  elements: Array<IBlockElement>;
}

export interface IContextBlock extends IBlock {
  type: BlockType.CONTEXT;
  elements: Array<ITextObject | IImageElement>;
}

export interface IInputBlock extends IBlock {
  type: BlockType.INPUT;
  element: IInputElement;
  label: ITextObject;
  optional?: boolean;
}
