import { IButtonElement } from './IButtonElement';
import { IDatePickerElement } from './IDatePickerElement';
import { ILinearScaleElement } from './ILinearScaleElement';
import { IMultiStaticSelectElement } from './IMultiStaticSelectElement';
import { IOverflowElement } from './IOverflowElement';
import { IStaticSelectElement } from './IStaticSelectElement';

export type ActionElement =
  | IButtonElement
  | IStaticSelectElement
  | IMultiStaticSelectElement
  | IOverflowElement
  | IDatePickerElement
  | ILinearScaleElement;
