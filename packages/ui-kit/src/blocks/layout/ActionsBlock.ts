import { Layout } from '../Layout';
import { LayoutBlockType } from '../LayoutBlockType';
import { ButtonElement } from '../elements/ButtonElement';
import { DatePickerElement } from '../elements/DatePickerElement';
import { LinearScaleElement } from '../elements/LinearScaleElement';
import { MultiStaticSelectElement } from '../elements/MultiStaticSelectElement';
import { OverflowElement } from '../elements/OverflowElement';
import { StaticSelectElement } from '../elements/StaticSelectElement';

type ActionsBlockElements =
  | ButtonElement
  | StaticSelectElement
  | MultiStaticSelectElement
  | OverflowElement
  | DatePickerElement
  | LinearScaleElement;

export type ActionsBlock<
  Elements extends ActionsBlockElements = ActionsBlockElements
> = Layout<{
  type: `${LayoutBlockType.ACTIONS}`;
  elements: Elements[];
}>;
