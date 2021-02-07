import { DatePickerElement } from './DatePickerElement';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { PlainTextInputElement } from './PlainTextInputElement';
import { StaticSelectElement } from './StaticSelectElement';

export type InputElement =
  | PlainTextInputElement
  | StaticSelectElement
  | MultiStaticSelectElement
  | DatePickerElement
  | LinearScaleElement;
