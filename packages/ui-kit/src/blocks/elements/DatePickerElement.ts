import { Actionable } from '../Actionable';
import { TextObject } from '../TextObject';

export type DatePickerElement = Actionable<{
  type: 'datepicker';
  placeholder?: TextObject;
  initialDate?: string;
}>;
