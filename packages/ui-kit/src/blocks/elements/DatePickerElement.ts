import { Actionable } from '../Actionable';
import { BlockElementType } from '../BlockElementType';
import { TextObject } from '../TextObject';

export type DatePickerElement = Actionable<{
  type: `${BlockElementType.DATEPICKER}`;
  placeholder?: TextObject;
  initialDate?: string;
}>;
