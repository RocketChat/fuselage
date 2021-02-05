import { ElementType } from './ElementType';
import { IActionableElement } from './IActionableElement';
import { Option } from './Option';

export interface IOverflowElement extends IActionableElement {
  type: ElementType.OVERFLOW;
  options: Option[];
}
