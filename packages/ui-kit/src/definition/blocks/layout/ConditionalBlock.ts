import { Conditions } from '../../Conditions';
import { Layout } from './Layout';
import { LayoutBlock } from './LayoutBlock';

export type ConditionalBlock = Layout<{
  type: 'conditional';
  when?: {
    [K in keyof Conditions]: Conditions[K][];
  };
  render: Exclude<LayoutBlock, ConditionalBlock>[];
}>;
