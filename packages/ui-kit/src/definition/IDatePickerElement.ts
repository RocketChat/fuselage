import { ElementType } from './ElementType';
import { IActionableElement } from './IActionableElement';
import { TextObject } from './TextObject';

export interface IDatePickerElement extends IActionableElement {
  type: ElementType.DATEPICKER;
  placeholder?: TextObject;
  initialDate?: string;
}
