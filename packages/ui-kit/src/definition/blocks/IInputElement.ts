import { IBlockElement } from './IBlockElement';
import { ITextObject } from './ITextObject';

export interface IInputElement extends IBlockElement {
  actionId: string;
  placeholder: ITextObject;
  initialValue?: string | Array<string>;
}
