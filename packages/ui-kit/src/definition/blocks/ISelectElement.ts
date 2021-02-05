import { BlockElementType } from './BlockElementType';
import { IInputElement } from './IInputElement';

export interface ISelectElement extends IInputElement {
  type: BlockElementType.STATIC_SELECT | BlockElementType.MULTI_STATIC_SELECT;
}
