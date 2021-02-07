import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { TextObject } from './TextObject';

export type DatePickerElement = Actionable<{
  type: ElementType.DATEPICKER;
  placeholder?: TextObject;
  initialDate?: string;
}>;
