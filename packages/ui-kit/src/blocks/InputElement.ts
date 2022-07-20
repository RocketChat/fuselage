import type { SelectElement } from './SelectElement';
import type { DatePickerElement } from './elements/DatePickerElement';
import type { DateTimePickerElement } from './elements/DateTimePickerElement';
import type { PlainTextInputElement } from './elements/PlainTextInputElement';

export type InputElement =
  | DatePickerElement
  | DateTimePickerElement
  | SelectElement
  | PlainTextInputElement;
