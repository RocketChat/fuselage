import { ButtonElement } from './ButtonElement';
import { DatePickerElement } from './DatePickerElement';
import { ImageElement } from './ImageElement';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { PlainTextInputElement } from './PlainTextInputElement';
import { StaticSelectElement } from './StaticSelectElement';

export type BlockElement =
  | ButtonElement
  | DatePickerElement
  | ImageElement
  | LinearScaleElement
  | MultiStaticSelectElement
  | OverflowElement
  | PlainTextInputElement
  | StaticSelectElement;
