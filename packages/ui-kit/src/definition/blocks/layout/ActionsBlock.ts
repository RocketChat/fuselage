import { ButtonElement } from '../element/ButtonElement';
import { DatePickerElement } from '../element/DatePickerElement';
import { LinearScaleElement } from '../element/LinearScaleElement';
import { MultiStaticSelectElement } from '../element/MultiStaticSelectElement';
import { OverflowElement } from '../element/OverflowElement';
import { StaticSelectElement } from '../element/StaticSelectElement';
import { Layout } from './Layout';

export type ActionsBlock = Layout<{
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

// export interface IActionsBlock extends IBlock {
//   type: BlockType.ACTIONS;
//   elements: Array<IBlockElement>;
// }
