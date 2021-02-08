import { ButtonElement } from './ButtonElement';
import { DatePickerElement } from './DatePickerElement';
import { ElementType } from './ElementType';
import { Layout } from './Layout';
import { LinearScaleElement } from './LinearScaleElement';
import { MultiStaticSelectElement } from './MultiStaticSelectElement';
import { OverflowElement } from './OverflowElement';
import { StaticSelectElement } from './StaticSelectElement';

export type ActionsBlock = Layout<{
  type: ElementType.ACTIONS;
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
