import { SelectElement } from './SelectElement';
import { DatePickerElement } from './elements/DatePickerElement';
import { PlainTextInputElement } from './elements/PlainTextInputElement';

export type InputElement =
  | DatePickerElement
  | SelectElement
  | PlainTextInputElement;
