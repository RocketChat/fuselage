import { TextObject } from '../text/TextObject';
import { Actionable } from './Actionable';

export type DatePickerElement = Actionable<{
  type: 'datepicker';
  placeholder?: TextObject;
  initialDate?: string;
}>;
