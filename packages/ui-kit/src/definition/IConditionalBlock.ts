import { ConditionalBlockFilters } from './ConditionalBlockFilters';
import { ElementType } from './ElementType';
import { IBlock } from './IBlock';

export interface IConditionalBlock extends IBlock {
  type: ElementType.CONDITIONAL;
  when?: ConditionalBlockFilters;
  render: IBlock[];
}
