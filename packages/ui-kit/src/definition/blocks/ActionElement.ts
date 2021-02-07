import { ButtonElement } from './ButtonElement';
import { DatePickerElement } from './DatePickerElement';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { StaticSelectElement } from './StaticSelectElement';

export type ActionElement =
  | ButtonElement
  | StaticSelectElement
  | MultiStaticSelectElement
  | OverflowElement
  | DatePickerElement
  | LinearScaleElement;
