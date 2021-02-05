import { IDatePickerElement } from './IDatePickerElement';
import { ILinearScaleElement } from './ILinearScaleElement';
import { IMultiStaticSelectElement } from './IMultiStaticSelectElement';
import { IPlainTextInput } from './IPlainTextInput';
import { IStaticSelectElement } from './IStaticSelectElement';

export type InputElement =
  | IPlainTextInput
  | IStaticSelectElement
  | IMultiStaticSelectElement
  | IDatePickerElement
  | ILinearScaleElement;
