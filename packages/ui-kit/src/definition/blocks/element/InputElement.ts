import { DatePickerElement } from './DatePickerElement';
import { PlainTextInputElement } from './PlainTextInputElement';
import { SelectElement } from './SelectElement';

export type InputElement =
  | DatePickerElement
  | SelectElement
  | PlainTextInputElement;
