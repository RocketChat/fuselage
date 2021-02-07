import { ButtonElement } from './ButtonElement';
import { DatePickerElement } from './DatePickerElement';
import { ImageElement } from './ImageElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { StaticSelectElement } from './StaticSelectElement';

export type SectionAccessoryElement =
  | ImageElement
  | ButtonElement
  | DatePickerElement
  | StaticSelectElement
  | MultiStaticSelectElement
  | OverflowElement;
