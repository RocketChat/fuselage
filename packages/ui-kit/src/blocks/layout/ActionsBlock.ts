import { LayoutBlockish } from '../LayoutBlockish';
import { ButtonElement } from '../elements/ButtonElement';
import { DatePickerElement } from '../elements/DatePickerElement';
import { LinearScaleElement } from '../elements/LinearScaleElement';
import { MultiStaticSelectElement } from '../elements/MultiStaticSelectElement';
import { OverflowElement } from '../elements/OverflowElement';
import { StaticSelectElement } from '../elements/StaticSelectElement';

export type ActionsBlock = LayoutBlockish<{
  type: 'actions';
  elements: (
    | ButtonElement
    | StaticSelectElement
    | MultiStaticSelectElement
    | OverflowElement
    | DatePickerElement
    | LinearScaleElement
  )[];
}>;
