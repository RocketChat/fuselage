import { IButtonElement } from './IButtonElement';
import { IDatePickerElement } from './IDatePickerElement';
import { IImageElement } from './IImageElement';
import { IMultiStaticSelectElement } from './IMultiStaticSelectElement';
import { IOverflowElement } from './IOverflowElement';
import { IStaticSelectElement } from './IStaticSelectElement';

export type SectionAccessoryElement =
  | IImageElement
  | IButtonElement
  | IDatePickerElement
  | IStaticSelectElement
  | IMultiStaticSelectElement
  | IOverflowElement;
